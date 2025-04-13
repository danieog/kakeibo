import ChatForm from "./components/ChatForm";
import React, { useState } from "react";
import ChatMessage from "./components/ChatMessage"; // Import ChatMessage component

const App = () => {
  const [chatHistory, setChatHistory] = useState([]); // State to store chat history

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
          {/* Bot Message */}
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
          <ChatForm setChatHistory={setChatHistory} />
        </div>
      </div>
    </div>
  );
};

export default App;