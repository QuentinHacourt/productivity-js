import { TodoService } from "../service/TodoService"
import { TodoListComponent } from "../view/components/todo-list-component"
import { TodoItemDetailsComponent } from "../view/components/todo-item-details-component"

export class TodoController {
  constructor() {
    this.todoService = new TodoService;
  }

  // returns pure data
  async getItem(id){
    return this.todoService.getItem(id);
  }
  async addItem(item) {
    this.todoService.addItem(item);
  }
  async deleteItem(id) {
    this.todoService.deleteItem(id);
  }
  async editItem(item){
    this.todoService.editItem(item);
  }

  // returns components/list of components
  async getTodoList() {
    return await TodoListComponent(await this.todoService.getAllItems());
  }
  async getTodoDetails(id) {
    return await TodoItemDetailsComponent(await this.todoService.getItem(id));
  }

}
