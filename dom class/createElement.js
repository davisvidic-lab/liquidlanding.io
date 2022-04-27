// create element

// val = document.createElement('li')
 const li =document.createElement('li');
// add class
li.className = 'list-group-item';

// add id
li.id = 'text';

// add attribute
li.setAttribute('title', 'JS');

// append child node
li.appendChild(document.createTextNode('Hello world'));



// create new element
const link =document.createElement('a');

// add class
link.className = 'delete-item float-right';

// add icons
link.innerHTML ='<i class="fas fa-trash-alt"></i>';

// append link to li
li.appendChild(link);


// append li as a child to ul
document.querySelector('ul.list-group').appendChild(li);

console.log(li);