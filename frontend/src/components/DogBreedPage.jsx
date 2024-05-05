import React, { useState } from "react";
import axios from "axios";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState("");
  const [labels, setLabels] = useState([]);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [predictedBreed, setPredictedBreed] = useState("");

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    setUploadedImage(URL.createObjectURL(uploadedFile));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/upload", 
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      
      if (response && response.data) {
        setLabels(response.data.labels);
        setPredictedBreed("This looks like a lovely dog breed! Consider adopting.😉");
      } else {
        setMsg("Response or response data is undefined");
      }
    } catch (error) {
      setMsg(error.response.data.message || "Error occurred while processing the image.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">
        Form to Upload an Image for Dog Breed Detection
      </h1>

      <input
        type="file"
        onChange={handleFileChange}
        className="hidden"
        id="file-upload"
      />

      <label
        htmlFor="file-upload"
        className="block w-full max-w-xs bg-[#FF7F50] hover:bg-[#8B4513] text-white font-bold py-2 px-4 rounded-md text-center cursor-pointer my-4"
      >
        Select File
      </label>
      {uploadedImage && (
        <img
          src={uploadedImage}
          alt="Uploaded"
          className="mb-4 max-w-xl h-auto max-h-[28rem]"
        />
      )}
      <button
        onClick={handleSubmit}
        className="bg-[#FF7F50] text-white px-4 py-2 rounded"
      >
        Upload
      </button>

      {msg && <p className="text-red-500 mt-4">{msg}</p>}

      {labels.length > 0 && (
        <div className="mt-8">
          <h1 className="text-2xl font-bold mb-4">Detected Dog Breeds</h1>
          <ul>
            {labels.map((label, index) => (
              <li
                key={index}
                className="bg-gray-100 rounded-md p-2 mb-2 flex justify-between items-center"
              >
                <span className="font-bold">{label.Name}</span>
                <span className="text-gray-700">{label.Confidence}%</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-gray-700 text-lg">{predictedBreed}</p>
        </div>
      )}
    </div>
  );
};

export default UploadForm;
