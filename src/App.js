import React, { useState } from "react";
import "./App.css";
import MessageListComponent  from "./MessageListComponent.js";
import InputMessageComponent from "./InputMessageComponent";

function App() {
  const [inputMessage, setInputMessage] = useState({});
  const [messagesArray, setMessagesArray] = useState([]);

  const onSendMessage = () => {
    setMessagesArray((prev) => [...prev, inputMessage]);
    setInputMessage({text: "", autor: ""});
  };

  const renderMessageList = messagesArray.map((message, i) => (
      <div key={i}>
        <div>{message.autor}</div>
        <div>{message.text}</div>
      </div>
  ))
  

  return (
    <div className="mainWrapper">
      <MessageListComponent content={renderMessageList}></MessageListComponent >    
      <div className="inputWrapper">
      <InputMessageComponent value={inputMessage.text} 
        onChange={setInputMessage} 
        onKeyDown={({ key }) => {
        if (key === "Enter") {
          onSendMessage();
        }
      }}></InputMessageComponent> 
        <button className="button" onClick={onSendMessage}>Отправить</button>
      </div>
    </div>
  );
}

export default App;
