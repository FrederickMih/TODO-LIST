import createProject from '../src/projects';
import { createToDo } from '../src/todos';

test('return a new project with given parameters', () => {
    const project = createProject("main project")
    expect(project.title).toEqual("main project");
});

test('return a new project with given parameters', () => {
    const project = createProject("main project")
    expect(project.title).toEqual("main project");
});

test('return a new project with given parameters', () => {
    const todo = createToDo('Build a base for launching rockets', 'Need to find the best place for a base', new Date(), false);
    const project = createProject("main project", "main project description", [])
    project.todoes.push(todo)
    expect(project.todoes.length).toBe(1);
});