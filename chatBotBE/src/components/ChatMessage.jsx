import React from "react";

const ChatMessage = ({ message = { sender: "", text: "" } }) => {
  return (
    <div className={`message ${message.sender === "bot" ? "bot-message" : "user-message"}`}>
      {/* Remove the stray expression that was here */}
      <p className="message-text">{message.text}</p>
    </div>
  );
};

export default ChatMessage;