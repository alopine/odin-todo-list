import Project from "./project";

export default class App {
    constructor() {
        this._allProjects = [new Project("Inbox")];
        this._activeProjectID = this.allProjects[0].id;
    }

    get allProjects() {
        return this._allProjects;
    }

    set allProjects(arg) {
        if (arg) {
            this._allProjects = arg;
        }
    }

    get activeProjectID() {
        return this._activeProjectID;
    }

    set activeProjectID(arg) {
        if (arg) {
            this._activeProjectID = arg;
        }
    }

    addProject(newProject) {
        if (this.allProjects.find((project) => project.id === newProject.id)) {
            return;
        } else {
            this.allProjects.push(newProject);
        }
    }

    deleteProject(delProject) {
        this.allProjects = this.allProjects.filter((project) => project.id !== delProject.id);
    }
}