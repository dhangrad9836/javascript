//add event to clear task button
//1 select the clear task button with it class of '.clear-tasks'
//the addEventListener has two params...1 the event we want to listen for
//and the second will be an anonymous function / aka callback function

// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//     console.log('hello world');
//     e.preventDefault();
//     //use e.preventDefault() to override any behavior ie: any links that re-direct to another site
// })

document.querySelector('.clear-tasks').addEventListener('click', onClick);
    
function onClick(e){
    //console.log('click');

    let val;

    //val is equal to the event object
    val = e;

    //Event target element 
    val = e.target;

    //now we have access to the e.target we can access certain class-names
    val = e.target.id;  //there is no id so it will be blank
    val = e.target.className; //this will output the two class names
    val = e.target.classList;

    //for testing purposes change text from 'clear tasks' to 'hello
    val = e.target.innerHTML = 'Hello';

    /////////////////////////////////////////////////////////////
    //Event type
    val = e.type;

    //timestamp
    val = e.timeStamp;

    //Coordinates event related to the window...it tell in pixels the area of where 
    //you clicked
    val = e.clientY;
    val = e.clientX;



    console.log(val);

}