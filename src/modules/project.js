import {v4 as uuid} from 'uuid';

export default class Project {
    constructor(title) {
        this._id = uuid();
        this._title = title;
        this._active = false;
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

    get active() {
        return this._active;
    }

    set active(arg) {
        if (arg) {
            this._active = arg;
        }
    }

    get projectTodos() {
        return this._projectTodos;
    }

    set projectTodos(todo) {
        if (todo) {
            this._projectTodos.push(todo);
        }
    }
}