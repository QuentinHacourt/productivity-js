export class PomodoroController {
  constructor(printFunction) {
    this.isRunning = false;
    this.minutesLeft = 25;
    this.secondsLeft = 0;
    this.mode = 25;
    this.printFunction = printFunction;
  }

  async setPomodoroMode() {
    this.setMode(25);
  }

  async setShortBreakMode() {
    this.setMode(1);
  }

  async setLongBreakMode() {
    this.setMode(15);
  }

  async setMode(mode) {
    this.pause();
    this.mode = mode;
    this.minutesLeft = mode;
    this.secondsLeft = 0;
    this.printTime();
  }

  async start() {
    this.isRunning = true;
    this.loop();
  }

  async pause() {
    this.isRunning = false;
  }

  async reset() {
    this.setMode(this.mode);
  }

  async printTime() {
    await this.printFunction(`${await this.timeToString(this.minutesLeft)}:${await this.timeToString(this.secondsLeft)}`);
  }

  async loop() {
    while (this.isRunning) {
      if (this.secondsLeft === 0 && this.minutesLeft === 0){
        this.printFunction("Time is over!");
        this.isRunning = false;
      } else if (this.secondsLeft === 0){
        this.minutesLeft--;
        this.secondsLeft = 59;
        this.printTime();
      } else {
        this.secondsLeft--;
        this.printTime();
      }
      await this.delay(1000);
    }
  }

  async timeToString(time) {
    if (time < 10) {
      return `0${time}`
    }
    return `${time}`
  }

   async delay(milliseconds) {
    return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
    });
  }
}
