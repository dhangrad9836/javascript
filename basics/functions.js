//function declaration
function greet(firstName, lastName){
    //console.log('Hello');
    return `Hello ${firstName} ${lastName}`;
}

console.log(greet('John', 'Doe'));


//default parameters
function greet(firstName = 'John', lastName = 'Doe'){
    //console.log('Hello');
    return `Hello ${firstName} ${lastName}`;
}

console.log(greet());

//function expression is putting a function as variable declaration
//also to note that the functio is anonymous
const square = function(x){
    return x * x;
};

console.log(square(8));