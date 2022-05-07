import './style.css';
import App from './modules/app';
import Project from './modules/project';
import Todo from './modules/todo';
import display from './modules/display';

let app = new App();
let activeProject = app.allProjects.find((project) => project.id === app.activeProjectID);

class events {
    static pageLoad() {
        this.renderSidebar();
        this.renderMain();
        this.projectListeners();
        this.todoListeners();
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
        display.renderActiveProject(activeProject);
        activeProject.projectTodos.forEach(todo => {
            display.renderTodo(todo);
            this.todoOptionsBtns();
        });
    }

    // Project Listeners
    static projectListeners() {
        this.addProjectMenu();
        this.addProjectSubmitChecker();
        this.addProjectSubmit();
        this.addProjectCancelBtn();
    }

    static singleProjectListeners() {
        this.switchActiveProjectListener();
        this.projectEditListener();
        this.projectDeleteListener();
    }

    static switchActiveProjectListener() {
        const projectEntry = document.getElementById("addProject").previousElementSibling;
        projectEntry.addEventListener("click", () => {
            if (app.activeProjectID === projectEntry.id) {
                return;
            } else {
                this.switchActiveProject(projectEntry.id);
            }
        })
    }

    static switchActiveProject(id) {
        app.activeProjectID = id;
        activeProject = app.allProjects.find((project) => project.id === id);
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
                console.log(app);
                this.singleProjectListeners();
        });
    }

    static addProjectCancelBtn() {
        const addProjectCancel = document.getElementById("addProjectCancel");
        addProjectCancel.addEventListener("click", () => {
            display.addProjectClear();
        });
    }

    static projectEditListener() {
        // TODO
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
            if (app.activeProjectID === id) {
                activeProject = app.allProjects[0];
                this.switchActiveProject(activeProject.id);
            }
        event.stopPropagation();
        });
    }

    // Todo Listeners
    static todoListeners() {
        this.addTaskMenu();
        this.addTaskSubmitChecker();
        this.addTaskSubmit();
        this.addTaskCancelBtn();
    }

    static addTaskMenu() {
        const addTask = document.getElementById("addTodo");
        addTask.addEventListener("click", () => {
            display.addTaskMenu();
        });
    }

    static addTaskSubmitChecker() {
        const inputName = document.getElementById("formTodoName");
        const submit = document.getElementById("addTodoBtn");
        inputName.addEventListener("input", () => {
            submit.disabled = !inputName.value.length;
        });
    }

    static addTaskSubmit() {
        const submit = document.getElementById("addTodoBtn");
        submit.addEventListener("click", () => {
            activeProject.addTodo(display.addTaskSubmit());
            display.renderTodo(activeProject.projectTodos[activeProject.projectTodos.length - 1]);
            this.todoOptionsBtns();
        });
    }

    static addTaskCancelBtn() {
        const addTodoCancel = document.getElementById("addTodoCancel");
        addTodoCancel.addEventListener("click", () => {
            display.addTaskClear();
        });
    }

    static todoOptionsBtns() {
        this.todoToggleListener();
        this.todoDeleteListener();
    }

    // Listener for toggling complete status
    static todoToggleListener() {
        const todoEntry = document.getElementById("addTodo").previousElementSibling;
        const btn = todoEntry.querySelector(".taskCheckbox");
        btn.addEventListener("click", () => {
            let id = btn.parentNode.parentNode.id;
            display.toggleTodoStatus(id);
            let task = activeProject.projectTodos.find((todo) => todo.id === id);
            task.complete = !task.complete;
        });
        
    }

    

    // Listener for edit button

    static todoDeleteListener() {
        const todoEntry = document.getElementById("addTodo").previousElementSibling;
        const btn = todoEntry.querySelector(".taskDelBtn");
        btn.addEventListener("click", () => {
            let id = btn.parentNode.parentNode.id;
            activeProject.deleteTodo(id);
            display.deleteItem(id);
        });
    }
}

// Temporary testing
window.onload = () => {
    activeProject.addTodo(new Todo("Test Todo 1", "Test description 1", "2022-04-30", "Low"));
    activeProject.addTodo(new Todo("Test Todo 2", "Test description 2", "2022-04-30", "Low"));
    activeProject.addTodo(new Todo("Test Todo 3", "Test description 3", "2022-04-30", "Low"));
    app.addProject(new Project("Test Project 1"));
    app.allProjects[1].addTodo(new Todo("Test Todo 1", "Test description 1", "2022-05-01", "Low"));
    app.allProjects[1].addTodo(new Todo("Test Todo 2", "Test description 2", "2022-05-01", "Low"));
    app.allProjects[1].addTodo(new Todo("Test Todo 3", "Test description 3", "2022-05-01", "Low"));
    events.pageLoad();
}