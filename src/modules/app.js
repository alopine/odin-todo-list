import Project from "./project";

export default class App {
    constructor() {
        this._allProjects = [new Project("Inbox")];
        this._activeProject = this.allProjects[0];
    }

    get allProjects() {
        return this._allProjects;
    }

    set allProjects(arg) {
        if (arg) {
            this._allProjects = arg;
        }
    }

    get activeProject() {
        return this._activeProject;
    }

    set activeProject(arg) {
        if (arg) {
            this._activeProject = arg;
        }
    }

    addProject(newProject) {
        if (this.allProjects.find((project) => project.id === newProject.id)) {
            return;
        } else {
            this.allProjects.push(newProject);
        }
    }

    deleteProject(id) {
        this.allProjects = this.allProjects.filter((project) => project.id !== id);
    }

    findProject(id) {
        if (id) {
            return this.allProjects.find((project) => project.id === id);
        }
    }
}