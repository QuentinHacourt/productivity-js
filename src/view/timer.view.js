import { TimerController } from "../controller/timer.controller";

class TimerView {
  constructor() {
    this.timerController = new TimerController(this.printMessage);
    document.getElementById("start-button").addEventListener("click", this.start);
    document.getElementById("pause-button").addEventListener("click", this.pause);
    document.getElementById("reset-button").addEventListener("click", this.reset);
    document.getElementById("pomodoro-button").addEventListener("click", this.setPomodoroMode);
    document.getElementById("short-break-button").addEventListener("click", this.setShortBreakMode);
    document.getElementById("long-break-button").addEventListener("click", this.setLongBreakMode);
    document.getElementById("set-timer-settings").addEventListener("click", this.setTimerSettings);
  }

  setPomodoroMode = async () => {
    document.getElementById("pomodoro-button").disabled = true;
    document.getElementById("short-break-button").disabled = false;
    document.getElementById("long-break-button").disabled = false;

    document.getElementById("start-button").disabled = false;
    document.getElementById("pause-button").disabled = true;
    document.getElementById("reset-button").disabled = true;
    this.timerController.setPomodoroMode();
  };

  setShortBreakMode = async () => {
    document.getElementById("pomodoro-button").disabled = false;
    document.getElementById("short-break-button").disabled = true;
    document.getElementById("long-break-button").disabled = false;

    document.getElementById("start-button").disabled = false;
    document.getElementById("pause-button").disabled = true;
    document.getElementById("reset-button").disabled = true;
    this.timerController.setShortBreakMode();
  };

  setLongBreakMode = async () => {
    document.getElementById("pomodoro-button").disabled = false;
    document.getElementById("short-break-button").disabled = false;
    document.getElementById("long-break-button").disabled = true;

    document.getElementById("start-button").disabled = false;
    document.getElementById("pause-button").disabled = true;
    document.getElementById("reset-button").disabled = true;
    this.timerController.setLongBreakMode();
  };

  start = async () => {
    document.getElementById("start-button").disabled = true;
    document.getElementById("pause-button").disabled = false;
    document.getElementById("reset-button").disabled = false;
    this.timerController.start();
  };

  pause = async () => {
    document.getElementById("start-button").disabled = false;
    document.getElementById("pause-button").disabled = true;
    document.getElementById("reset-button").disabled = false;
    this.timerController.pause();
  };

  reset = async () => {
    document.getElementById("start-button").disabled = false;
    document.getElementById("pause-button").disabled = true;
    document.getElementById("reset-button").disabled = true;
    this.timerController.reset();
  };

  printMessage = async (message) => {
    let timer = document.getElementById("timer");
    let timerData = document.createElement("p");
    timerData.innerText = `${message}`;
    timer.innerHTML = "";
    timer.appendChild(timerData);
  };

  setTimerSettings = async () => {
    const pomodoroTime = document.getElementById("pomodoro-time-field").value;
    const shortBreakTime = document.getElementById("short-break-time-field").value;
    const LongBreakTime = document.getElementById("long-break-time-field").value;

    this.timerController.setTimerSettings(pomodoroTime, shortBreakTime, LongBreakTime);
  };
}

export { TimerView };
