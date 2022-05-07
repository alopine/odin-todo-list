import './style.css';
import App from './modules/app';
import Project from './modules/project';
import Todo from './modules/todo';
import display from './modules/display';

let app = new App();
let activeProject = app.allProjects.find((project) => project.id === app.activeProjectID);

class events {
    static pageLoad() {
        this.projectListeners();
        this.todoListeners();
    }

    // Project Listeners
    static projectListeners() {
        this.addProjectMenu();
        this.addProjectSubmitChecker();
        this.addProjectSubmit();
        this.addProjectCancelBtn();
    }

    // Listener for switching active project
    

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
            if (inputName.value.length === 0) {
                submit.disabled = true;
            } else {
                submit.disabled = false;
            }
        });
    }

    static addProjectSubmit() {
        const submit = document.getElementById("addProjectBtn");
        submit.addEventListener("click", () => {
            app.addProject(display.addProjectSubmit());
                display.renderProject(app.allProjects[app.allProjects.length - 1]);
                console.log(app);
                // Add listener for project options button
        });
    }

    static addProjectCancelBtn() {
        const addProjectCancel = document.getElementById("addProjectCancel");
        addProjectCancel.addEventListener("click", () => {
            display.addProjectClear();
        });
    }

    // Listener for project options menu
    // Listener for editing project
    // Listener for deleting project

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
            if (inputName.value.length === 0) {
                submit.disabled = true;
            } else {
                submit.disabled = false;
            }
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
        this.delBtnListener();
    }

    // Listener for toggling complete status
    static todoToggleListener() {
        const todoRow = document.getElementById("addTodo").previousElementSibling;
        const btn = todoRow.querySelector(".taskCheckbox");
        btn.addEventListener("click", () => {
            let id = btn.parentNode.parentNode.id;
            display.toggleTodoStatus(id);
            let task = activeProject.projectTodos.find((todo) => todo.id === id);
            task.complete = !task.complete;
        });
        
    }

    // Listener for view button

    // Listener for edit button

    static delBtnListener() {
        const todoRow = document.querySelector(".addTask").previousElementSibling;
        const btn = todoRow.querySelector(".taskDelBtn");
        btn.addEventListener("click", () => {
            let id = btn.parentNode.parentNode.id;
            activeProject.deleteTodo(id);
            display.deleteTodo(id);
        });
    }
}

// Temporary testing
window.onload = () => {
    activeProject.addTodo(new Todo("Test Todo 1", "Test description 1", "2022-04-30", "Low"));
    activeProject.addTodo(new Todo("Test Todo 2", "Test description 2", "2022-04-30", "Low"));
    activeProject.addTodo(new Todo("Test Todo 3", "Test description 3", "2022-04-30", "Low"));
    app.addProject(new Project("Test Project 1"));
    app.allProjects.forEach((project) => {
        display.renderProject(project);
    });
    activeProject.projectTodos.forEach(todo => {
        display.renderTodo(todo);
        events.todoOptionsBtns();
    });
    display.renderActiveProject(activeProject.title);
    events.pageLoad();
}