import { TimerView } from "./view/timer.view";
import { TodoView } from "./view/todo.view";

const setupTimer = async () => {
  const timerView = new TimerView();
  document.getElementById("start-button").addEventListener("click", timerView.start);
  document.getElementById("pause-button").addEventListener("click", timerView.pause);
  document.getElementById("reset-button").addEventListener("click", timerView.reset);
  document.getElementById("pomodoro-button").addEventListener("click", timerView.setPomodoroMode);
  document.getElementById("short-break-button").addEventListener("click", timerView.setShortBreakMode);
  document.getElementById("long-break-button").addEventListener("click", timerView.setLongBreakMode);
};

const setupTodo = async () => {
  const todoView = new TodoView();
  document.getElementById("add-todo-item-button").addEventListener("click", todoView.addTodoItem);
};

setupTimer();
setupTodo();
