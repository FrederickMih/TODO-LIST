import createToDo from './todos'
import createProject from './projects'

const toDoList = []
const projects = []

const firstProject = createProject("First Project", "Firts Project Description", toDoList)
const secondProject = createProject("Second Project", "Second Project Description", toDoList)
projects.push(firstProject)
projects.push(secondProject)
console.log(projects)

const firstTask = createToDo("New Task", "New Task Description", new Date(), true)
const secondTask = createToDo("New Task 2", "New Task Description 2", new Date(), true)
const thirdTask = createToDo("New Task 3", "New Task Description 3", new Date(), true)
toDoList.push(firstTask)
toDoList.push(secondTask)
toDoList.push(thirdTask)
firstTask.description = "Updated description"

const projectsDraw = (projects) => {
    for (let i = 0; i < projects.length; i++) {
        const link = document.createElement('a')
        link.setAttribute('class', "nav-link")
        link.innerText = projects[i].title
        document.querySelector('.nav').appendChild(link)
        // link.onclick = () => {

        // }
    }
}

const start = (projects) => {
    projectsDraw(projects)
}

start(projects)

