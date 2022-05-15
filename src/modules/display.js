import Project from './project';
import Todo from './todo';

export default class display {
  // General Functions
  static deleteItem(id) {
    document.getElementById(id).remove();
  }

  // Project Functions
  static renderProject(project) {
    const projectsList = document.getElementById('projectsList');
    const addProject = document.getElementById('addProject');
    const newNode = document.createElement('li');
    newNode.classList.add('projectsEntry', 'flex');
    newNode.id = project.getID();
    newNode.innerHTML = `
        <span>${project.getTitle()}</span>
        <div class="projectBtnsWrapper">
            <button class="projectEditBtn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#808080" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
            </button>
            <button class="projectDelBtn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#808080" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
            </button>
        </div>`;
    projectsList.insertBefore(newNode, addProject);
  }

  static renderActiveProject(project) {
    const prevActive = document.querySelector('.activeProject');
    if (prevActive) {
      prevActive.classList.remove('activeProject');
    }
    document.getElementById(project.getID()).classList.add('activeProject');
    const projectTitle = document.querySelector('.projectTitle');
    projectTitle.innerText = project.getTitle();
  }

  static updateProjectName(project) {
    const projectEntry = document.getElementById(project.getID());
    const title = projectEntry.querySelector('span');
    title.innerText = project.getTitle();
  }

  static addProjectMenu() {
    const addProjectBar = document.getElementById('addProject');
    const addProjectMenu = document.querySelector('.addProjectMenuWrapper');
    addProjectBar.classList.add('hidden');
    addProjectMenu.classList.remove('hidden');
  }

  static addProjectSubmit() {
    const projectName = document.getElementById('formProjectName').value;
    return new Project(projectName);
  }

  static addProjectClear() {
    const addProjectBar = document.getElementById('addProject');
    const addProjectMenu = document.querySelector('.addProjectMenuWrapper');
    const addProjectForm = document.getElementById('addProjectForm');
    addProjectBar.classList.remove('hidden');
    addProjectMenu.classList.add('hidden');
    addProjectForm.reset();
    const submit = document.getElementById('addProjectBtn');
    submit.disabled = true;
  }

  static editProjectDisplay(project) {
    const projectEntry = document.getElementById(project.getID());
    projectEntry.classList.add('hidden');
    const editField = document.createElement('li');
    editField.classList.add('editProject');
    editField.innerHTML = `
            <div class="editProjectWrapper flex">
                <input type="text" name="editProjectName" class="editProjectName" placeholder="Project name" value="${project.getTitle()}" autocomplete="off">
                <button class="editProjectSubmit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="#299438" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </button>
                <button class="editProjectCancel">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="#DE4C4A" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                </button>
            </div>`;
    projectEntry.after(editField);
  }

  static editProjectSubmit(project) {
    const editProject = document.getElementById(project.getID()).nextElementSibling;
    const inputName = editProject.querySelector('.editProjectName');
    project.setTitle(inputName.value);
  }

  static editProjectClear(id) {
    const projectEntry = document.getElementById(id);
    projectEntry.classList.remove('hidden');
    projectEntry.nextElementSibling.remove();
  }

  static clearActiveProjectDisplay() {
    const projectTitle = document.querySelector('.projectTitle');
    projectTitle.innerText = '';
    const todos = document.querySelectorAll('.projectTodo');
    todos.forEach((todo) => {
      todo.remove();
    });
  }

