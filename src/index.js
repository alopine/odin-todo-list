import './style.css';
import App from './modules/app';
import Project from './modules/project';
import Todo from './modules/todo';
import display from './modules/display';

let app = new App();
let activeProject = app.findProject(app.activeProjectID);

class events {
    static pageLoad() {
        this.renderSidebar();
        this.renderMain();
        this.addProjectListeners();
        this.addTodoListeners();
    }

    // Render events
    static renderSidebar() {
        app.allProjects.forEach((project) => {
            display.renderProject(project);
            this.singleProjectListeners();
        });
    }

    static renderMain() {
        display.clearActiveProjectDisplay();
        display.renderActiveProject(app.activeProject);
        app.activeProject.projectTodos.forEach(todo => {
            display.renderTodo(todo);
            this.todoOptionsBtns();
        });
    }

    // Project Listeners
    static addProjectListeners() {
        this.addProjectMenu();
        this.addProjectSubmitChecker();
        this.addProjectSubmit();
        this.addProjectCancelBtn();
    }

    static singleProjectListeners() {
        this.switchActiveProjectListener();
        this.editProjectDisplay();
        this.projectDeleteListener();
    }

    static editProjectListeners(id) {
        this.editProjectSubmitChecker(id);
        this.editProjectSubmit(id);
        this.editProjectCancel(id);
    }

    static switchActiveProjectListener() {
        const projectEntry = document.getElementById("addProject").previousElementSibling;
        projectEntry.addEventListener("click", () => {
            if (app.activeProject.id === projectEntry.id) {
                return;
            } else {
                this.switchActiveProject(projectEntry.id);
            }
        })
    }

    static switchActiveProject(id) {
        app.activeProject = app.findProject(id);
        this.renderMain();
    }
    
    static addProjectMenu() {
        const addProject = document.getElementById("addProject");
        addProject.addEventListener("click", () => {
            display.addProjectMenu();
        });
    }

    static addProjectSubmitChecker() {
        const inputName = document.getElementById("formProjectName");
        const submit = document.getElementById("addProjectBtn");
        inputName.addEventListener("input", () => {
            submit.disabled = !inputName.value.length;
        });
    }

    static addProjectSubmit() {
        const submit = document.getElementById("addProjectBtn");
        submit.addEventListener("click", () => {
            app.addProject(display.addProjectSubmit());
                display.renderProject(app.allProjects[app.allProjects.length - 1]);
                display.addProjectClear();
                this.singleProjectListeners();
        });
    }

    static addProjectCancelBtn() {
        const addProjectCancel = document.getElementById("addProjectCancel");
        addProjectCancel.addEventListener("click", () => {
            display.addProjectClear();
        });
    }

    static editProjectDisplay() {
        const projectEntry = document.getElementById("addProject").previousElementSibling;
        const id = projectEntry.id;
        const project = app.findProject(id);
        const btn = projectEntry.querySelector(".projectEditBtn");
        btn.addEventListener("click", (event) => {
            display.editProjectDisplay(project);
            this.editProjectListeners(id);
            event.stopPropagation();
        });
    }

    static editProjectSubmitChecker(id) {
        const editProject = document.getElementById(id).nextElementSibling;
        const inputName = editProject.querySelector(".editProjectName");
        const submit = editProject.querySelector(".editProjectSubmit");
        inputName.addEventListener("input", () => {
            submit.disabled = !inputName.value.length;
        });
    }

    static editProjectSubmit(id) {
        const editProject = document.getElementById(id).nextElementSibling;
        const project = app.findProject(id);
        const btn = editProject.querySelector(".editProjectSubmit");
        btn.addEventListener("click", () => {
            display.editProjectSubmit(project);
            display.editProjectClear(id);
            display.updateProjectName(project);
            if (id === app.activeProject.id) {
                display.renderActiveProject(app.activeProject);
            }
        });
    }

    static editProjectCancel(id) {
        const editProject = document.getElementById(id).nextElementSibling;
        const btn = editProject.querySelector(".editProjectCancel");
        btn.addEventListener("click", () => {
            display.editProjectClear(id);
        });
    }

