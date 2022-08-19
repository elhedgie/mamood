import { observer } from "mobx-react-lite";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import BreathButton from "../breathButton/BreathButton";
import style from "./breathBlock.module.css";
import breath from "../../../../store/store";

const BreathBlock = observer(() => {
  const canvas = useRef(null);
  let [canvasState, setCanvasState] = useState(40);
  let [textState, setTextState] = useState(null);
  let pause = 0;
  let pausedOnce = false;
  let req = useRef(null);
  let int = useRef(null);
  let rChange = useRef(1);
  const breathIn = () => {
    if (canvasState === 40) {
      setTextState("ВДОХ");
      rChange.current = 1 / (breath.inhale / 2);
    }
    if (canvasState > 120 && !pausedOnce) {
      if (breath.pause) {
        int.current = setInterval(() => {
          if (pause !== breath.pause - 1) {
            setTextState("ПАУЗА");
            rChange.current = 0;
            pause++;
          } else {
            setTextState("ВЫДОХ");
            clearInterval(int.current);
            rChange.current = -1 / (breath.exhale / 2);
            setCanvasState((canvasState += rChange.current));
            req.current = requestAnimationFrame(breathIn);
            pausedOnce = true;
            pause = 0;
          }
        }, 1000);
      }
    } else {
      pausedOnce = false;
      setCanvasState((canvasState += rChange.current));
      req.current = requestAnimationFrame(breathIn);
    }
  };

  const stopBreathingHandler = () => {
    cancelAnimationFrame(req.current);
    breath.stop();
  };

  const drawCircle = (x, y, r, color, colorTwo, text = null) => {
    let canv = canvas.current;
    let ctx = canv.getContext("2d");
    ctx.beginPath();
    ctx.globalAlpha = 0.8;
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    if (text !== null) {
      ctx.font = "26px helvetica";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = colorTwo;
      ctx.fillText(text, x, y);
    }
  };

  useEffect(() => {
    if (breath.started) {
      req.current = requestAnimationFrame(breathIn);
    }
  }, [breath.started]);
  useEffect(() => {
    drawCircle(160, 160, 140, "#91B9D3");
    drawCircle(160, 160, 90, "#3F7899");
    drawCircle(160, 160, canvasState, "#BDDAE6", "#ffffff", textState);
  }, [canvasState, textState]);

  return (
    <>
      <div className={style.canvasBlock}>
        <canvas
          className={style.canvas}
          ref={canvas}
          width={320}
          height={320}
        />
      </div>
      <div className={style.btnBlock}>
        <BreathButton
          className={style.btn}
          type="button"
          text="Стоп"
          onClick={stopBreathingHandler}
        />
      </div>
    </>
  );
});

export default BreathBlock;
