import locale from "./locales/locales.js";

const userLang = navigator.language || "en-US"; // Get the browser lang, but if not found use "en-US"
const lang = locale[userLang] ? userLang : "en-US"; // If the browser lang is not in the locale object, use "en-US"



let listElement = document.getElementById("task-list");
let inputElement = document.getElementById("task-input");
let btnElement = document.querySelector("#app button");

const forms = document.getElementById('task-form');
forms.addEventListener("submit", (e) => {
  e.preventDefault(); // Don't reload
  addTask();
})

let tasks = [] // Array to hold tasks

function renderTask() {
  listElement.innerHTML = '';

  tasks.map((task) => {
    let liElement = document.createElement('li');
    let taskText = document.createTextNode(task);

    let deleteLink = document.createElement('a');
    deleteLink.setAttribute('href', '#');


    liElement.appendChild(taskText);
    liElement.appendChild(deleteLink);
    listElement.appendChild(liElement);
  })
}

function addTask() {
  if (inputElement.value === '') {
    alert(locale[lang].inputAlert);
    return false;
  } else {
    let newTask = inputElement.value;
    tasks.push(newTask);
    inputElement.value = '';
    renderTask();
  }
}