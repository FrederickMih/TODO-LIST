import createProject from '../src/projects';
import { createToDo, removeToDo, editToDo } from '../src/todos';

test('return a new project with given parameters', () => {
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
