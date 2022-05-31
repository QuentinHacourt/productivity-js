import { PomodoroController } from "./controller/pomodoro"


const start = async () => {
  document.getElementById("start-button").disabled = true;
  document.getElementById("pause-button").disabled = false;
  pomodoroController.start();
}

const setPomodoroMode = async () => {
  document.getElementById("pomodoro-button").disabled = true;
  document.getElementById("short-break-button").disabled = false;
  document.getElementById("long-break-button").disabled = false;
  pomodoroController.setPomodoroMode();
}
//
const setShortBreakMode = async () => {
  document.getElementById("pomodoro-button").disabled = false;
  document.getElementById("short-break-button").disabled = true;
  document.getElementById("long-break-button").disabled = false;
  pomodoroController.setShortBreakMode();
}

const setLongBreakMode = async () => {
  document.getElementById("pomodoro-button").disabled = false;
  document.getElementById("short-break-button").disabled = false;
  document.getElementById("long-break-button").disabled = true;
  pomodoroController.setLongBreakMode();
}

const pause = async () => {
  document.getElementById("start-button").disabled = false;
  document.getElementById("pause-button").disabled = true;
  pomodoroController.pause();
}

const reset = async () => {
  document.getElementById("start-button").disabled = false;
  document.getElementById("pause-button").disabled = true;
  pomodoroController.reset();
}

const printMessage = async (message) => {
  let timer = document.getElementById("timer");
  let timerData = document.createElement("p");
  timerData.innerText = `${message}`;
  timer.innerHTML = "";
  timer.appendChild(timerData);
}

const pomodoroController = new PomodoroController(printMessage);

document.getElementById("start-button").addEventListener("click", start);
document.getElementById("pause-button").addEventListener("click", pause);
document.getElementById("reset-button").addEventListener("click", reset);

document.getElementById("pomodoro-button").addEventListener("click", setPomodoroMode);
document.getElementById("short-break-button").addEventListener("click", setShortBreakMode);
document.getElementById("long-break-button").addEventListener("click", setLongBreakMode);
