class Todo {
    
    constructor(title, description, dueDate, priority) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }

}

const createToDo = (title, description, dueDate, priority) => {
    const task = new Todo(title, description, dueDate, priority)
    return task
}

export default createToDo; 
