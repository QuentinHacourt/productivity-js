import { TodoModel } from "../model/todo.model"

export class TodoController {
  constructor() {
    this.todoModel = new TodoModel;
  }

  async getTodoItems() {
    return await this.todoModel.getAllItems();
  }

  async getTodoItem(id){
    return this.todoModel.getItem(id);
  }

  async addItem(item) {
    this.todoModel.addItem(item);
  }

  async deleteItem(id) {
    this.todoModel.deleteItem(id);
  }

  async editItem(item){
    this.todoModel.editItem(item);
  }
}
