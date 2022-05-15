import './style.css';
import App from './modules/app';
import Todo from './modules/todo';
import events from './modules/events';
import storage from './modules/storage';

let app = {};

if (!localStorage.getItem("app")) {
    app = new App();
    app.activeProject.addTodo(new Todo("Here's a test todo!", "And here's a test description!", "2022-04-30", "Low"));
    app.activeProject.addTodo(new Todo("Here's another test todo!", "And here's another test description!", "2022-04-30", "Medium"));
    app.activeProject.addTodo(new Todo("One more test todo!", "One more test description!", "2022-04-30", "High"));
} else {
    app = storage.restoreData();
    console.log("Restored" + app);
}

events.pageLoad();

export {app};
