// set local storage item 
//localStorage.setItem('name', 'John');
//localStorage.setItem('age', '30');

//set session storage item
//sessionStorage.setItem('name', 'Beth');

//local storage remove setItem
//localStorage.removeItem('name');

//get items from storage 
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// //clear the local storge
// localStorage.clear();

// console.log(name, age);

/////////////////////////////////////////////////////////////////////////
////Have form add submit to local storage
document.querySelector('form').addEventListener('submit', function(e){

    //console.log('123');
    const task = document.getElementById('task').value;

    //create array to store the array of tasks..b/c each task will be overrided 
    let tasks;
    //this checks if local storage is empty (which here we name localStorage as 'tasks') if yes then set tasks to empty array
    //if not then do a JSON parse so the tasks will be parsed as a JSON object and then
    //into a string with stringify
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    //now push the task from line 25 to the tasks array
    tasks.push(task);

    //again we are checking localStorage by calling it 'tasks' and converting it
    //to a JSON object and stringify it into a string and setting it into localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert("task saved");

    e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
    console.log(task);
});