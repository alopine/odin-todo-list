import { v4 as uuid } from 'uuid';

export default class Todo {
  constructor(title, description, dueDate, priority) {
    this.id = uuid();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = false;
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

  getDescription() {
    return this.description;
  }

  setDescription(arg) {
    if (arg) {
      this.description = arg;
    }
  }

  getDueDate() {
    return this.dueDate;
  }

  setDueDate(arg) {
    if (arg) {
      this.dueDate = arg;
    }
  }

  getPriority() {
    return this.priority;
  }

  setPriority(arg) {
    if (arg) {
      this.priority = arg;
    }
  }

  getComplete() {
    return this.complete;
  }

  setComplete(arg) {
    this.complete = arg;
  }
}
