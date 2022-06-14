import { TimerController } from "../controller/timer.controller";
import clickSoundFile from "../assets/sound/click.mp3";
import ringSoundFile from "../assets/sound/ring.mp3";

class TimerView {
  constructor() {
    this.timerController = new TimerController(this.printMessage, this.playRingSound, this);
    this.setPomodoroMode();
    document.getElementById("start-button").addEventListener("click", this.start);
    document.getElementById("pause-button").addEventListener("click", this.pause);
    document.getElementById("reset-button").addEventListener("click", this.reset);
    document.getElementById("pomodoro-button").addEventListener("click", this.setPomodoroMode);
    document.getElementById("short-break-button").addEventListener("click", this.setShortBreakMode);
    document.getElementById("long-break-button").addEventListener("click", this.setLongBreakMode);
    document.getElementById("set-timer-settings").addEventListener("click", this.setTimerSettings);
    document.getElementById("timer-settings-cancel-button").addEventListener("click", this.closePopup);
    document.getElementById("settings-button").addEventListener("click", this.openPopup);
  }

  setPomodoroMode = async () => {
    this.playClickSound();
    document.getElementById("pomodoro-button").disabled = true;
    document.getElementById("short-break-button").disabled = false;
    document.getElementById("long-break-button").disabled = false;

    document.getElementById("start-button").disabled = false;
    document.getElementById("pause-button").disabled = true;
    document.getElementById("reset-button").disabled = true;
    this.timerController.setPomodoroMode();
  };

  setShortBreakMode = async () => {
    this.playClickSound();
    document.getElementById("pomodoro-button").disabled = false;
    document.getElementById("short-break-button").disabled = true;
    document.getElementById("long-break-button").disabled = false;

    document.getElementById("start-button").disabled = false;
    document.getElementById("pause-button").disabled = true;
    document.getElementById("reset-button").disabled = true;
    this.timerController.setShortBreakMode();
  };

  setLongBreakMode = async () => {
    this.playClickSound();
    document.getElementById("pomodoro-button").disabled = false;
    document.getElementById("short-break-button").disabled = false;
    document.getElementById("long-break-button").disabled = true;

    document.getElementById("start-button").disabled = false;
    document.getElementById("pause-button").disabled = true;
    document.getElementById("reset-button").disabled = true;
    this.timerController.setLongBreakMode();
  };

  start = async () => {
    this.playClickSound();
    document.getElementById("start-button").disabled = true;
    document.getElementById("pause-button").disabled = false;
    document.getElementById("reset-button").disabled = false;
    this.timerController.start();
  };

  pause = async () => {
    this.playClickSound();
    document.getElementById("start-button").disabled = false;
    document.getElementById("pause-button").disabled = true;
    document.getElementById("reset-button").disabled = false;
    this.timerController.pause();
  };

  reset = async () => {
    this.playClickSound();
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
    this.closePopup();
  };

  openPopup = async () => {
    this.playClickSound();
    document.getElementById("pomodoro-time-field").value = await this.timerController.getPomodoroTime();
    document.getElementById("short-break-time-field").value = await this.timerController.getShortBreakTime();
    document.getElementById("long-break-time-field").value = await this.timerController.getLongBreakTime();
    document.getElementById("myForm").style.display = "block";
  };

  closePopup = async () => {
    this.playClickSound();
    document.getElementById("myForm").style.display = "none";
  };

  playClickSound = async () => {
    const clickSound = new Audio(clickSoundFile);
    clickSound.play();
  };

  playRingSound = async () => {
    const ringSound = new Audio(ringSoundFile);
    ringSound.play();
  };
}

export { TimerView };
