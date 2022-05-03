import './style.css';
import App from './modules/app';
import Project from './modules/project';
import Todo from './modules/todo';
import display from './modules/display';

let app = new App();
let activeProject = app.allProjects.find((project) => project.id === app.activeProjectID);

class events {
    static pageLoad() {
        this.todoListeners();
    }

    // Project Listeners
        // Listener for switching active project -- sidear
        // Listener for add project button
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
        const addTask = document.querySelector(".addTask");
        addTask.addEventListener("click", () => {
            display.addTaskMenu();
        })
    }

    static addTaskSubmitChecker() {
        const inputName = document.getElementById("formTodoName");
        const submit = document.querySelector(".addTaskMainBtn");
        inputName.addEventListener("input", () => {
            if (inputName.value.length === 0) {
                submit.disabled = true;
            } else {
                submit.disabled = false;
            }
        })
    }

    static addTaskSubmit() {
        const submit = document.querySelector(".addTaskMainBtn");
        submit.addEventListener("click", () => {
            if (submit.disabled === false) {
                activeProject.addTodo(display.addTaskSubmit());
                display.renderTodo(activeProject.projectTodos[activeProject.projectTodos.length - 1]);
                console.log(activeProject);
                this.delBtn();
            }
        })
    }

    static addTaskCancelBtn() {
        const addTaskCancelBtn = document.querySelector(".addTaskCancelBtn");
        addTaskCancelBtn.addEventListener("click", () => {
            display.addTaskClear();
        })
    }

    // Listener for view button

    // Listener for edit button

    static delBtn() {
        const todoRow = document.querySelector(".addTask").previousElementSibling;
        const btn = todoRow.querySelector(".taskDelBtn");
        btn.addEventListener("click", () => {
            let id = btn.parentNode.parentNode.id;
            activeProject.deleteTodo(id);
            display.deleteTodo(id);
            console.log(activeProject);
        });
    }

    // Listener for toggling complete status
}

// Temporary testing
window.onload = () => {
    activeProject.addTodo(new Todo("test 1", "test description", "2022-04-30", "Low"));
    activeProject.addTodo(new Todo("test 2", "test description", "2022-04-30", "Low"));
    activeProject.addTodo(new Todo("test 3", "test description", "2022-04-30", "Low"));
    console.log(activeProject);
    app.allProjects.forEach((project) => {
        display.renderProject(project);
    });
    activeProject.projectTodos.forEach(todo => {
        display.renderTodo(todo);
        events.delBtn();
    });
    display.renderActiveProject(activeProject.title);
    events.pageLoad();
}


// Create project function
    // Pushes a new project to the allProjects array

// Project function to toggle active status

// Delete project

// Todo function to toggle complete status

// Function to view todo details

// Function to edit todo details