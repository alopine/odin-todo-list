import { v4 as uuid } from 'uuid';

export default class Project {
  constructor(title) {
    this.id = uuid();
    this.title = title;
    this.projectTodos = [];
  }

  getID() {
    return this.id;
  }

  setID(arg) {
    if (arg) {
      this.id = arg;
    }
  }

  getTitle() {
    return this.title;
  }

  setTitle(arg) {
    if (arg) {
      this.title = arg;
    }
  }

  getProjectTodos() {
    return this.projectTodos;
  }

  setProjectTodos(arg) {
    if (arg) {
      this.projectTodos = arg;
    }
  }

  addTodo(newTodo) {
    if (!this.projectTodos.find((todo) => todo.id === newTodo.id)) {
      this.projectTodos.push(newTodo);
    }
  }

  deleteTodo(delTodoID) {
    this.projectTodos = this.projectTodos.filter(
      (todo) => todo.id !== delTodoID,
    );
  }

  findTodo(id) {
    return this.projectTodos.find((todo) => todo.id === id);
  }
}
