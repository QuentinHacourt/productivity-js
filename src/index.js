import { TimerView } from "./view/timer.view";
import { TodoView } from "./view/todo.view";
import "./style.css";

const setupTimer = async () => {
  new TimerView();
};

const setupTodo = async () => {
  new TodoView();
};

setupTimer();
setupTodo();
