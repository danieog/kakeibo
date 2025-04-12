
const App = () => {
  return <div className="container">
    <div className="chatbot-popup">
      {/* Header */}
      <div className="chat-header">
        <div className="header-info">
          <h2 className="logo-text">🪙 penny pincher </h2>
        </div>
          <button className="material-symbols-rounded">
            keyboard_arrow_down
          </button>
      </div>
      {/* Body */}
      <div className="chat-body">
        {/* Bot Message */}
        <div className="message bot-message">
          <p className="message-text"> hello! i am penny pincher, your personal finance assistant. how can i help you today?</p>
        </div>

        {/* User Message */}
        <div className="message user-message">
          <p className="message-text"> ask penny about anything finance related</p>
        </div>
      </div>
      
      {/* Footer */}
      <div className="chat-footer">
        <form action="#" className="chat-form">
          <input type="text" placeholder="type your message here" 
          className="message-input" required />
          <button className="material-symbols-rounded">
            keyboard_arrow_up
          </button>
        </form>
      </div>
    </div>
  </div>
  
}

export default App