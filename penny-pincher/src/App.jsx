import React from "react";
import ChatComponent from "./components/chatcomponents";

const App = () => {
  return (
    <div className="max-w-screen-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <ChatComponent />
      </div>
    </div>
  );
};

export default App;
