import { TimerController } from "../controller/timer.controller"

class TimerView {
  constructor(){
    this.timerController = new TimerController(this.printMessage);
  }

  setPomodoroMode = async () => {
    document.getElementById("pomodoro-button").disabled = true;
    document.getElementById("short-break-button").disabled = false;
    document.getElementById("long-break-button").disabled = false;

    document.getElementById("start-button").disabled = false;
    document.getElementById("pause-button").disabled = true;
    document.getElementById("reset-button").disabled = true;
    this.timerController.setPomodoroMode();
  }

  setShortBreakMode = async () => {
    document.getElementById("pomodoro-button").disabled = false;
    document.getElementById("short-break-button").disabled = true;
    document.getElementById("long-break-button").disabled = false;

    document.getElementById("start-button").disabled = false;
    document.getElementById("pause-button").disabled = true;
    document.getElementById("reset-button").disabled = true;
    this.timerController.setShortBreakMode();
  }

  setLongBreakMode = async () => {
    document.getElementById("pomodoro-button").disabled = false;
    document.getElementById("short-break-button").disabled = false;
    document.getElementById("long-break-button").disabled = true;

    document.getElementById("start-button").disabled = false;
    document.getElementById("pause-button").disabled = true;
    document.getElementById("reset-button").disabled = true;
    this.timerController.setLongBreakMode();
  }

  start = async () => {
    document.getElementById("start-button").disabled = true;
    document.getElementById("pause-button").disabled = false;
    document.getElementById("reset-button").disabled = false;
    this.timerController.start();
  }

  pause = async () => {
    document.getElementById("start-button").disabled = false;
    document.getElementById("pause-button").disabled = true;
    document.getElementById("reset-button").disabled = false;
    this.timerController.pause();
  }

  reset = async () => {
    document.getElementById("start-button").disabled = false;
    document.getElementById("pause-button").disabled = true;
    document.getElementById("reset-button").disabled = true;
    this.timerController.reset();
  }

  printMessage = async (message) => {
    let timer = document.getElementById("timer");
    let timerData = document.createElement("p");
    timerData.innerText = `${message}`;
    timer.innerHTML = "";
    timer.appendChild(timerData);
  }
}

export { TimerView }
