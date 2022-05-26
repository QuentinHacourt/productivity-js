import {getAllItems, getItem} from "./service/todo-service"

let selected;

const getAllTasks = async() => {
  return getAllItems();
}

const getItemDetails = async() => {
  getItem(selected).then((todoItem) => {
    writeItemDetails(todoItem);
  });
}

const writeItemDetails = async (todoItem) => {
    const id = document.createElement("p");
    id.innerText = todoItem.id;
    const title = document.createElement("p");
    title.innerText = todoItem.title;
    const description = document.createElement("p");
    description.innerText = todoItem.description;

    document.getElementById("todo-item-details").replaceChildren();
    document.getElementById("todo-item-details").appendChild(id);
    document.getElementById("todo-item-details").appendChild(title);
    document.getElementById("todo-item-details").appendChild(description);
}

getAllTasks().then((todoList) => {
  for (const item of todoList) {
    const li = document.createElement("li");
    li.innerText = `${item.id}: ${item.title}`;
    li.addEventListener("click", ()=>{selected=item.id});
    li.addEventListener("click", getItemDetails);
    document.getElementById("todo-list").appendChild(li);
  }
});
