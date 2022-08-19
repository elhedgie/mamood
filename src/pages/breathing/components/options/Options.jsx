import React from "react";
import { breathObj } from "../../../../content";
import OptionItem from "../optionItem/OptionItem";
import style from "./options.module.css";

function Options() {
  return (
    <div className={style.optionsBlock}>
      <h2 className={style.heading}>Выбери технику дыхания</h2>
      <div className={style.options}>
        {breathObj.map((elem) => (
          <OptionItem
            key={elem.name}
            pause={elem.pause}
            exhale={elem.breathOut}
            inhale={elem.breathIn}
            name={elem.name}
            description={elem.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Options;
