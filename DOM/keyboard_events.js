const form = document.querySelector('form');
//gets access from the input field
const taskInput = document.getElementById('task');
//get the value from the h5 element
const heading = document.querySelector('h5');

//clear the form field
taskInput.value = '';

//form.addEventListener('submit', runEvent);

//Keyboard events...keydown
//taskInput.addEventListener('keydown', runEvent);

//KEYUP EVENTS
//taskInput.addEventListener('keyup', runEvent);

//keypress
//taskInput.addEventListener('keypress', runEvent);

//Focus event
taskInput.addEventListener('focus', runEvent);

//Blur
taskInput.addEventListener('blur', runEvent);




function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);

    //test to use e.target 
    console.log(e.target.value);

    //output the value also to the h5 element where we targeted as heading
    //the line below will display what you type in the h5 element
    //heading.innerHTML = e.target.value;
    

    //Get the input value from form field
    //console.log(taskInput.value);

    //usually when using submit you want to use e.preventDefault()
    //e.preventDefault();
}