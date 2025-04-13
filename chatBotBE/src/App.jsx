import React, { useState } from "react";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";
import GenerateBotResponse from "./components/GenerateBotResponse"; // Ensure this function is correctly implemented and exported

const App = () => {
  const [chatHistory, setChatHistory] = useState([
    { sender: "bot", text: "hello! i am penny, your personal finance assistant. how can i help you today?" }
  ]); // State to store chat history with initial bot greeting
  // console.log("Initial chat history:", chatHistory);
  const handleSendMessage = async (userMessage) => {
    // Add user message to chat history
    const updatedHistory = [...chatHistory, { sender: "user", text: userMessage }];
    setChatHistory(updatedHistory);
    
    try {
      // Show loading message
      setChatHistory([...updatedHistory, { sender: "bot", text: "..." }]);
      
      // Call external AI service
      const response = await GenerateBotResponse(updatedHistory);
      
      // Replace loading with actual response
      const finalHistory = [...updatedHistory, { sender: "bot", text: response }];
      setChatHistory(finalHistory);
    } catch (error) {
      console.error("Error generating response:", error);
      setChatHistory([...updatedHistory, { sender: "bot", text: "Sorry, I encountered an error." }]);
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
          {chatHistory.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>

        {/* Footer */}
        <div className="chat-footer">
          <ChatForm
            onSendMessage={handleSendMessage}
          />
        </div>
      </div>
    </div>
  );
};


export default App;