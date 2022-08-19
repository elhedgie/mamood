import React from "react";
import style from "./breathButton.module.css";

const BreathButton = (props) => {
  const { type, text, onClick } = props;
  return (
    <button className={props.className} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default BreathButton;
