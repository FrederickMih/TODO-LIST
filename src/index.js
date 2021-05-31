import createToDo from './todos'
import createProject from './projects'

const toDoList = []
const toDoList2 = []
const projects = []

const firstProject = createProject("First Project", "Firts Project Description", toDoList)
const secondProject = createProject("Second Project", "Second Project Description", toDoList2)
projects.push(firstProject)
projects.push(secondProject)
console.log(projects)

const firstTask = createToDo("New Task", "New Task Description", new Date(), true)
const secondTask = createToDo("New Task 2", "New Task Description 2", new Date(), true)
const thirdTask = createToDo("New Task 3", "New Task Description 3", new Date(), true)
toDoList.push(firstTask)
toDoList2.push(secondTask)
toDoList2.push(thirdTask)
firstTask.description = "Updated description"

const projectsDraw = (projects) => {
    for (let i = 0; i < projects.length; i++) {
        const link = document.createElement('a')
        link.setAttribute('class', "nav-link")
        link.innerText = projects[i].title
        document.querySelector('.nav').appendChild(link)
        link.onclick = () => {
            taskDraw(projects[i].todoes)
        }
    }
}

const taskDraw = (tasks) => {
    const main = document.querySelector('main')
    main.innerHTML = ""
    for (let i = 0; i < tasks.length; i++) {
        const card = document.createElement('div')
        const cardBody = document.createElement('div')
        const cardTitle = document.createElement('h3')
        const cardSub = document.createElement('h6')
        const cardText = document.createElement('p')
        const editLink = document.createElement('a')
        const removeLink = document.createElement('a')

        cardTitle.innerHTML = tasks[i].title
        cardSub.innerHTML = tasks[i].dueDate
        cardText.innerHTML = tasks[i].description
        editLink.innerHTML = 'Edit'
        removeLink.innerHTML = 'Remove'

        card.setAttribute('class', 'card')
        cardBody.setAttribute('class', 'card-body')
        cardTitle.setAttribute('class', 'card-title')
        cardSub.setAttribute('class', 'card-subtitle mb-2 text-muted')
        cardText.setAttribute('class', 'card-link')
        editLink.setAttribute('class', 'card-text')
        removeLink.setAttribute('class', 'card-text')

        main.appendChild(card)
        card.appendChild(cardBody)
        card.appendChild(cardTitle)
        card.appendChild(cardSub)
        card.appendChild(cardText)
        card.appendChild(editLink)
        card.appendChild(removeLink)

    }
}

const start = (projects) => {
    projectsDraw(projects)
}

start(projects)

