import React, { useRef } from "react";

const ChatForm = ({ onSendMessage }) => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    // Clear input
    inputRef.current.value = "";
    
    // Call the onSendMessage function from parent
    onSendMessage(userMessage);
  };

  return (
    <form action="#" onSubmit={handleSubmit} className="chat-form">
      <input
        ref={inputRef}
        type="text"
        placeholder="type your message here"
        className="message-input"
        required
      />
      <button type="submit" className="material-symbols-rounded">
        send
      </button>
    </form>
  );
};

export default ChatForm;