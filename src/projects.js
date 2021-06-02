class Project {
  constructor(title, description, todoes) {
    this.title = title;
    this.description = description;
    this.date = new Date();
    this.todoes = todoes;
  }
}

const createProject = (title, description, todoes) => new Project(title, description, todoes);

export default createProject;