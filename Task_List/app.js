//Define UI Variables

const form = document.querySelector('#task-form');
//taskList is the ul
const taskList = document.querySelector('.collection');
//clearBtn is the clear task button
const clearBtn = document.querySelector('.clear-tasks');

const filter = document.querySelector('#filter');
//taskInput is the field where to enter your tasks
const taskInput = document.querySelector('#task');

//Load all event listners using a function 
loadEventListners();

//load all event listerners function
//here we will add our event listeners
function loadEventListners(){
    //Add task event listener with addTask function
    form.addEventListener('submit', addTask);

    //Remove task event using event delegation with removeTask function
    taskList.addEventListener('click', removeTask);

    //Clear task event 
    clearBtn.addEventListener('click', clearTasks);

    //Filter task event 
    filter.addEventListener('keyup', filterTasks);

}// End of loadEventListeners

//1. Add task function 
function addTask(e){

    //2. check if there is a value 
    if(taskInput.value === ''){
        alert('Add a task');
    }

    //3. create li element 
    const li = document.createElement('li');
    //4. add class name to the li element
    li.className = 'collection-item';

    //5. Create text node and append to li.
    //first the taskInput value (what ever is typed is created as a textnode)
    //so the users input value is here then this is stored in the li.
    //takes the li element and appends it to the list 
    li.appendChild(document.createTextNode(taskInput.value));

    //6 Create new link element
    const link = document.createElement('a');
    //add a class name to the anchor link and move it to the right with secondary-content from materialize css
    link.className = 'delete-item secondary-content';

    //7. Add icon to remove via innerHTML
    link.innerHTML = '<i class="fa fa-remove"></li>';

    //8 Append the link to the list element
    li.appendChild(link);

    //9/////// Now append the li to the ul taskList
    taskList.appendChild(li);

    //10 Clear the input field 
    taskInput.value = '';

    //prevent default which is the form submit
    e.preventDefault();
}//end of addTask function

//Remove task function
function removeTask(e){
    //we use classList b/c it's checks for a class name of delete-item and it's a function
    //the double parentElement.parentElement is to move up to the parent element 
    //if we don't do this then only the delete button will dissapear not the entire
    //row with the task
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){ 
        e.target.parentElement.parentElement.remove();
        }
    }
}


//Clear task function
function clearTasks(){
    //so this is saying if there is something in the taskList 
    //pass in the firstChild from the taskList inside the removeChild method
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}



//Filter tasks function
function filterTasks(e){
    //first get what value is being typed in the from and make it lowercase
    const text = e.target.value.toLowerCase();

    //get all the list items using querySelectorAll from the collection-item class
    //that we dynamically created
    //we also can use forEach b/c querySelectorAll returns a nodeList
    //from the forEach we pass in an iterator called task..we store it's value in item
    //so the text content of the first child is in item;
    //next we check the item and change it to lowercase since we changed it above to lowercase. if there is no match which is -1 then set it to none else change it to no block style 
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })

}
