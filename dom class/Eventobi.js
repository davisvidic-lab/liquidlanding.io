//  the html dom allows the java script to react to the html event
//  A java script can be ecexuted when the event occurs e.g when a user click on an eleemnt, that particular event stated will be triggered

// Example of html events
// 1. on-click, when a user click on an element
// 2. when a page is loaded
// 3. when an image as been loaded
// 4. Mouse-over, nwhen the mouse moves over an element
// 5. when an input field is changed
// 6. When an html form is submitted. i.e succesfull,installing,downloading
// 7. When a user stroke a key

// EVENTS
// document.querySelector('.clear-task').addEventListener('click', function(e){
//     console.log('hello world')

//     e.preventDefault();
// })

// document.querySelector('.clear-task').addEventListener('click', onclick)

// function onclick(e){
//     console.log('clicked')

//     let val;
//     val = e;
//     val=e.target;
//     val=e.target.id;
//     val=e.target.className;
//     val=e.target.classList;


//     // event type
//     val = e.type;

//     // Timestamp
//     val = e.timeStamp;

//     // cordinate event relative to the window
//     // val = e.clientY;
//     // val = e.clientX;
    
//     // cordinate event relative to the element
//     val = e.offsetY;
//     val = e.offsetX;



//     console.log(val);

//     e.preventDefault();
// }

// let cleartask = document.querySelector(.clear-task);
// let card = document.querySelector(.card);
// let link = document.querySelector(h4)

// MONDAY 13-12-2021
const clearBtn = document.querySelector('.clear-task');
const card = document.querySelector('.card');
const heading = document.querySelector('h3');

// Click
// clearBtn.addEventListener("click", runEvent);

// mouse down
// clearBtn.addEventListener("mousedown", runEvent);

// mouse up
// clearBtn.addEventListener("mouseup", runEvent);

// mouse enter
clearBtn.addEventListener("mouseenter", runEvent);

// mouse leave
// card.addEventListener("mouseleave", runEvent);

// mouse out
// card.addEventListener("mouseout", runEvent);

// mouse over
// clearBtn.addEventListener("mouseover", runEvent);

// mouse move
// card.addEventListener("mousemove", runEvent);




// event handler
function runEvent(e){
    console.log(`Event Type: ${e.type}`);


    heading.textContent = `MouseX ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY},40)`;
};