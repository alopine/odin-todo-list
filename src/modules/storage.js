import App from './app';
import Project from './project';
import Todo from './todo';

export default class storage {
    static storeData(app) {
        window.localStorage.setItem("app", JSON.stringify(app));
    }

    static restoreData() {
        let app = JSON.parse(window.localStorage.getItem("app"));
        let tempApp = new App();
        tempApp.allProjects = [];
        app._allProjects.forEach((project) => {
            let tempProject = new Project(project._title);
            tempProject.id = project._id;
            tempProject.projectTodos = [];
            // Loop to iterate over each project's todos
            project._projectTodos.forEach((todo) => {
                let tempTodo = new Todo(todo._title, todo._description, todo._dueDate, todo._priority);
                tempTodo.complete = todo._complete;
                tempTodo.id = todo._id;
                tempProject.projectTodos.push(tempTodo);
            });
            tempApp.allProjects.push(tempProject);
        });
        tempApp.activeProject = tempApp.findProject(app._activeProject._id);
        return tempApp;
    }
}