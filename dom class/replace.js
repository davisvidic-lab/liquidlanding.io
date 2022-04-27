// Replace Element

// create an element
let newHeading = document.createElement('h3');

newHeading.id = 'task-name';

newHeading.appendChild(document.createTextNode('Fill in the task'));

// get old heading
let oldHeading = document.getElementById('task-name');

// replace with parent element
let cardBody = document.querySelector('#task-title');

// replace element
cardBody.replaceChild(newHeading,oldHeading);
console.log(newHeading);

// remove element
const li= document.querySelectorAll('li');
const lis= document.querySelectorAll('ul');


const task= document.getElementById('task-name');

// remove list items
// lis[0].remove();
// task.remove();
// li[2].remove();
