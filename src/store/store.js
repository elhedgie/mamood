import { makeAutoObservable } from "mobx";

class Breath {
  inhale = null;
  exhale = null;
  pause = null;
  started = false;
  constructor() {
    makeAutoObservable(this);
  }

  start(inhale, exhale, pause) {
    this.inhale = inhale;
    this.started = true;
    this.exhale = exhale;
    this.pause = pause;
    console.log(inhale, exhale);
  }
  stop() {
    this.started = false;
  }
}

export default new Breath();
