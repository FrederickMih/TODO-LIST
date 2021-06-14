class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

const createToDo = (title, description, dueDate, priority) => {
  if (typeof title !== 'string') throw new TypeError('title should be a string');
  else if (typeof description !== 'string') throw new TypeError('description should be a string');
  else if (!(dueDate instanceof Date)) throw new TypeError('dueDate should be a Date object');
  else if (typeof priority !== 'boolean') throw new TypeError('priority should be a boolean');
  return new Todo(title, description, dueDate, priority);
};

const removeTodo = (array, taskId) => {
  array.splice(taskId, 1);
};

const editTodo = (task, title, description, dueDate, priority) => {
  task.title = title;
  task.description = description;
  task.dueDate = dueDate;
  task.priority = priority;
};

export {
  createToDo,
  removeTodo,
  editTodo,
};
