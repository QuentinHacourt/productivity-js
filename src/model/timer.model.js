export class TimerModel {
  constructor(){
    this.isRunning = false;
    this.minutesLeft = 25;
    this.secondsLeft = 0;
    this.mode = 25;
  }

  async setMode(mode) {
    this.mode = mode;
    this.minutesLeft = mode;
    this.secondsLeft = 0;
  }
}
