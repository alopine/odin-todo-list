import Todo from "./todo";

export default class display {
    // Project Functions
    static renderProject(project) {
        const projectsList = document.getElementById("projectsList");
        const addProject = document.getElementById("addProject");
        let newNode = document.createElement("li");
        newNode.classList.add("projectsEntry");
        newNode.id = project.id;
        newNode.innerText = project.title;
        projectsList.insertBefore(newNode, addProject);
    }

    static renderActiveProject(title) {
        const projectTitle = document.querySelector(".projectTitle");
        projectTitle.innerText = title;
    }

    // Function to switch active project
        // Add active styling to active project

    // Function for add project button
        // Toggle project add form visibility
        // Adds a form at bottom of project list prompting for name
        // Cancel and add buttons below

    // Function to toggle edit project
        // Brings up similar interface as add but with name prefilled

    // Function to delete project

    // Todo Functions
    static renderTodo(todo) {
        const todosList = document.querySelector(".todosList");
        const addTask = document.getElementById("addTodo");
        let newNode = document.createElement("li");
        newNode.classList.add("projectTodo", "flex");
        newNode.id = todo.id;
        newNode.innerHTML = `
        <div class="todoLeft flex">
            <button class="taskCheckbox"> </button>
            <span>${todo.title}</span>
        </div>
        <div class="todoRight flex">
            <span class="taskDueDate">${todo.dueDate}</span>
            <button class="taskViewBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#808080" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </button>
            <button class="taskEditBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#808080" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
            </button>
            <button class="taskDelBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#808080" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
            </button>
        </div>`;
        todosList.insertBefore(newNode, addTask);
    }

    static addTaskMenu() {
        const addTaskBar = document.querySelector(".addTask");
        const addTaskMenu = document.querySelector(".addTaskMenuWrapper");
        addTaskBar.classList.add("hidden");
        addTaskMenu.classList.remove("hidden");
    }

    static addTaskSubmit() {
        const todoName = document.getElementById("formTodoName").value;
        const todoDesc = document.getElementById("formTodoDesc").value;
        const todoDueDate = document.getElementById("formTodoDueDate").value;
        const todoPriority = document.getElementById("formTodoPriority").value;
        this.addTaskClear();
        return new Todo(todoName, todoDesc, todoDueDate, todoPriority);
    }

    static addTaskClear() {
        const addTaskBar = document.getElementById("addTodo");
        const addTaskMenu = document.querySelector(".addTaskMenuWrapper");
        const addTaskForm = document.getElementById("addTodoForm");
        addTaskBar.classList.remove("hidden");
        addTaskMenu.classList.add("hidden");
        addTaskForm.reset();
        const submit = document.getElementById("addTodoBtn");
        submit.disabled = true;
    }

    // Function to bring up todo details view

    // Function to toggle edit todo
        // Brings up similar interface as add but with details prefilled

    static deleteTodo(id) {
        document.getElementById(id).remove();
    }

}