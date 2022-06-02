import { TodoController } from "../controller/todo.controller"

class TodoView {
  constructor() {
    this.todoController = new TodoController();
    this.showAllTasks();
    // this.todoItemDetails = document.getElementById("todo-item-details");
  }


  showAllTasks = async() => {
    const todoList = document.getElementById("todo-list");
    todoList.replaceChildren();

    (await this.todoController.getTodoList()).map((li) => {
      console.log(`list index id: ${li.id}`);
      li.addEventListener("click", ()=>{
        this.showItemDetails(parseInt(li.id));
      });
      todoList.appendChild(li);
    })
  }

  showItemDetails = async(id) => {
    const todoItemDetails = await this.todoController.getTodoDetails(id, this.deleteTodoItem);
    const d = document.getElementById("todo-item-details");
    d.replaceChildren();
    d.appendChild(todoItemDetails);
  }

  addTodoItem = async() => {
    const item = {
      title: document.getElementsByName("title")[0].value,
      description: document.getElementsByName("description")[0].value,
    }
    this.todoController.addItem(item);
    this.showAllTasks();
  }

  deleteTodoItem = async(id) => {
    this.todoController.deleteItem(id);
    this.getAllTasks();
    document.getElementById("todo-item-details").replaceChildren();
  }

}

export { TodoView }
