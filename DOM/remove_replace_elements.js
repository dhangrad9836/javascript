//Replace Element

//Create Element
const newHeading = document.createElement('h2');

//add id to new Element
newHeading.id = 'task-title';

//new text node
newHeading.appendChild(document.createTextNode('Task List'));

//get old headings 
const oldHeading = document.getElementById('task-title');

//parent node
const cardAction = document.querySelector('.card-action');

//replace to new headings
cardAction.replaceChild(newHeading, oldHeading);    

//console.log(newHeading);

//Remove the Element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//Remove list item
lis[0].remove;

//remove by child
list.removeChild(lis[3]);

//Classes && attributes 
const firstLi = document.querySelector('li:first-child');

console.log(firstLi);
//console.log(firstLi.children[0]);
const link = firstLi.children[0];

let val;


//Classes
val = link.className;
val = link.classList;
val = link.classList[0];
//add a test class
link.classList.add('test');
//remove the test class
link.classList.remove('test');
val = link;

///Attributes
val = link.getAttribute('href');
//add a link to the href
val = link.setAttribute('href', 'http://google.com');
//check to see if there is an attribute
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');




console.log(val);


