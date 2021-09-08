import React from "react";
import "./App.css";

const InputMessageComponent = (props) => {
    return   <input className="input"
    value={props.value}
    onChange={(e) => props.onChange({text: e.target.value, autor: "Nikita:"})}
    onKeyDown={props.onKeyDown}
    />;
};

export default InputMessageComponent;