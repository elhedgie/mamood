import React from "react";
import { useState } from "react";
import style from "./optionItem.module.css";
import Breath from "../../../../store/store";
import { observer } from "mobx-react-lite";

const OptionItem = observer((props) => {
  // const optionHandler = () => {
  //     setOptionState(!optionState)
  // }
  return (
    <div className={style.optionBlock}>
      <h3 className={style.heading}>{props.name}</h3>
      <div className={style.description}>
        <p>{props.description}</p>
        <button
          onClick={() => Breath.start(props.inhale, props.exhale, props.pause)}
          className={style.btn}
        >
          ВЫБРАТЬ
        </button>
      </div>
    </div>
  );
});

export default OptionItem;
