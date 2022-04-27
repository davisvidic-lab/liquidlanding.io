// console.log(document.getElementsByClassName('list-group-item'));

// const items =document.getElementsByClassName('list-group-item');
// console.log(items[1]);

// // styling
// items[0].style.background = 'black';
// items[3].textContent = 'Hello David';

// // Ataching
// const listItems =document.querySelector('ul').getElementsByClassName('list-group-item');
// console.log(listItems);

// GetElementByTagname
// let lis = document.getElementsByTagName('li');
// console.log(lis[0]);
// lis[0].style.background = 'black';
// lis[3].textContent = 'Hello David';
// console.log(lis);

// an html collection is not an array i.e array doesnt work on it.example
// lis.reverse();

// console.log(lis); we get reverse is not a function

// therefore lets convert it to an array

// lis = Array.from(lis);

// lis.reverse();

// console.log(lis);

// looping thru d array
// lis = Array.from(lis);

// lis.forEach(function(li){
//     console.log(li.className);
//     li.textContent = 'Hello David';
// })
// console.log(lis);
// here it changes eveything in d browser to hello david


// template literals(allow embeded expression).......it changes d arrangement backward..........what is bactic
// lis.forEach(function(li,index){
//     console.log(li.className);
//     li.textContent = `${index}:Hello David`;
// })
// console.log(lis);

// Query selector All:it can accept anything, we dont need to convert to an array
// const items = document.querySelectorAll('ul.list-group-item li.list-group-items');

// console.log(items); 
// the above brings a node list on our console


// 
const items = document.querySelectorAll('ul.list-group li.lis-group-item');

items.forEach(function(item, index){
    item.textContent = `${index}:Hello David`;
})

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li){
    li.style.background = 'black';
    li.style.color = 'white';
})
liEven.forEach(function(lis){
    lis.style.background ='red';
    li.style.color = 'white';
})


