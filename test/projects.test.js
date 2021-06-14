import createProject from '../src/projects';
import { createToDo } from '../src/todos';

test('checking project title parameter', () => {
  const project = createProject('main project', 'main project description', []);
  expect(project.title).toEqual('main project');
});

test('checking project title parameter', () => {
  const project = createProject('main project', 'main project description', []);
  expect(project.description).toEqual('main project description');
});

test('return a new project with given parameters', () => {
  const todo = createToDo('Build a base for launching rockets', 'Need to find the best place for a base', new Date(), false);
  const project = createProject('main project', 'main project description', []);
  project.todoes.push(todo);
  expect(project.todoes.length).toBe(1);
});

test('try to create a project with wrong params', () => {
  expect(() => { createProject('main project', 222, []); }).toThrow(TypeError);
  expect(() => { createProject(new Date(), 'good description', []); }).toThrow(TypeError);
  expect(() => { createProject('good title', 'good description', 'wrong array'); }).toThrow(TypeError);
});