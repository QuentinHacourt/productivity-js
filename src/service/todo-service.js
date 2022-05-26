let todoList = [
  {
    id: 1,
    title: "first task",
    description: "this is the first task",
  },
  {
    id: 2,
    title: "second task",
    description: "this is the second task",
  },
  {
    id: 3,
    title: "third task",
    description: "this is the last task",
  },
];

export const addItem = async () => {

}
export const deleteItem = async(id) => {
  let count = 0;
  for (const item of todoList) {
    if (item.id === id) {
      todoList.splice(count, 1);
    }
    count++;
  }
}
export const editItem = async (item) => {
  let count = 0;
  for (const i of todoList) {
    if (item.id === i.id) {
      todoList[count] = item;
    }
    count++;
  }
}

export const getAllItems = async () => {
  return todoList;
}

export const getItem = async(id) => {
  for (const i of todoList) {
    if (i.id === id) {
      return i
    }
  }
}
