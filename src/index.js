import './style.css';
import App from './modules/app';
import Project from './modules/project';
import Todo from './modules/todo';
import display from './modules/domDisplay';

let app = new App();
let activeProject = app.allProjects.find((project) => project.id === app.activeProjectID);
console.log(activeProject);

class events {
    static pageLoad() {
        this.delBtn();
        this.addTaskMenu();
        this.addTaskSubmitChecker();
        this.addTaskSubmit();
        this.addTaskCancelBtn();
    }

    static delBtn() {
        const deleteBtns = document.querySelectorAll(".taskDelBtn");
        deleteBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                let id = btn.parentNode.parentNode.id;
                activeProject.deleteTodo(id);
                display.deleteTodo(id)
                console.log(activeProject);
            })
        })
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
                display.addTaskCancelBtn();
                console.log(activeProject);
            }
        })
    }

    static addTaskCancelBtn() {
        const addTaskCancelBtn = document.querySelector(".addTaskCancelBtn");
        addTaskCancelBtn.addEventListener("click", () => {
            display.addTaskCancelBtn();
        })
    }
}

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
    });
    
    display.renderActiveProject(activeProject.title);

    events.pageLoad();
}



// Create project function
    // Pushes a new project to the allProjects array

// Project function to toggle active status

// Delete project

// Create todo function
    // Pushes a new function to the active project's todoList array

// Todo function to toggle complete status

// Delete todo