import {v4 as uuid} from 'uuid';

export default class Project {
    constructor(title) {
        this._id = uuid();
        this._title = title;
        this._projectTodos = [];
    }

    get id() {
        return this._id;
    }

    set id(arg) {
        if (arg) {
            this._id = arg;
        }
    }

    get title() {
        return this._title;
    }

    set title(arg) {
        if (arg) {
            this._title = arg;
        }
    }

    get projectTodos() {
        return this._projectTodos;
    }

    set projectTodos(arg) {
        if (arg) {
            this._projectTodos = arg;
        }
    }

    addTodo(newTodo) {
        if (this.projectTodos.find((todo) => todo.id === newTodo.id)) {
            return;
        } else {
            this.projectTodos.push(newTodo);
        }
    }

    deleteTodo(delTodoID) {
        this.projectTodos = this.projectTodos.filter((todo) => todo.id !== delTodoID);
    }
}