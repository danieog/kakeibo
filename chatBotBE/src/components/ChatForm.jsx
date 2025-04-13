import React, { useRef } from "react";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    // Clear input
    inputRef.current.value = "";

    // Add user's message
    const newHistory = [...chatHistory, { sender: "user", text: userMessage }];
    setChatHistory(newHistory);

    // Simulate bot "thinking..."
    setTimeout(() => {
      const thinkingHistory = [
        ...newHistory,
        { sender: "model", text: "Thinking..." },
      ];
      setChatHistory(thinkingHistory);

      // Call response generator
      generateBotResponse(thinkingHistory);
    }, 500);
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
        keyboard_arrow_up
      </button>
    </form>
  );
};

export default ChatForm;
