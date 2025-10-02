import locale from "./locales/locales.js";

const userLang = navigator.language || "en-US"; // Get the browser lang, but if not found use "en-US"
const lang = locale[userLang] ? userLang : "en-US"; // If the browser lang is not in the locale object, use "en-US"



let listElement = document.getElementById("task-list");
let inputElement = document.getElementById("task-input");
let btnElement = document.querySelector("#app button");

let tasks = [] // Array to hold tasks

function addTask() {
  if (inputElement.value === '') {
    alert(locale[lang].inputAlert);
    return false;
  } else {
    let newTask = inputElement.value;
    tasks.push(newTask);
    inputElement.value = '';
  }
}

// btnElement.onclick = addTask; // it works but has the most modern and scalable mode for multiple listeners without overwriting
btnElement.addEventListener("click", addTask);