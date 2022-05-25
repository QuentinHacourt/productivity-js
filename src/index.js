let isRunning = false;
let minutesLeft = 25;
let mode = 25;
let secondsLeft = 0;


export const start = async () => {
  isRunning = true;
  document.getElementById("start-button").disabled = true;
  document.getElementById("pause-button").disabled = false;
  loop();
}

const setPomodoroMode = async () => {
  setMode(25);
  document.getElementById("pomodoro-button").disabled = true;
  document.getElementById("short-break-button").disabled = false;
  document.getElementById("long-break-button").disabled = false;
}

const setShortBreakMode = async () => {
  setMode(5);
  document.getElementById("pomodoro-button").disabled = false;
  document.getElementById("short-break-button").disabled = true;
  document.getElementById("long-break-button").disabled = false;
}

const setLongBreakMode = async () => {
  setMode(15);
  document.getElementById("pomodoro-button").disabled = false;
  document.getElementById("short-break-button").disabled = false;
  document.getElementById("long-break-button").disabled = true;
}

const pause = async () => {
  isRunning = false;
  document.getElementById("start-button").disabled = false;
  document.getElementById("pause-button").disabled = true;
}

const reset = async () => {
  setMode(mode);
  document.getElementById("start-button").disabled = false;
  document.getElementById("pause-button").disabled = true;
}

const printTime = async () => {
  await printMessage(`${await timeToString(minutesLeft)}:${await timeToString(secondsLeft)}`);
}


const setMode = async (mode) => {
  pause();
  mode = mode;
  minutesLeft = mode;
  secondsLeft = 0;
  printTime();
}

const printMessage = async (message) => {
  let timer = document.getElementById("timer");
  let timerData = document.createElement("p");
  timerData.innerText = `${message}`;
  timer.innerHTML = "";
  timer.appendChild(timerData);
}

const loop = async () => {
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

const timeToString = async (time) => {
  if (time < 10) {
    return `0${time}`
  }
  return `${time}`
}

const delay = async (milliseconds) => {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

document.getElementById("start-button").addEventListener("click", start);
document.getElementById("pause-button").addEventListener("click", pause);
document.getElementById("reset-button").addEventListener("click", reset);

document.getElementById("pomodoro-button").addEventListener("click", setPomodoroMode);
document.getElementById("short-break-button").addEventListener("click", setShortBreakMode);
document.getElementById("long-break-button").addEventListener("click", setLongBreakMode);
