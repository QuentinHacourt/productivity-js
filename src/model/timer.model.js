import { TimerMode } from "./timer.mode.model";
import * as TimerService from "./../service/local.storage.service";

export class TimerModel {
  constructor() {
    this.isRunning = false;
    this.mode = TimerMode.Pomodoro;
    this.minutesLeft = TimerService.Get(mode);
    this.secondsLeft = 0;
    this.pomodoroCount = 0;
    this.longBreakOccurence = 4;
  }

  async setMode(mode) {
    this.mode = mode;
    this.minutesLeft = await TimerService.Get(mode);
    this.secondsLeft = 0;
    if (mode === TimerMode.LongBreak)
      this.pomodoroCount = 0;



  }

  getMode() {
    return this.mode;
  }

  incrementPomodoroCount() {
    this.pomodoroCount++;
  }

  isLongBreak() {
    return this.pomodoroCount % this.longBreakOccurence == 0 && this.pomodoroCount != 0;
  }

  setPomodoroMode() {
    this.mode = TimerMode.Pomodoro;
  }

  setShortBreakMode() {
    this.mode = TimerMode.ShortBreak;
  }

  setLongBreakMode() {
    this.mode = TimerMode.LongBreak;
  }

  reset() {
    this.isRunning = false;
    this.minutesLeft = localStorageService.Get(this.mode);
  }

  pause() {
    this.isRunning = false;
  }
}
