import { GoogleGenAI } from "@google/genai";

// Initialize the API with your key
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_KEY });

export async function GenerateBotResponse(messages) {
  try {
    console.log("Messages array:", messages);
    
    // Check if messages array is empty
    if (!messages || messages.length === 0) {
      console.log("Messages array is empty");
      return "No messages to respond to. Please send a message.";
    }
    
    // Get the last message (assuming it's from the user)
    const lastMessage = messages[messages.length - 1];
    console.log("Last message:", lastMessage);
    
    // Extract text content from the message
    let userInput = "";
    
    if (lastMessage && typeof lastMessage === 'object') {
      // If it's an object with a parts property
      if (lastMessage.parts !== undefined) {
        userInput = String(lastMessage.parts);
      } 
      // If it's an object with a content property
      else if (lastMessage.content !== undefined) {
        userInput = String(lastMessage.content);
      }
      // If it's an object with a text property  
      else if (lastMessage.text !== undefined) {
        userInput = String(lastMessage.text);
      }
      // If it has a message property
      else if (lastMessage.message !== undefined) {
        userInput = String(lastMessage.message);
      }
    } else if (typeof lastMessage === 'string') {
      // If the message is directly a string
      userInput = lastMessage;
    }
    
    console.log("Extracted user input:", userInput);
    
    // If we couldn't extract any text, use a fallback
    if (!userInput || userInput.trim() === "") {
      console.log("No valid input extracted");
      return "I couldn't understand your message. Please try again.";
    }
    
    // Generate content with the extracted text
    const result = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: userInput
    });
    
    const text = result.text || "No response generated.";
    
    console.log("Response from Gemini:", text);
    return text;
    
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Sorry, I encountered an error processing your request.";
  }
}

export default GenerateBotResponse;