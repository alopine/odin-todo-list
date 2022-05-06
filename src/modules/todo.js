import {v4 as uuid} from 'uuid';

export default class Todo {
    constructor(title, description, dueDate, priority) {
        this._id = uuid();
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._complete = false;
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

    get description() {
        return this._description;
    }

    set description(arg) {
        if (typeof arg === Boolean) {
            this._description = arg;
        }
    }

    get dueDate() {
        return this._dueDate;
    }

    set dueDate(arg) {
        if (arg) {
            this._dueDate = arg;
        }
    }

    get priority() {
        return this._priority;
    }

    set priority(arg) {
        if (arg) {
            this._priority = arg;
        }
    }

    get complete() {
        return this._complete;
    }

    set complete(arg) {
        this._complete = arg;
    }
}