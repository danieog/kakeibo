import React from "react";

const ChatMessage = ({message}) => {
    return (
        <div className={`message ${message.sender === "model" ? 'bot-message' : 'user-message'} message`}>
          {message.sender === "model"}
          <p className="message-text"> {message.text} </p>
        </div>
    );
    }

    export default ChatMessage;