import { TodoService } from "../service/TodoService"

export class TodoController {
  constructor() {
    this.todoService = new TodoService;
  }

  async getTodoItems() {
    return await this.todoService.getAllItems();
  }

  async getTodoItem(id){
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

  async getTodoItem(id) {
    // return await TodoItemDetailsComponent((await this.todoService.getItem(id)), deleteFunction);
    return await this.todoService.getItem(id);
  }

}