  // Todo Functions
  static renderTodo(todo) {
    const todosList = document.querySelector('.todosList');
    const addTodo = document.getElementById('addTodo');
    const newNode = document.createElement('li');
    newNode.classList.add('projectTodo', 'flex');
    newNode.id = todo.getID();
    if (todo.getComplete()) {
      newNode.classList.add('complete');
    }
    if (todo.getPriority() !== 'None') {
      newNode.classList.add(todo.getPriority().toLowerCase());
    }
    newNode.innerHTML = `
        <div class="todoLeft flex">
            <button class="taskCheckbox"> </button>
            <span>${todo.getTitle()}</span>
        </div>
        <div class="todoRight flex">
            <span class="taskDueDate">${todo.getDueDate()}</span>
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
    todosList.insertBefore(newNode, addTodo);
  }

  static addTodoMenu() {
    const addTodoBar = document.getElementById('addTodo');
    const addTodoMenu = document.querySelector('.addTodoMenuWrapper');
    addTodoBar.classList.add('hidden');
    addTodoMenu.classList.remove('hidden');
  }

  static addTodoSubmit() {
    const todoName = document.getElementById('formTodoName').value;
    const todoDesc = document.getElementById('formTodoDesc').value;
    const todoDueDate = document.getElementById('formTodoDueDate').value;
    const todoPriority = document.getElementById('formTodoPriority').value;
    return new Todo(todoName, todoDesc, todoDueDate, todoPriority);
  }

  static addTodoClear() {
    const addTodoBar = document.getElementById('addTodo');
    const addTodoMenu = document.querySelector('.addTodoMenuWrapper');
    const addTodoForm = document.getElementById('addTodoForm');
    addTodoBar.classList.remove('hidden');
    addTodoMenu.classList.add('hidden');
    addTodoForm.reset();
    const submit = document.getElementById('addTodoBtn');
    submit.disabled = true;
  }

  static showTodoDetails(todo, activeProject) {
    const modal = document.createElement('div');
    modal.classList.add('modal', 'flex');
    modal.innerHTML = `
        <div class="modalContent flex flexColumn">
            <div class="modalHeader flex">
                <div class="modalTitle">${activeProject.title}</div>
                <button class="modalCloseBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#808080" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>
            <div class="modalTodoTitle">
                ${todo.getTitle()}
            </div>
            <div class="modalTodoDescription">
                ${todo.getDescription()}
            </div>
            <div class="modalTodoInfo flex">
                <div>${todo.getDueDate()}</div>
                <div>${todo.getPriority()}</div>
                <div>${todo.getComplete() ? 'Completed' : 'Not Completed'}</div>
            </div>
        </div>`;
    document.body.prepend(modal);
  }

  static closeTodoModal() {
    const modal = document.querySelector('.modal');
    modal.remove();
  }

  static editTodoMenu(todo) {
    const modal = document.createElement('div');
    modal.classList.add('modal', 'flex');
    modal.innerHTML = `
        <div class="modalContent flex flexColumn">
            <div class="modalHeader flex">
                <div class="modalTitle">Edit task</div>
                <button class="modalCloseBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#808080" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>
            <form onsubmit="return false;" class="addForm" id="editTodoForm">
                <input type="text" name="todoName" id="editTodoName" placeholder="Task name" value="${todo.getTitle()}" autocomplete="off">
                <textarea name="todoDesc" id="editTodoDesc" placeholder="Description">${todo.getDescription()}</textarea>
                <input type="date" name="todoDueDate" id="editTodoDueDate" value="${todo.getDueDate()}">
                <select name="todoPriority" id="editTodoPriority">
                    ${todo.getPriority() === 'None' ? '<option value="None" selected>None</option>' : '<option value="None">None</option>'}
                    ${todo.getPriority() === 'Low' ? '<option value="Low" selected>Low</option>' : '<option value="Low">Low</option>'}
                    ${todo.getPriority() === 'Medium' ? '<option value="Medium" selected>Medium</option>' : '<option value="Medium">Medium</option>'}
                    ${todo.getPriority() === 'High' ? '<option value="High" selected>High</option>' : '<option value="High">High</option>'}
                </select>
            </form>
            <div class="addFormBtns flex">
                <button class="addFormMainBtn" id="editTodoBtn">Save</button>
                <button class="addFormCancelBtn" id="editTodoCancel">Cancel</button>
            </div>
        </div>`;
    document.body.prepend(modal);
  }

  static editTodoSubmit(todo) {
    todo.setTitle(document.getElementById('editTodoName').value);
    todo.setDescription(document.getElementById('editTodoDesc').value);
    todo.setDueDate(document.getElementById('editTodoDueDate').value);
    todo.setPriority(document.getElementById('editTodoPriority').value);
  }

  static updateTodo(todo) {
    const todoEntry = document.getElementById(todo.getID());
    // Re-render todo priority
    const priorities = ['low', 'medium', 'high'];
    priorities.forEach((priority) => {
      if (todoEntry.classList.contains(priority)) {
        todoEntry.classList.remove(priority);
      }
    });
    if (todo.getPriority() !== 'None') {
      todoEntry.classList.add(todo.getPriority().toLowerCase());
    }
    // Re-render todo title
    const todoName = todoEntry.querySelector('.todoLeft').querySelector('span');
    todoName.innerText = todo.getTitle();
    // Re-render todo due date
    const todoDueDate = todoEntry.querySelector('.taskDueDate');
    todoDueDate.innerText = todo.getDueDate();
  }

  static toggleTodoStatus(id) {
    const todoItem = document.getElementById(id);
    if (todoItem.classList.contains('complete')) {
      todoItem.classList.remove('complete');
    } else {
      todoItem.classList.add('complete');
    }
  }
}
