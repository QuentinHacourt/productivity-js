import { TodoList } from "./service/todo-service"

const todoList = new TodoList();

const getAllTasks = async() => {
  return todoList.getAllItems().then((todoList) => {
    document.getElementById("todo-list").replaceChildren();
    for (const item of todoList) {
      const li = document.createElement("li");
      li.innerText = `${item.id}: ${item.title}`;
      li.addEventListener("click", ()=>{
        getItemDetails(item.id);
      });
      li.addEventListener("click", getItemDetails);
      document.getElementById("todo-list").appendChild(li);
    }
  });
}

const getItemDetails = async(id) => {
  todoList.getItem(id).then((todoItem) => {
    writeItemDetails(todoItem);
  });
}

const writeItemDetails = async (todoItem) => {
    const id = document.createElement("p");
    id.innerText = `id: ${todoItem.id}`;
    const title = document.createElement("p");
    title.innerText = `title: ${todoItem.title}`;
    const description = document.createElement("p");
    description.innerText = `description: ${todoItem.description}`;

    document.getElementById("todo-item-details").replaceChildren();
    document.getElementById("todo-item-details").appendChild(id);
    document.getElementById("todo-item-details").appendChild(title);
    document.getElementById("todo-item-details").appendChild(description);
}
const addTodoItem = async () => {
  // create item
  const item = {
    title: document.getElementsByName("title")[0].value,
    description: document.getElementsByName("description")[0].value,
  }

  // add items to list
  todoList.addItem(item);

  //refresh items list
  getAllTasks();
}

// run

getAllTasks();
document.getElementById("add-todo-item-button").addEventListener("click", addTodoItem)
