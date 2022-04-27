// the html dom allows d javascript to react with html event. javascript code can be executed when the user click on an element.
// Example of html event
// 1.when a user click a mouse   2.When a page has been loaded 3.when an image has been loaded. 4.When d mouse moves over an element(mouse-over) 5.When an input field is change.   5. When ah html form is submitted successfully.  6. When a user stroke a key

// document.querySelector('.clear-task').addEventListener('click', function(e){
//     console.log('Hello-world');

//     e.preventDefault();
// });

// OR USE THIS METHOD

document.querySelector('.clear-task').addEventListener('click', onclick);

// function onclick(e){
// console.log('clickeddddddddd');

// let val;
// val=e;
// val=e.target;
// val=e.target.id;
// val=e.target.className;
// val=e.target.classList;

// // event type
// val=e.type

// // Timestamp
// val = e.timeStamp

// cordinate event relative to the window
// val=e.clientY;
// val=e.clientX;

// cordinate event relative to the element i.eoffsetX and offsetY
// val=e.offsetX;
// val=e.offsetY;

let cleartask =document.querySelector(.clear-tasks);
let card = document.querySelector(.cleartask);
let link = document.querySelector(h4);

console.log(val);

e.preventDefault();
}