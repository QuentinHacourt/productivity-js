import { PomodoroMode } from "../model/PomodoroMode"

export class TimerModel {
  constructor(minutes, seconds){
    this.minutes = minutes;
    this.seconds = seconds;
  }

  async count(){
    if (secondsLeft === 0){
      minutesLeft--;
      secondsLeft = 59;
    } else {
      secondsLeft--;
    }
  }
}
