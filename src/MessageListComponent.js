import React from "react";
import "./App.css";

const MessageListComponent  = (props) => {
    return <div className="messageList">
        {props.content}
        </div>;
        
};


export default MessageListComponent ;