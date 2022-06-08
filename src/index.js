import { TimerView } from "./view/timer.view";
import { TodoView } from "./view/todo.view";
import "./style.css"

const setupTimer = async () => {
  const timerView = new TimerView();
};

const setupTodo = async () => {
  const todoView = new TodoView();
};

setupTimer();
setupTodo();
