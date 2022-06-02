import { TimerView } from "./view/timer.view"

const setupTimer = async() => {
  const timerView = new TimerView();
  document.getElementById("start-button").addEventListener("click", timerView.start);
  document.getElementById("pause-button").addEventListener("click", timerView.pause);
  document.getElementById("reset-button").addEventListener("click", timerView.reset);
  document.getElementById("pomodoro-button").addEventListener("click", timerView.setPomodoroMode);
  document.getElementById("short-break-button").addEventListener("click", timerView.setShortBreakMode);
  document.getElementById("long-break-button").addEventListener("click", timerView.setLongBreakMode);
}

setupTimer();
