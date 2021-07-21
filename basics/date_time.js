let val;

const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');


val = birthday;
val = today.getDate();
val = today.getDay();
val = today.getMonth();

//console.log( typeof val)
console.log(val)