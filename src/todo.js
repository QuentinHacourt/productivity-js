import { TodoController } from "./controller/todo"

const todoController = new TodoController();

const getAllTasks = async() => {
  //  todoList.getAllItems().then((todoList) => {
  //   document.getElementById("todo-list").replaceChildren();
  //   for (const item of todoList) {
  //     const li = document.createElement("li");
  //     li.innerText = `${item.id}: ${item.title}`;
  //     li.addEventListener("click", getItemDetails);
  //     document.getElementById("todo-list").appendChild(li);
  //   }
  // });

  const todoList = document.getElementById("todo-list");
  todoList.replaceChildren();

  (await todoController.getTodoList()).map((li) => {
    console.log(`list index id: ${li.id}`);
    li.addEventListener("click", ()=>{
      getItemDetails(parseInt(li.id));
    });
    todoList.appendChild(li);
  })
}

const getItemDetails = async(id) => {
  const todoItemDetails = await todoController.getTodoDetails(id, deleteTodoItem);
  const d = document.getElementById("todo-item-details");
  d.replaceChildren();
  d.appendChild(todoItemDetails);
}

const addTodoItem = async () => {
  const item = {
    title: document.getElementsByName("title")[0].value,
    description: document.getElementsByName("description")[0].value,
  }
  todoController.addItem(item);
  getAllTasks();
}

const deleteTodoItem = async (id) => {
  todoController.deleteItem(id);
  getAllTasks();
  document.getElementById("todo-item-details").replaceChildren();
}



// run
getAllTasks();
document.getElementById("add-todo-item-button").addEventListener("click", addTodoItem)
