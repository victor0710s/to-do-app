import locale from "../frontend/locales/locales.js";

let listElement = document.getElementById("task-list");
let inputElement = document.getElementById("task-input");
let tasks = JSON.parse(localStorage.getItem("@getTasks")) || []; // Searches tasks in local storage, if not found creates an empty array

//* Locale Section

const userLang = navigator.language || "en-US"; // Get the browser lang, but if not found use "en-US"
const lang = locale[userLang] ? userLang : "en-US"; // If the browser lang is not in the locale object, use "en-US"

let h1Title = document.querySelector('h1')
h1Title.innerHTML = locale[lang].title

let btnLocale = document.querySelector('button')
btnLocale.innerHTML = locale[lang].btnAddTask

inputElement.setAttribute('placeholder', locale[lang].inputPlaceholder)
document.title = locale[lang].pageTitle

//*-------------------------------------------------------

const forms = document.getElementById('task-form');
forms.addEventListener("submit", (e) => {
  e.preventDefault(); // Don't reload
  addTask();
})

function renderTask() {
  listElement.innerHTML = '';

  tasks.map((task) => {
    let liElement = document.createElement('li');
    let taskText = document.createElement('span');
    taskText.textContent = task;

    let deleteLink = document.createElement('a');
    deleteLink.setAttribute('href', '#');

    let deleteIcon = document.createElement('i')
    deleteIcon.setAttribute('class', 'fa-solid fa-trash')
    deleteLink.appendChild(deleteIcon)

    let pos = tasks.indexOf(task);

    deleteLink.setAttribute("onclick", `deleteTask(${pos})`);

    liElement.appendChild(taskText);
    liElement.appendChild(deleteLink);
    listElement.appendChild(liElement);
  })
}

renderTask(); // Loads the task list or empty array as soon as the user starts the application

function addTask() {
  if (inputElement.value === '') {
    alert(locale[lang].inputAlert);
    return false;
  } else {
    let newTask = inputElement.value;
    tasks.push(newTask);
    inputElement.value = '';
    renderTask();
    storageTasks();
  }
}

window.deleteTask = deleteTask; // It is not recommended, because it “pollutes” the global scope and can cause problems in larger apps.

function deleteTask(pos) {
  tasks.splice(pos, 1);
  renderTask();
  storageTasks();
  alert(locale[lang].deleteAlert);
}

function storageTasks() {
  localStorage.setItem("@getTasks", JSON.stringify(tasks));
}