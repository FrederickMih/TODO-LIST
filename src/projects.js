class Project {
  constructor(title, description, todoes) {
    this.title = title;
    this.description = description;
    this.date = new Date();
    this.todoes = todoes;
  }
}

const createProject = (title, description, todoes) => {
  if (typeof title != "string")
    throw new TypeError("Title should be a string")
  else if (typeof description != "string")
    throw new TypeError("description should be a string")
  else if (!Array.isArray(todoes))
    throw new TypeError("todoes should be an array")

  return new Project(title, description, todoes);

}

export default createProject;