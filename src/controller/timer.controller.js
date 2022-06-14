import { TimerModel } from "../model/timer.model";
import * as TimerService from "../service/local.storage.service";
import { TimerMode } from "../model/timer.mode.model";

export class TimerController {
  constructor(printFunction, timerDoneSound, timerView) {
    this.timerDoneSound = timerDoneSound;
    this.printFunction = printFunction;
    this.timer = new TimerModel();
    this.timerView = timerView;
  }

  async setPomodoroMode() {
    this.setMode(TimerMode.Pomodoro);
  }

  async setPomodoroTime(minutes) {
    TimerService.Set(TimerMode.Pomodoro, minutes);
  }

  async setShortBreakMode() {
    this.setMode(TimerMode.ShortBreak);
  }

  async setShortBreakTime(minutes) {
    TimerService.Set(TimerMode.ShortBreak, minutes);
  }

  async setLongBreakMode() {
    this.setMode(TimerMode.LongBreak);
  }

  async setLongBreakTime(minutes) {
    TimerService.Set(TimerMode.LongBreak, minutes);
  }

  async setMode(mode) {
    await this.timer.setMode(mode);
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
      if (this.timer.secondsLeft === 0 && this.timer.minutesLeft === 0) {
        this.switchMode();
        this.printFunction("Time is over!");
        this.timerDoneSound();
        this.timer.isRunning = false;
      } else if (this.timer.secondsLeft === 0) {
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

  async switchMode() {
    console.log(this.timer.getMode())
    if (this.timer.getMode() == TimerMode.Pomodoro) {
      this.timer.incrementPomodoroCount();
      if (this.timer.isLongBreak()) {
        this.timerView.setLongBreakMode();
        return;
      }
      this.timerView.setShortBreakMode();
      return;
    }
    this.timerView.setPomodoroMode();
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

  async setTimerSettings(pomodoroTime, shortBreakTime, longBreakTime) {
    TimerService.Set(TimerMode.Pomodoro, pomodoroTime);
    TimerService.Set(TimerMode.ShortBreak, shortBreakTime);
    TimerService.Set(TimerMode.LongBreak, longBreakTime);
  }

  async getPomodoroTime() {
    const time = await TimerService.Get(TimerMode.Pomodoro);
    if (!time) {
      return 25;
    }
    return time;
  }

  async getShortBreakTime() {
    const time = await TimerService.Get(TimerMode.ShortBreak);
    if (!time) {
      return 5;
    }
    return time;
  }

  async getLongBreakTime() {
    const time = await TimerService.Get(TimerMode.LongBreak);
    if (!time) {
      return 15;
    }
    return time;
  }
}
