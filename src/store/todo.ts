import { defineStore } from 'pinia';

interface ToDoItem {
  item: string;
  id: number;
  completed: boolean;
}

const useTodoListStore = defineStore({
  id: 'todoList',
  state: () => {
    return {
      todoList: [] as ToDoItem[],
      id: 0,
    };
  },
  actions: {
    addTodo(item: string) {
      this.id += 1;
      this.todoList.push({
        item,
        id: this.id,
        completed: false,
      });
    },
    deleteTodo(itemId: number) {
      this.todoList = this.todoList.filter((object) => {
        return object.id !== itemId;
      });
    },
    toogleCompleted(idToFind: number) {
      const todo = this.todoList.find((obj) => obj.id === idToFind);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export default useTodoListStore;
