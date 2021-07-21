//Create arrays
const numbers = [43, 56, 22, 23, 44, 36,4];
const numbers2 = new Array(22,45, 33, 76, 54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

//console.log(mixed);

let val;


//Get Array length
val = numbers.length;


//CHECK IF IT'S AN ARRAY
val = Array.isArray(numbers);

//Get a value
val = numbers[2];

//insert into arrays
val = numbers[2] = 100;

//find index of arrays
val = numbers.indexOf(36);

//Mutating Arrays
//add on to end of array
// numbers.push(240);

// //addd on to beginning of arrays
// numbers.unshift(120);

// //take of from end of arrays
// numbers.pop();

// //take off from the beginning of the array
// numbers.shift();

// //splice values from arrays
// //has 2 params where we want to start and end value
// numbers.splice(1,3);

//reverse and array from last is first
numbers.reverse();

//concatenate array
val = numbers.concat(numbers2);

//sort the arrays
val = fruit.sort();
val = numbers.sort();

//USE THE COMPARE function
val = numbers.sort(function(x,y){
    return x - y
});

//reverse sort theval = numbers.sort(function(x,y){
    val = numbers.sort(function(x,y){
        return y - x
    }); 


console.log(numbers);
console.log(val);