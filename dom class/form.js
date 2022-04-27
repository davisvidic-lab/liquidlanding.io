const form =document.querySelector("form");
const taskInput =document.getElementById("task");
const heading = document.querySelector("h3");

// taskInput.addEventListener('keypress', runEvent);
// taskInput.addEventListener('focus', runEvent);
// ta 
// clear input
taskInput.value = "";

// submit
// form.addEventListener("submit",runEvent);
// console.log(`EVENT TYPE:${e.type}`);

taskInput.addEventListener("keydown", runEvent);
function runEvent(e) {
    
    
    console.log(e.target.value);

    // heading.innerText = e.target.value;
}