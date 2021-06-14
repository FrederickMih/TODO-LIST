import { createToDo, removeTodo, editTodo } from '../src/todos';

test('checking createTodo Method', () => {
  const todo = createToDo(
    'Build a base for launching rockets',
    'Need to find the best place for a base',
    new Date(),
    false,
  );
  expect(todo.title).toEqual('Build a base for launching rockets');
  expect(todo.description).toEqual('Need to find the best place for a base');
  expect(todo.dueDate).toBeInstanceOf(Date);
  expect(todo.priority).toEqual(false);
});

test('try to create a to do with wrong params', () => {
  expect(() => {
    createToDo(1, 'Need to find the best place for a base',
      new Date(),
      false);
  }).toThrow(TypeError);
  expect(() => {
    createToDo('good title', 3,
      new Date(),
      false);
  }).toThrow(TypeError);
  expect(() => {
    createToDo('good title', 'good description',
      new Date(),
      'bad boolean');
  }).toThrow(TypeError);
  expect(() => {
    createToDo('good title', 'good description',
      'bad date',
      false);
  }).toThrow(TypeError);
});

test('checking removeTodo Method', () => {
  const toDoList = [];
  toDoList.push(createToDo('Search for a teritory', 'Search for the best teritory in the city', new Date(), true));
  toDoList.push(createToDo('Build a base for launching rockets', 'Need to find the best place for a base', new Date(), false));
  toDoList.push(createToDo('Build a rocket', 'Build a rocket using last technologies', new Date(), true));
  removeTodo(toDoList, 2);
  expect(toDoList.length).toBe(2);
});

test('checking editTodo Method', () => {
  const todo = createToDo('Search for a teritory', 'Search for the best teritory in the city', new Date(2021, 3, 15), true);
  editTodo(todo, 'new title', 'new description', new Date(), false);
  expect(todo.title).toEqual('new title');
  expect(todo.description).toEqual('new description');
  expect(todo.dueDate).not.toEqual(new Date(2021, 3, 15));
  expect(todo.priority).toBeFalsy();
});
