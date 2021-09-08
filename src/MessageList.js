import React from "react";
import "./App.css";

const MessageList = (props) => {
    return <div className="messageList">
        {props.content}
        </div>;
        
};


export default MessageList;