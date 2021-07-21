let val;


const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

//Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;
//node types
// 1 - Elements
// 2 - Attributes
// 3 - Text node
// 8 - Comment 
// 9 - Document Itself
// 10 - Doctype

//Get children element nodes
val = list.children;
val = list.children[1];
list.children[2].textContent = 'Computer';

//children of children node
//val = list.children[3].children;
//add a link called test-link
val = list.children[3].children[0] = 'test-link';

val = list.children[3].children[0];

//First child
val = list.firstChild;
val = list.firstElementChild;

//Last Child
val = list.lastChild;
val = list.lastElementChild;

//list of child Elements
val = list.childElementCount;

//get parent nodes
val = listItem.parentNode;
val = listItem.parentElement;
//this traverses upward to the parent of the parent below
val = listItem.parentElement.parentElement;

//get next sibling
val = listItem.nextSibling;
val = listItem.nextSibling.nextSibling;


//get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;


console.log(val);