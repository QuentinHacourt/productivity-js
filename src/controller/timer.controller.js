import { TimerModel } from "../model/timer.model";

export class TimerController {
  constructor(printFunction) {
    this.printFunction = printFunction;
    this.timer = new TimerModel();
  }

  async setPomodoroMode() {
    this.setMode(25);
  }

  async setShortBreakMode() {
    this.setMode(5);
  }

  async setLongBreakMode() {
    this.setMode(15);
  }

  async setMode(mode) {
    this.timer.setMode(mode);
    this.pause();
    this.printTime();
  }

  async start() {
    this.timer.isRunning = true;
    this.loop();
  }

  async pause() {
    this.timer.isRunning = false;
  }

  async reset() {
    this.setMode(this.timer.mode);
  }

  async printTime() {
    await this.printFunction(`${await this.timeToString(this.timer.minutesLeft)}:${await this.timeToString(this.timer.secondsLeft)}`);
  }

  async loop() {
    while (this.timer.isRunning) {
      if (this.timer.secondsLeft === 0 && this.timer.minutesLeft === 0){
        this.printFunction("Time is over!");
        this.timer.isRunning = false;
      } else if (this.timer.secondsLeft === 0){
        this.timer.minutesLeft--;
        this.timer.secondsLeft = 59;
        this.printTime();
      } else {
        this.timer.secondsLeft--;
        this.printTime();
      }
      await this.delay(1000);
    }
  }

  async timeToString(time) {
    if (time < 10) {
      return `0${time}`;
    }
    return `${time}`;
  }

  async delay(milliseconds) {
    return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
    });
  }
}
