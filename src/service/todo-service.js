let todoList = [];

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
    if (item.id === id) {
      return i
    }
  }
}
