import './style.css';
import Project from './modules/project';
import Todo from './modules/todo';

class Primary {
    constructor() {
        this.allProjects = [];
        this.activeProjectID = activeProjectID;
    }
}





window.onload = () => {
    let test = new Project("test");
    test.active = true;

    test.projectTodos.push(new Todo("test title", "test description", "12/20/2022", "high"))
    console.log(test);
}



// Create project function
    // Pushes a new project to the allProjects array

// Project function to toggle active status

// Delete project

// Create todo function
    // Pushes a new function to the active project's todoList array

// Todo function to toggle complete status

// Delete todo