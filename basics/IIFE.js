//immediately invokable function expressions - IIFEs
//definition- a function that you declare and run at the same time 
//it's a anonymous function inside parentheses

//if you look at it the function at the end has parentheses which will initiate to 
//call this function automatically.

// (function(){
//     console.log('IIFe Ran..');
// })();


//IIFe taking in parameters
// (function(name){
//     console.log('Hello ' + name);
// })('Brad');

///we can put functions inside objects
//Property methods are
const todo = {
    add: function(){
        console.log('Add todo..');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function(){
    console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();