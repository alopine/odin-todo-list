import Project from './project';

export default class App {
  constructor() {
    this.allProjects = [new Project('Inbox')];
    this.activeProject = this.getAllProjects()[0];
  }

  getAllProjects() {
    return this.allProjects;
  }

  setAllProjects(arg) {
    if (arg) {
      this.allProjects = arg;
    }
  }

  getActiveProject() {
    return this.activeProject;
  }

  setActiveProject(arg) {
    if (arg) {
      this.activeProject = arg;
    }
  }

  addProject(newProject) {
    if (!this.allProjects.find((project) => project.id === newProject.id)) {
      this.allProjects.push(newProject);
    }
  }

  deleteProject(id) {
    this.allProjects = this.allProjects.filter((project) => project.id !== id);
  }

  findProject(id) {
    return this.allProjects.find((project) => project.id === id);
  }
}
