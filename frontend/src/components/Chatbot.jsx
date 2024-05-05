import React, { useState, useEffect } from "react";

function Chatbot() {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user_input = e.target.query.value;
    if (user_input) {
      try {
        const response = await fetch("http://localhost:5000/chatbot", {
          // Assuming Flask server is running on localhost:5000
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

  const scrollToBottom = () => {
    const element = document.getElementById("chat-end");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-8">
      <div className="chat-history flex-1 overflow-y-auto mb-4">
        {chatHistory.map((chat, index) => (
          <div key={index} className="mb-2">
            <div className="text-left">
              <span className="bg-gray-200 p-2 rounded-lg inline">
                {chat[0]} {/* User input */}
              </span>
              <span className="bg-white p-2 rounded-lg inline">
                {chat[1]} {/* Chatbot response */}
              </span>
            </div>
          </div>
        ))}
        <div id="chat-end"></div>
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          className="rounded-full p-4 flex-1 mr-4"
          name="query"
          placeholder="Type your message..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-full p-4 cursor-pointer"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Chatbot;
