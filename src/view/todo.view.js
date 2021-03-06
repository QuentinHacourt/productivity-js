import { TodoController } from "../controller/todo.controller";
import { TodoListComponent } from "../view/components/todo.list.component";
import { TodoItemDetailsComponent } from "./components/todo.item.details.component";
import clickSoundFile from "../assets/sound/click.mp3";

class TodoView {
  constructor() {
    this.todoController = new TodoController();
    this.showAllTodoItems();
    document.getElementById("add-todo-item-button").addEventListener("click", this.addTodoItem);
  }


  showAllTodoItems = async () => {
    const todoList = document.getElementById("todo-list");
    todoList.replaceChildren();

    const todoItems = await this.todoController.getTodoItems();
    const todoComponent = await TodoListComponent(todoItems);


    todoComponent.map((li) => {
      li.addEventListener("click", () => {
        this.showItemDetails(parseInt(li.id));
      });
      todoList.appendChild(li);
    });
  };

  showItemDetails = async (id) => {
    const todoItem = await this.todoController.getTodoItem(id);
    const todoItemDetailsComponent = await TodoItemDetailsComponent(todoItem, this.deleteTodoItem);
    const d = document.getElementById("todo-item-details");
    d.replaceChildren();
    d.appendChild(todoItemDetailsComponent);
  };

  addTodoItem = async () => {
    this.playClickSound();
    const item = {
      title: document.getElementsByName("title")[0].value,
      description: document.getElementsByName("description")[0].value,
    };
    this.todoController.addItem(item);
    this.showAllTodoItems();
  };

  deleteTodoItem = async (id) => {
    this.playClickSound();
    await this.todoController.deleteItem(id);
    this.showAllTodoItems();
    document.getElementById("todo-item-details").replaceChildren();
  };

  playClickSound = async () => {
    const clickSound = new Audio(clickSoundFile);
    clickSound.play();
  };
}

export { TodoView };
