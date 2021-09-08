import React, { useState, useEffect } from "react";
import "./App.css";
import MessageListComponent  from "./MessageListComponent.js";
import InputMessageComponent from "./InputMessageComponent";

function App() {
  const [inputMessage, setInputMessage] = useState({});
  const [userMessagesArray, setUserMessagesArray] = useState([]);
  const [globalMessagesArray, setGlobalMessagesArray] = useState([]);

  const onSendMessage = () => {
    setUserMessagesArray((prev) => [...prev, inputMessage]);
    setGlobalMessagesArray((prev) => [...prev, inputMessage]);
    setInputMessage({text: "", autor: ""});
  };

  const renderMessageList = globalMessagesArray.map((message, i) => (
      <div key={i}>
        <div>{message.autor}</div>
        <div>{message.text}</div>
      </div>
  ))

  const robotAnswer = () => {
    setGlobalMessagesArray((prev) => [...prev, {text: "Надеюсь Вас устроит мой ответ", autor: "robot:"}]);    
  };

  const robotAnswerTime = 1500;

  useEffect(() => {
    if(userMessagesArray.length !== 0){
        setTimeout(() => {
          robotAnswer();
        }, robotAnswerTime);        
    }    
  },[userMessagesArray]);

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
