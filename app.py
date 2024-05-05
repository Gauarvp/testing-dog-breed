from flask import Flask, render_template, url_for, request, session
import sqlite3
import os
import secrets
from PIL import Image
import qrcode
import cv2
import cv2
from pyzbar.pyzbar import decode
import time
import cv2
import requests
import numpy as np
import imutils

import google.generativeai as genai
genai.configure(api_key='AIzaSyAg6UtggTP8rYwWQ-oBhJQf7xDa7SyyhpE')
gemini_model = genai.GenerativeModel('gemini-pro')
chat = gemini_model.start_chat(history=[])

qr = qrcode.QRCode(
    version =1,
    box_size =10,
    border=6)

import tensorflow as tf
import numpy as np
from tensorflow.keras.preprocessing import image as keras_image  # Renamed to avoid conflict
from tensorflow.keras.applications.mobilenet_v2 import preprocess_input
# Load the trained model
model = tf.keras.models.load_model('model.h5')

# Load the class names
class_names = []
with open("class_names.txt", "r") as file:
    for line in file:
        class_names.append(line.strip().split(": ")[1])

# Function to preprocess the image
def preprocess_image(image_path):
    img = keras_image.load_img(image_path, target_size=(224, 224))  # Modified here
    img_array = keras_image.img_to_array(img)  # Modified here
    img_array = np.expand_dims(img_array, axis=0)
    img_array = preprocess_input(img_array)
    return img_array

# Function to make predictions
def predict_class(image_path):
    img_array = preprocess_image(image_path)
    predictions = model.predict(img_array)
    predicted_class_idx = np.argmax(predictions)
    predicted_class = class_names[predicted_class_idx]
    return predicted_class

connection = sqlite3.connect('user_data.db')
cursor = connection.cursor()

command = """CREATE TABLE IF NOT EXISTS user(name TEXT, password TEXT, mobile TEXT, email TEXT)"""
cursor.execute(command)

command = """CREATE TABLE IF NOT EXISTS details(Id INTEGER PRIMARY KEY AUTOINCREMENT, breed TEXT, name TEXT, age TEXT, phone TEXT, color TEXT, weight TEXT, Description TEXT, email TEXT)"""
cursor.execute(command)



app = Flask(__name__)
app.secret_key = secrets.token_hex(16)
chat_history = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/Uhome')
def Uhome():
    return render_template('predict.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/predict')
def predict():
    return render_template('predict.html')

@app.route('/addpage')
def addpage():
    return render_template('add.html')

@app.route('/getpage')
def getpage():
    return render_template('get.html')

@app.route('/userlog', methods=['GET', 'POST'])
def userlog():
    if request.method == 'POST':

        connection = sqlite3.connect('user_data.db')
        cursor = connection.cursor()

        name = request.form['name']
        password = request.form['password']

        query = "SELECT * FROM user WHERE name = '"+name+"' AND password= '"+password+"'"
        cursor.execute(query)

        result = cursor.fetchone()

        if result:
            session['user'] = result[0]
            return render_template('predict.html')
        else:
            return render_template('login.html', msg='Sorry, Incorrect Credentials Provided,  Try Again')

    return render_template('login.html')


@app.route('/userreg', methods=['GET', 'POST'])
def userreg():
    if request.method == 'POST':

        connection = sqlite3.connect('user_data.db')
        cursor = connection.cursor()

        name = request.form['name']
        password = request.form['password']
        mobile = request.form['phone']
        email = request.form['email']
        
        print(name, mobile, email, password)

        cursor.execute("INSERT INTO user VALUES ('"+name+"', '"+password+"', '"+mobile+"', '"+email+"')")
        connection.commit()

        return render_template('login.html', msg='Successfully Registered')
    
    return render_template('login.html')

