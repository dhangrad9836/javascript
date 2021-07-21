//document.getElementById();
// console.log(document.getElementById('task-title'));

// //get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// //change styling 
// console.log(document.getElementById('task-title').style.background='#333');
// console.log(document.getElementById('task-title').style.color = '#fff');
// console.log(document.getElementById('task-title').style.padding = '5px');

const taskTitle = document.getElementById('task-title');

//change console
taskTitle.textContent = 'Task List';
taskTitle.innerHTML = 'My Tasks';
taskTitle.innerHTML = '<span style ="color:red">Task List</span>';

//Query Selector....you can select any selectors from
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'red';
document.querySelector('li:last-child').style.color = 'pink';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';