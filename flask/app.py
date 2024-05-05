from flask import Flask, render_template, request, jsonify
from werkzeug.utils import secure_filename
from dotenv import load_dotenv
from PIL import Image
import boto3
import os
from flask_cors import CORS

import google.generativeai as genai
genai.configure(api_key='AIzaSyAg6UtggTP8rYwWQ-oBhJQf7xDa7SyyhpE')
gemini_model = genai.GenerativeModel('gemini-pro')
chat = gemini_model.start_chat(history=[])

load_dotenv()

app = Flask(__name__)
CORS(app)

app.config['MAX_SIZE'] = 15 * 1024 * 1024 
app.config['UPLOAD_EXTENSIONS'] = ['jpg', 'png', 'jpeg']
app.config['MAX_WIDTH_HEIGHT'] = 4096

s3 = boto3.client('s3', region_name='us-east-1')
rekognition = boto3.client('rekognition', region_name='us-east-1')

BUCKET_NAME = os.environ.get("BUCKET_NAME")
MODEL_ARN = os.environ.get("MODEL_ARN")

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['UPLOAD_EXTENSIONS']

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'message': 'No file part'}), 400
    
    file = request.files['file']

    if file.filename == '':
        return jsonify({'message': 'No selected file'}), 400

    if file and allowed_file(file.filename):
        file.seek(0, os.SEEK_END)
        file_size = file.tell()
        if file_size > app.config['MAX_SIZE']:
            return jsonify({'message': 'File size must be less than 15MB'}), 400
        file.seek(0)
        img = Image.open(file)
        if img.width > app.config['MAX_WIDTH_HEIGHT'] or img.height > app.config['MAX_WIDTH_HEIGHT']:
            return jsonify({'message': 'Height and width must be less than 4096px'}), 400
    else:
        return jsonify({'message': 'File type not supported. Must be .jpg, .jpeg, or .png'}), 400

    filename = secure_filename(file.filename)
    file.seek(0)
    s3.upload_fileobj(file, BUCKET_NAME, filename)

    labels = rekognition.detect_custom_labels(
        ProjectVersionArn=MODEL_ARN,
        Image={
            'S3Object': {
                'Bucket': BUCKET_NAME,
                'Name': filename,
            }
        }
    )['CustomLabels']
    
    return jsonify({'labels': labels})


chat_history = []

@app.route('/chatbot', methods=['POST'])  # Only handle POST requests for the chatbot endpoint
def chatbot():
    if request.method == 'POST':
        user_input = request.json.get('query')
        # Your chatbot logic here
        # For testing purposes, mock a response
        gemini_response = chat.send_message(user_input)
        data = gemini_response.text
        print(data)
        chat_history.append([user_input, data])
        # data = "This is a response from the chatbot"
        # Instead of the above line, implement the actual chatbot logic
        # Then, return the response
        return jsonify({'response': data})

if __name__ == '__main__':
    app.run()
