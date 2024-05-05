import React, { useState } from "react";

function Chatbot() {
  const [chatHistory, setChatHistory] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user_input = e.target.query.value;
    if (user_input) {
      try {
        const response = await fetch("http://localhost:5000/chatbot", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query: user_input }),
        });
        const data = await response.json(); // Parse the response as JSON
        if (data && typeof data.response === "string") {
          setChatHistory([...chatHistory, [user_input, data.response]]);
          e.target.query.value = "";
        } else {
          console.error("Invalid response:", data);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="h-screen">
      <div className="max-w-full h-full m-4 p-4 bg-gray-100 rounded shadow ">
        <div className="h-[28rem] overflow-y-auto">
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className={`${
                index % 2 === 0
                  ? "bg-blue-100 text-blue-800"
                  : "bg-slate-400 text-gray-800"
              } rounded p-2 mb-2`}
            >
              <p>{chat[0]}</p>
              <p>{chat[1]}</p>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex mt-[12rem]">
          <input
            type="text"
            className="flex-1 flex-col rounded-l p-2"
            name="query"
            placeholder="Enter a query"
            required
          />
          <button
            type="submit"
            className="bg-green-500 text-white rounded-r p-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chatbot;