    static projectDeleteListener() {
        const projectEntry = document.getElementById("addProject").previousElementSibling;
        const id = projectEntry.id;
        const btn = projectEntry.querySelector(".projectDelBtn");
        btn.addEventListener("click", (event) => {
            if (app.allProjects.length === 1) {
                window.alert("You can't delete your last project!");
            } else {
                app.deleteProject(id);
                display.deleteItem(id);
            }
            if (app.activeProject.id === id) {
                app.activeProject = app.allProjects[0];
                this.switchActiveProject(app.activeProject.id);
            }
            event.stopPropagation();
        });
    }

    // Todo Listeners
    static addTodoListeners() {
        this.addTodoMenu();
        this.addTodoSubmitChecker();
        this.addTodoSubmit();
        this.addTodoCancelBtn();
    }

    static addTodoMenu() {
        const addTodo = document.getElementById("addTodo");
        addTodo.addEventListener("click", () => {
            display.addTodoMenu();
        });
    }

    static addTodoSubmitChecker() {
        const inputName = document.getElementById("formTodoName");
        const submit = document.getElementById("addTodoBtn");
        inputName.addEventListener("input", () => {
            submit.disabled = !inputName.value.length;
        });
    }

    static addTodoSubmit() {
        const submit = document.getElementById("addTodoBtn");
        submit.addEventListener("click", () => {
            app.activeProject.addTodo(display.addTodoSubmit());
            display.addTodoClear();
            display.renderTodo(app.activeProject.projectTodos[app.activeProject.projectTodos.length - 1]);
            this.todoOptionsBtns();
        });
    }

    static addTodoCancelBtn() {
        const addTodoCancel = document.getElementById("addTodoCancel");
        addTodoCancel.addEventListener("click", () => {
            display.addTodoClear();
        });
    }

    static todoOptionsBtns() {
        const todoEntry = document.getElementById("addTodo").previousElementSibling;
        this.todoToggleListener(todoEntry);
        this.todoViewListener(todoEntry);
        this.todoEditListener(todoEntry);
        this.todoDeleteListener(todoEntry);
    }

    static todoToggleListener(todoEntry) {
        const btn = todoEntry.querySelector(".taskCheckbox");
        btn.addEventListener("click", () => {
            let id = btn.parentNode.parentNode.id;
            display.toggleTodoStatus(id);
            let task = app.activeProject.findTodo(id);
            task.complete = !task.complete;
        });
        
    }

    static todoViewListener(todoEntry) {
        const btn = todoEntry.querySelector(".taskViewBtn");
        btn.addEventListener("click", () => {
            const todo = app.activeProject.findTodo(btn.parentNode.parentNode.id);
            display.showTodoDetails(todo, app.activeProject);
            this.todoViewCloseListener();
        });
    }

    static todoViewCloseListener() {
        const closeBtn = document.querySelector(".modalCloseBtn");
        closeBtn.addEventListener("click", () => {
            display.closeTodoDetails();
        });
    }

    static todoEditListener(todoEntry) {
        // TODO
    }

    static todoDeleteListener(todoEntry) {
        const btn = todoEntry.querySelector(".taskDelBtn");
        btn.addEventListener("click", () => {
            let id = btn.parentNode.parentNode.id;
            app.activeProject.deleteTodo(id);
            display.deleteItem(id);
        });
    }
}

// Temporary testing
window.onload = () => {
    app.activeProject.addTodo(new Todo("Test Todo 1", "Test description 1", "2022-04-30", "Low"));
    app.activeProject.addTodo(new Todo("Test Todo 2", "Test description 2", "2022-04-30", "Low"));
    app.activeProject.addTodo(new Todo("Test Todo 3", "Test description 3", "2022-04-30", "Low"));
    app.addProject(new Project("Test Project 1"));
    app.allProjects[1].addTodo(new Todo("Test Todo 1", "Test description 1", "2022-05-01", "Low"));
    app.allProjects[1].addTodo(new Todo("Test Todo 2", "Test description 2", "2022-05-01", "Low"));
    app.allProjects[1].addTodo(new Todo("Test Todo 3", "Test description 3", "2022-05-01", "Low"));
    events.pageLoad();
}