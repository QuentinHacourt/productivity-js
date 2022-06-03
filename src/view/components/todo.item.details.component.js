export const TodoItemDetailsComponent = async(item, deleteFunction) => {
  const id = document.createElement("p");
  id.innerText = `id: ${item.id}`;
  const title = document.createElement("p");
  title.innerText = `title: ${item.title}`;
  const description = document.createElement("p");
  description.innerText = `description: ${item.description}`;

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.addEventListener("click", () => { deleteFunction(item.id) })

  const div = document.createElement("div");

  div.appendChild(id);
  div.appendChild(title);
  div.appendChild(description);
  div.appendChild(deleteButton);
  return div;
}
