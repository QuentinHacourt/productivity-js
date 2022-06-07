export const TodoListComponent = async (todoList) => {
  const list = [];
  todoList.map((item) => {
    const li = document.createElement("li");
    li.innerText = `${item.id}: ${item.title}`;
    li.id = item.id;
    list.push(li);
  });
  return list;
};
