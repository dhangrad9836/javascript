//1 Create the element
const li = document.createElement('li');

//add class to the new element
li.className = 'collection-item';   //this is already defined inside the html

//add id
li.id = 'new-item';

//Add attribute
li.setAttribute('title', 'New Item');

//create text node and append 
li.appendChild(document.createTextNode('Hello World'));

//////////////////////////////////////////////////////////
//1 we create the link element which is an anchor
//2 we give it a className which all the anchor elements share
//3 we add the icon element to the created anchor element //from the materialize css ////library
//4 now we append the created anchor link to the li or list items
//Create new link createElement here anchor tag
const link = document.createElement('a');

//add className to the new element created 
link.className = 'delete-item secondary-content';

//add icon to html element
link.innerHTML ='<i class="fa fa-remove"></i>';

//append created link to li
li.appendChild(link);



//append li as child to ul
document.querySelector('ul.collection').appendChild(li);





console.log(li);