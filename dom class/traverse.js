// A node in a dom is all d part in d document such as elent attribute and text that are organized in a heirachy structure.It consist of the parent and the children
let val;
const list = document.querySelector('ul.list-group');
const listItems = document.querySelector('li.list-group-item');

val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[3].nodeType;
// val = list.children;
// val = list.children[1];
// val = list.children[3].children[0].id = 'tes-link';

// // first child
// val = list.firstChild;
// val = list.firstElementChild;

// // last child
// val = list.lastChild;
// val = list.lastElementChild;
// val = list.childElementCount;

// // get parent
// val = listItems.parentNode;
// val = listItems.parentElement.parentElement;
// // get next siblings
// val= listItems.nextSibling;
// val=listItems.nextElementSibling.previousElementSibling.nextElementSibling;

// // get previous siblings
// val= listItems.previousSibling;
// // val=listItems.previousElementSibling;

console.log(val);