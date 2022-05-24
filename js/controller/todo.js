import * as TodoService from "../service/todo"

// export const getTodos = async () => {
//   return [...TodoService.getTodos()];
// }

export const addTodo = async () => {
  TodoService.addItem();
}

// export const editTodo = async (item) => {
//   TodoService.editTodo(item);
// }

// export const deleteTodo = async (id) => {
//   TodoService.deleteTodo(id);
// }