@app.route('/analyse', methods=['GET', 'POST'])
def analyse():
    if request.method == 'POST':
        img = request.form['file']
        predicted_class = predict_class('static/test/'+img)
        print("Predicted class:", predicted_class)
        try:
            Links = {'n02099601-golden_retriever':'<iframe width="100%" height="315" src="https://www.youtube.com/embed/Kr5ZF7iwPTo?si=Vs7XG0Dg4F3NJMuQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
                    'n02099712-Labrador_retriever':'<iframe width="100%" height="315" src="https://www.youtube.com/embed/qJYfzUDQi0Q?si=qFjem24NXV0j2v4R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
                    'n02107142-Doberman':'<iframe width="100%" height="315" src="https://www.youtube.com/embed/xqnNy3MvnIY?si=kQFEgx2RDAxBM3HT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
                    'Chihuahua':'<iframe width="100%" height="315" src="https://www.youtube.com/embed/jDlDxLGLWJs?si=whcpZWaqZd4Z7IPK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
                    'n02106550-Rottweiler': '<iframe width="100%" height="315" src="https://www.youtube.com/embed/2BlQc6yyqpQ?si=KF8xFTGj7V-zAW5t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
                    'n02112018-Pomeranian': '<iframe width="100%" height="315" src="https://www.youtube.com/embed/2BlQc6yyqpQ?si=KF8xFTGj7V-zAW5t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'}

            return render_template('predict.html', status=predicted_class, image = 'http://127.0.0.1:5000/static/test/'+img, Link=Links[predicted_class])
        except:
            return render_template('predict.html', status=predicted_class, image = 'http://127.0.0.1:5000/static/test/'+img)
    return render_template('predict.html')

@app.route('/add', methods=['GET', 'POST'])
def add():
    if request.method == 'POST':
        data = request.form
        print(data)
        values = []
        keys = []
        for key in data:
            values.append(data[key])
            keys.append(key)
        print(keys)
        print(values)

        connection = sqlite3.connect('user_data.db')
        cursor = connection.cursor()
        cursor.execute("INSERT INTO details VALUES (NULL,?,?,?,?,?,?,?,?)", values)
        connection.commit()

        cursor.execute("select * from details")
        result = cursor.fetchall()

        Id = result[-1][0]
        print('id', Id)
        qr.add_data(Id)
        qr.make(fit=True)
        image = qr.make_image(fill_color="black", back_color= "white")
        image.save('static/qrcodes/'+str(Id)+".png")
        print("QR code has been generated successfully!")

        return render_template('add.html', msg = "Successfully added", img = 'http://127.0.0.1:5000/static/qrcodes/'+str(Id)+".png")
    return render_template('add.html')

@app.route('/get')
def get():
    conn = sqlite3.connect('user_data.db')
    c = conn.cursor()

    url="http://192.168.0.134:8080/shot.jpg"

    while True:
        img_resp = requests.get(url)
        img_arr = np.array(bytearray(img_resp.content),dtype=np.uint8)
        img = cv2.imdecode(img_arr, -1)
        img = imutils.resize(img, width=1000, height=1800)
        detectedBarcodes = decode(img)
        d=''
        t=''
        for barcode in detectedBarcodes:
            (x, y, w, h) = barcode.rect
            cv2.rectangle(img, (x-10, y-10),
                        (x + w+10, y + h+10),
                        (255, 0, 0), 2)
            
            d = barcode.data
            t = barcode.type
            
        if d != "":
            cv2.putText(img, str(d), (50, 50) , cv2.FONT_HERSHEY_SIMPLEX, 2, (255, 0, 0) , 2)

        cv2.imshow("Image", img)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

        if d != "":
            time.sleep(1)
            break

    cv2.destroyAllWindows()
    try:
        d = d.decode('utf-8', 'ignore')
        print(d)

        c.execute("select * from details where Id = '"+d+"'")
        result = c.fetchone()
        return render_template('get.html', result = result)
    except:
        return render_template('get.html', msg = 'QR code not detected')

@app.route('/chatbot', methods=['GET', 'POST'])
def chatbot():
    if request.method == 'POST':
        user_input = request.form['query']
        gemini_response = chat.send_message(user_input)
        data = gemini_response.text
        print(data)
        chat_history.append([user_input, data])
        return render_template('chatbot.html', chat_history=chat_history)
    return render_template('chatbot.html')

@app.route('/logout')
def logout():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True, use_reloader=False)
