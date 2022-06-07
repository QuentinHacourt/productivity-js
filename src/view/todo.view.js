import { TodoController } from "../controller/todo.controller";
import { TodoListComponent } from "../view/components/todo.list.component";
import { TodoItemDetailsComponent } from "./components/todo.item.details.component";

class TodoView {
  constructor() {
    this.todoController = new TodoController();
    this.showAllTodoItems();
  }


  showAllTodoItems = async() => {
    const todoList = document.getElementById("todo-list");
    todoList.replaceChildren();

    const todoItems = await this.todoController.getTodoItems();
    const todoComponent = await TodoListComponent(todoItems);


    todoComponent.map((li) => {
      console.log(`list index id: ${li.id}`);
      li.addEventListener("click", ()=>{
        this.showItemDetails(parseInt(li.id));
      });
      todoList.appendChild(li);
    });
  };

  showItemDetails = async(id) => {
    const todoItem = await this.todoController.getTodoItem(id);
    const todoItemDetailsComponent = await TodoItemDetailsComponent(todoItem, this.deleteTodoItem);
    const d = document.getElementById("todo-item-details");
    d.replaceChildren();
    d.appendChild(todoItemDetailsComponent);
  };

  addTodoItem = async() => {
    const item = {
      title: document.getElementsByName("title")[0].value,
      description: document.getElementsByName("description")[0].value,
    };
    this.todoController.addItem(item);
    this.showAllTodoItems();
  };

  deleteTodoItem = async(id) => {
    await this.todoController.deleteItem(id);
    this.showAllTodoItems();
    document.getElementById("todo-item-details").replaceChildren();
  };
}

export { TodoView };
