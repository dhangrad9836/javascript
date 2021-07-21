const name = 'John Doe';
const age = 45;
const hasKids = true;
const car = null;

console.log(typeof car);

//type Conversion functions
let val;

//number to string
val = 5;
//converted to string
val = String(5);

val = String(4+4);

val = String(true);

val = String(new Date());

val = String([1,2,3,4]);

//other way to convert to string is using the toString() method
val = (5).toString();
//output
console.log(val);
console.log(typeof val);
//console.log(val.length);
//console.log(val.toFixed());

//type coercion
const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum);

