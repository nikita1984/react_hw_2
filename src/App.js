import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputMessage, setInputMessage] = useState({});
  const [messagesArray, setMessagesArray] = useState([]);

  const onSendMessage = () => {
    setMessagesArray((prev) => [...prev, inputMessage]);
    setInputMessage({text: "", autor: ""});
  };

  return (
    <div className="mainWrapper">
      <div className="messageList">
        {messagesArray.map((message, i) => (
          <div key={i}>
            <div>{message.autor}</div>
            <div>{message.text}</div>
          </div>
        ))}
      </div>

      <div className="inputWrapper">
        <input 
          className="input"
          value={inputMessage.text}
          onChange={(e) => setInputMessage({text: e.target.value, autor: "Nikita:"})}
          onKeyDown={({ key }) => {
            if (key === "Enter") {
              //console.log("Enter");
              onSendMessage();
            }
          }}
        />
        <button onClick={onSendMessage}>Отправить</button>
      </div>
    </div>
  );
}

export default App;
