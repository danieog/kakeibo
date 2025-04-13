import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the API with your key
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_KEY);

export async function GenerateBotResponse(messages) {
  try {
    console.log("Processing messages for Gemini:", messages);
    
    // Format messages for the API
    const formattedMessages = messages.map(message => ({
      role: message.role,
      parts: [{ text: message.parts }]
    }));
    
    console.log("Formatted messages:", formattedMessages);
    
    // Generate content
    const result = await genAI.generateContent({
      model: "models/gemini-2.0", // Correct model name if "gemini-2.0-flash" is invalid
      prompt: formattedMessages.map(msg => msg.parts[0].text).join("\n"),
      maxOutputTokens: 2048, // Adjusted parameter placement if required by the library
    });
    
    // Extract text from response
    const text = result.candidates[0]?.content || "No response generated.";
    
    console.log("Response from Gemini:", text);
    return text;
    
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw error;
  }
}

export default GenerateBotResponse;
