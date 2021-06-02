import { format } from 'date-fns';
import { createToDo, removeTodo, editTodo } from './todos';
import createProject from './projects';

const toDoList = [];
const toDoList2 = [];
let projects = [];

const firstProject = createProject('Build a house', 'There is a project for building a house', toDoList);
const secondProject = createProject('Fly to cosmos', 'NASA Project for cosmos discovery purposes', toDoList2);
projects.push(firstProject);
projects.push(secondProject);

const firstTask = createToDo('Search for a teritory', 'Search for the best teritory in the city', format(new Date(), 'yyyy-MM-dd'), true);
const secondTask = createToDo('Build a base for launching rockets', 'Need to find the best place for a base', format(new Date(), 'yyyy-MM-dd'), false);
const thirdTask = createToDo('Build a rocket', 'Build a rocket using last technologies', format(new Date(), 'yyyy-MM-dd'), true);

toDoList.push(firstTask);
toDoList2.push(secondTask);
toDoList2.push(thirdTask);

const addTaskBtn = document.getElementById('add-task-btn');
const saveBtn = document.getElementById('save-btn');
const editBtn = document.getElementById('edit-btn');
const main = document.querySelector('main');
main.style.display = 'none';

const taskDraw = (tasks) => {
  const content = document.querySelector('.content-div');
  content.innerHTML = '';
  addTaskBtn.style.display = 'block';
  addTaskBtn.onclick = () => {
    saveBtn.style.display = 'block';
    editBtn.style.display = 'none';
    document.getElementById('add-form').reset();
  };
  main.appendChild(addTaskBtn);
  main.appendChild(content);
  tasks.forEach((todo) => {
    const card = document.createElement('div');
    const cardBody = document.createElement('div');
    const cardTitle = document.createElement('h3');
    const cardSub = document.createElement('h6');
    const cardText = document.createElement('p');
    const priorityText = document.createElement('p');
    const editLink = document.createElement('button');
    const removeLink = document.createElement('a');
    let priority = 'Priority: LOW';
    priorityText.style.color = 'green';
    if (todo.priority) {
      priority = 'Priority: HIGH';
      priorityText.style.color = 'red';
    }

    cardTitle.innerHTML = todo.title;
    cardSub.innerHTML = `Finish before: ${todo.dueDate}`;
    cardText.innerHTML = `Description: ${todo.description}`;
    priorityText.innerHTML = priority;
    editLink.innerHTML = 'Edit';
    removeLink.innerHTML = 'Remove';

    card.setAttribute('class', 'card');
    cardBody.setAttribute('class', 'card-body');
    cardTitle.setAttribute('class', 'card-title');
    cardSub.setAttribute('class', 'card-subtitle mb-2 text-muted');
    cardText.setAttribute('class', 'card-text');
    editLink.setAttribute('class', 'card-link edit-card-link btn btn-secondary');
    removeLink.setAttribute('class', 'card-link btn btn-danger');

    content.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardSub);
    cardBody.appendChild(cardText);
    cardBody.appendChild(priorityText);
    cardBody.appendChild(editLink);
    cardBody.appendChild(removeLink);

    removeLink.onclick = () => {
      const id = tasks.indexOf(todo);
      removeTodo(tasks, id);
      document.getElementsByClassName('card')[id].remove();
      localStorage.setItem('projects', JSON.stringify(projects));
    };

    editLink.setAttribute('data-bs-toggle', 'modal');
    editLink.setAttribute('data-bs-target', '#exampleModal');
    editLink.setAttribute('type', 'button');

    editLink.onclick = () => {
      saveBtn.style.display = 'none';
      editBtn.style.display = 'block';
      document.getElementById('title').value = todo.title;
      document.getElementById('description').value = todo.description;
      document.getElementById('dueDate').value = todo.dueDate;
      document.getElementById('priority').checked = todo.priority;
      editBtn.onclick = () => {
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueTime = document.getElementById('dueDate');
        const priority = document.getElementById('priority').checked;
        priorityText.style.color = 'green';
        let prio = 'Priority: LOW';
        if (priority) {
          prio = 'Priority: HIGH';
          priorityText.style.color = 'red';
        }
        const editCardLinks = document.getElementsByClassName('edit-card-link');
        const id = Array.prototype.indexOf.call(editCardLinks, editLink);
        const todoForUpdate = tasks[id];
        editTodo(todoForUpdate, title, description, dueTime.value, priority);
        cardTitle.innerHTML = title;
        cardSub.innerHTML = dueTime.value;
        cardText.innerHTML = description;
        priorityText.innerHTML = prio;
        localStorage.setItem('projects', JSON.stringify(projects));
      };
    };
  });
};

const projectsDraw = (projects) => {
  addTaskBtn.style.display = 'none';

  const projectsContainer = document.getElementById('projectsContainer');
  projectsContainer.innerHTML = '';

  projects.forEach((project) => {
    const descrParagraph = document.createElement('p');
    descrParagraph.innerHTML = project.description;
    descrParagraph.setAttribute('class', 'descr-parag');

    const link = document.createElement('a');
    link.setAttribute('class', 'nav-link');
    projectsContainer.appendChild(link);
    projectsContainer.appendChild(descrParagraph);
    link.innerText = project.title;
    link.onclick = () => {
      main.style.display = 'block';
      taskDraw(project.todoes);
      saveBtn.onclick = () => {
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueTime = document.getElementById('dueDate').value;
        const priority = document.getElementById('priority');
        const links = document.getElementsByClassName('nav-link');
        const id = Array.prototype.indexOf.call(links, link);
        projects[id].todoes.push(createToDo(title, description, format(new Date(dueTime), 'yyyy-MM-dd'), priority.checked));
        taskDraw(project.todoes);
        document.getElementById('add-form').reset();
        localStorage.setItem('projects', JSON.stringify(projects));
      };
    };
  });
};

const showProjectBtn = document.getElementById('newProBtn');
const addProjectBtn = document.getElementById('button-addon1');
const findDiv = document.getElementById('project-div');
findDiv.style.display = 'none';
showProjectBtn.onclick = () => {
  if (findDiv.style.display === 'none') {
    findDiv.style.display = 'block';
  } else {
    findDiv.style.display = 'none';
  }
};

addProjectBtn.onclick = () => {
  const projectTitle = document.getElementById('projectTitle').value;
  const projectDesc = document.getElementById('projectDesc').value;
  projects.push(createProject(projectTitle, projectDesc, []));
  localStorage.setItem('projects', JSON.stringify(projects));
  projectsDraw(projects);
};

const start = (projects) => {
  projectsDraw(projects);
};

if (typeof localStorage.getItem('projects') !== 'undefined' && localStorage.getItem('projects') != null) {
  projects = JSON.parse(localStorage.getItem('projects'));
}

start(projects);
