import React, { useRef } from 'react';

const ChatForm = ({setChatHistory}) => {
    const inputRef = useRef(); 

    const handleSubmit = (e) => {
        e.preventDefault();

        const userMessage = inputRef.current.value.trim(); // Get the trimmed message
        if (!userMessage) // No need to send empty messages :(
            return; // Ignore empty messages
        
        setChatHistory((history) => [...history, { sender: 'user', text: userMessage }]); // Update chat history with user message
        setTimeout(() => {setChatHistory((history) => [...history, { sender: 'model', text: "Thinking..." }])}, 500); // Simulate a delay for the bot response
        inputRef.current.value = ''; // Clear the input field

        // Console log the user message for debugging
        console.log('User message:', userMessage);
    };

    return (
        <form action = "#" onSubmit={handleSubmit} className="chat-form">
            <input
                ref = {inputRef}
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