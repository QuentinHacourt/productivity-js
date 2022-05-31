import { PomodoroMode } from "../model/PomodoroMode"

export class TimerService {
  constructor(){
    this.isRunning = false;
    this.pomodoroMinutes = 25;
    this.shortBreakMinutes = 5;
    this.longBreakMinutes = 15;
    this.minutesLeft = 25;
    this.secondsLeft = 0;

  }

  async pause(){
    this.isRunning = false;
  }
  async reset(mode){
    this.isRunning = false;
    this.secondsLeft = 0;

    switch (mode) {
      case PomodoroMode.Pomodoro:
        this.minutesLeft = this.pomodoroMinutes;
        break;
      case PomodoroMode.LongBreak:
        this.minutesLeft = this.longBreakMinutes;
        break;
      case PomodoroMode.ShortBreak:
        this.minutesLeft = this.shortBreakMinutes;
        break;
      default:
        break;
    }
  }

  async startLoop() {
      while (isRunning) {
        if (secondsLeft === 0 && minutesLeft === 0){
          printMessage("Time is over!");
          isRunning = false;
        } else if (secondsLeft === 0){
          minutesLeft--;
          secondsLeft = 59;
          printTime();
        } else {
          secondsLeft--;
          printTime();
        }
        await delay(1000);
    }
  }
}
