import App from './app';
import Project from './project';
import Todo from './todo';

export default class storage {
  static checkData() {
    let tempApp = {};
    if (!localStorage.getItem('app')) {
      tempApp = new App();
      tempApp.activeProject.addTodo(
        new Todo(
          "Here's a test todo!",
          "And here's a test description!",
          '2022-04-30',
          'Low',
        ),
      );
      tempApp.activeProject.addTodo(
        new Todo(
          "Here's another test todo!",
          "And here's another test description!",
          '2022-04-30',
          'Medium',
        ),
      );
      tempApp.activeProject.addTodo(
        new Todo(
          'One more test todo!',
          'One more test description!',
          '2022-04-30',
          'High',
        ),
      );
    } else {
      tempApp = this.restoreData();
    }
    return tempApp;
  }

  static storeData(app) {
    window.localStorage.setItem('app', JSON.stringify(app));
  }

  static restoreData() {
    const app = JSON.parse(window.localStorage.getItem('app'));
    const tempApp = new App();
    tempApp.setAllProjects([]);
    app.allProjects.forEach((project) => {
      const tempProject = new Project(project.title);
      tempProject.setID(project.id);
      tempProject.setProjectTodos([]);
      // Loop to iterate over each project's todos
      project.projectTodos.forEach((todo) => {
        const tempTodo = new Todo(
          todo.title,
          todo.description,
          todo.dueDate,
          todo.priority,
        );
        tempTodo.complete = todo.complete;
        tempTodo.id = todo.id;
        tempProject.getProjectTodos().push(tempTodo);
      });
      tempApp.getAllProjects().push(tempProject);
    });
    tempApp.setActiveProject(tempApp.findProject(app.activeProject.id));
    return tempApp;
  }
}
