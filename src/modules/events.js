import storage from './storage';
import display from './display';

const app = storage.checkData();

export default class events {
  static pageLoad() {
    this.renderSidebar();
    this.renderMain();
    this.addProjectListeners();
    this.addTodoListeners();
  }

  // Render events
  static renderSidebar() {
    app.getAllProjects().forEach((project) => {
      display.renderProject(project);
      this.singleProjectListeners();
    });
  }

  static renderMain() {
    display.clearActiveProjectDisplay();
    display.renderActiveProject(app.getActiveProject());
    app.getActiveProject().projectTodos.forEach((todo) => {
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
    this.deleteProject();
  }

  static editProjectListeners(id) {
    this.editProjectSubmitChecker(id);
    this.editProjectSubmit(id);
    this.editProjectCancel(id);
  }

  static switchActiveProjectListener() {
    const projectEntry = document.getElementById('addProject').previousElementSibling;
    projectEntry.addEventListener('click', () => {
      if (app.getActiveProject().id !== projectEntry.id) {
        this.switchActiveProject(projectEntry.id);
      }
    });
  }

  static switchActiveProject(id) {
    app.setActiveProject(app.findProject(id));
    this.renderMain();
    storage.storeData(app);
  }

  static addProjectMenu() {
    const addProject = document.getElementById('addProject');
    addProject.addEventListener('click', () => {
      display.addProjectMenu();
    });
  }

  static addProjectSubmitChecker() {
    const inputName = document.getElementById('formProjectName');
    const submit = document.getElementById('addProjectBtn');
    inputName.addEventListener('input', () => {
      submit.disabled = !inputName.value.length;
    });
  }

  static addProjectSubmit() {
    const submit = document.getElementById('addProjectBtn');
    submit.addEventListener('click', () => {
      app.addProject(display.addProjectSubmit());
      display.renderProject(app.getAllProjects()[app.getAllProjects().length - 1]);
      display.addProjectClear();
      this.singleProjectListeners();
      storage.storeData(app);
    });
  }

  static addProjectCancelBtn() {
    const addProjectCancel = document.getElementById('addProjectCancel');
    addProjectCancel.addEventListener('click', () => {
      display.addProjectClear();
    });
  }

  static editProjectDisplay() {
    const projectEntry = document.getElementById('addProject').previousElementSibling;
    const { id } = projectEntry;
    const project = app.findProject(id);
    const btn = projectEntry.querySelector('.projectEditBtn');
    btn.addEventListener('click', (event) => {
      display.editProjectDisplay(project);
      this.editProjectListeners(id);
      event.stopPropagation();
    });
  }

  static editProjectSubmitChecker(id) {
    const editProject = document.getElementById(id).nextElementSibling;
    const inputName = editProject.querySelector('.editProjectName');
    const submit = editProject.querySelector('.editProjectSubmit');
    inputName.addEventListener('input', () => {
      submit.disabled = !inputName.value.length;
    });
  }

  static editProjectSubmit(id) {
    const editProject = document.getElementById(id).nextElementSibling;
    const project = app.findProject(id);
    const btn = editProject.querySelector('.editProjectSubmit');
    btn.addEventListener('click', () => {
      display.editProjectSubmit(project);
      display.editProjectClear(id);
      display.updateProjectName(project);
      if (id === app.getActiveProject().id) {
        display.renderActiveProject(app.getActiveProject());
      }
      storage.storeData(app);
    });
  }

  static editProjectCancel(id) {
    const editProject = document.getElementById(id).nextElementSibling;
    const btn = editProject.querySelector('.editProjectCancel');
    btn.addEventListener('click', () => {
      display.editProjectClear(id);
    });
  }

  static deleteProject() {
    const projectEntry = document.getElementById('addProject').previousElementSibling;
    const { id } = projectEntry;
    const btn = projectEntry.querySelector('.projectDelBtn');
    btn.addEventListener('click', (event) => {
      if (app.getAllProjects().length === 1) {
        window.alert("You can't delete your last project!");
      } else {
        app.deleteProject(id);
        display.deleteItem(id);
      }
      if (app.getActiveProject().id === id) {
        app.setActiveProject(app.getAllProjects()[0]);
        this.switchActiveProject(app.getActiveProject().id);
      }
      storage.storeData(app);
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
    const addTodo = document.getElementById('addTodo');
    addTodo.addEventListener('click', () => {
      display.addTodoMenu();
    });
  }

  static addTodoSubmitChecker() {
    const inputName = document.getElementById('formTodoName');
    const submit = document.getElementById('addTodoBtn');
    inputName.addEventListener('input', () => {
      submit.disabled = !inputName.value.length;
    });
  }

  static addTodoSubmit() {
    const submit = document.getElementById('addTodoBtn');
    submit.addEventListener('click', () => {
      app.getActiveProject().addTodo(display.addTodoSubmit());
      display.addTodoClear();
      display.renderTodo(
        app.getActiveProject().getProjectTodos()[
          app.getActiveProject().getProjectTodos().length - 1
        ],
      );
      this.todoOptionsBtns();
      storage.storeData(app);
    });
  }

  static addTodoCancelBtn() {
    const addTodoCancel = document.getElementById('addTodoCancel');
    addTodoCancel.addEventListener('click', () => {
      display.addTodoClear();
    });
  }

  static todoOptionsBtns() {
    const todoEntry = document.getElementById('addTodo').previousElementSibling;
    this.toggleTodoStatus(todoEntry);
    this.viewTodo(todoEntry);
    this.editTodo(todoEntry);
    this.deleteTodo(todoEntry);
  }

  static toggleTodoStatus(todoEntry) {
    const btn = todoEntry.querySelector('.taskCheckbox');
    btn.addEventListener('click', () => {
      const { id } = btn.parentNode.parentNode;
      display.toggleTodoStatus(id);
      const task = app.getActiveProject().findTodo(id);
      task.complete = !task.complete;
      storage.storeData(app);
    });
  }

  static viewTodo(todoEntry) {
    const btn = todoEntry.querySelector('.taskViewBtn');
    btn.addEventListener('click', () => {
      const todo = app.getActiveProject().findTodo(btn.parentNode.parentNode.id);
      display.showTodoDetails(todo, app.getActiveProject());
      this.todoModalCloseListener();
    });
  }

  static todoModalCloseListener() {
    const closeBtn = document.querySelector('.modalCloseBtn');
    closeBtn.addEventListener('click', () => {
      display.closeTodoModal();
    });
  }

  static editTodo(todoEntry) {
    const btn = todoEntry.querySelector('.taskEditBtn');
    btn.addEventListener('click', () => {
      const todo = app.getActiveProject().findTodo(btn.parentNode.parentNode.id);
      display.editTodoMenu(todo);
      this.editTodoListeners(todo);
    });
  }

  static editTodoListeners(todo) {
    this.todoModalCloseListener();
    this.editTodoSubmit(todo);
    this.editTodoSubmitChecker();
    this.editTodoCancel();
  }

  static editTodoSubmit(todo) {
    const submit = document.getElementById('editTodoBtn');
    submit.addEventListener('click', () => {
      display.editTodoSubmit(todo);
      display.closeTodoModal();
      display.updateTodo(todo);
      storage.storeData(app);
    });
  }

  static editTodoSubmitChecker() {
    const inputName = document.getElementById('editTodoName');
    const submit = document.getElementById('editTodoBtn');
    inputName.addEventListener('input', () => {
      submit.disabled = !inputName.value.length;
    });
  }

  static editTodoCancel() {
    const closeBtn = document.getElementById('editTodoCancel');
    closeBtn.addEventListener('click', () => {
      display.closeTodoModal();
    });
  }

  static deleteTodo(todoEntry) {
    const btn = todoEntry.querySelector('.taskDelBtn');
    btn.addEventListener('click', () => {
      const { id } = btn.parentNode.parentNode;
      app.getActiveProject().deleteTodo(id);
      display.deleteItem(id);
      storage.storeData(app);
    });
  }
}
