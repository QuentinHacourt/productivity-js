export class TodoModel {
  constructor() {
    this.items = [
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
  }

  async addItem(item) {
    this.items.push({
      id: this.items.length+1,
      title: item.title,
      description: item.description,
    });
  }

  async deleteItem(id) {
    let count = 0;
    for (const item of this.items) {
      if (item.id === id) {
        this.items.splice(count, 1);
      }
      count++;
    }
  }

  async editItem(item) {
    let count = 0;
    for (const i of this.items) {
      if (item.id === i.id) {
        this.items[count] = item;
      }
      count++;
    }
  }

  async getAllItems() {
    return this.items;
  }

  async getItem(id) {
    for (const i of this.items) {
      if (i.id === id) {
        return i;
      }
    }
  }
}
