//event bubbling...so the classes above each other will automatically 
//be triggered or fire off 

// document.querySelector('.card-title').addEventListener('click', function(){
//     console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//     console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//     console.log('card title');
// });

// document.querySelector('.col').addEventListener('click', function(){
//     console.log('col');
// });

//////////////////////////////////////////////////
///Event Delegation - when only one item in a list (for example) only triggers and 
//the rest of the items in the list will not trigger...you have to do event delegation
// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

// function deleteItem(e) {
//     //console.log(e.target);
//     if(e.target.parentElement.className === 'delete-item secondary-content'){
//     console.log('delete item');
        
//     }
// } //////////////improved below

function deleteItem(e) {
    //console.log(e.target);
    if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item');
    //delete functionality 
    //e.target = i tag.... .parentElement = a tag .. .parentElement = list item .remove()
    e.target.parentElement.parentElement.remove();
        
    }
}