import ChatForm from "./components/ChatForm";
import React, { useState } from "react";
import ChatMessage from "./components/ChatMessage";

const App = () => {
  const [chatHistory, setChatHistory] = useState([]); // State to store chat history

  const generateBotResponse = async (history) => {
    history = history.map(({ sender, text }) => 
      ({ sender, parts: [text] }));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history}),
    }

    try {
      const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Something went wrong");
        
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="chatbot-popup">
        {/* Header */}
        <div className="chat-header">
          <div className="header-info">
            <h2 className="logo-text"> 🪙 penny the pincher </h2>
          </div>
          <button
            className="material-symbols-rounded"
            aria-label="Minimize chat"
          >
            keyboard_arrow_down
          </button>
        </div>

        {/* Body */}
        <div className="chat-body">
          <div className="message bot-message">
            <p className="message-text">
              hello! i am penny, your personal finance assistant. how can i help
              you today?
            </p>
          </div>

          {chatHistory.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>

        {/* Footer */}
        <div className="chat-footer">
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
