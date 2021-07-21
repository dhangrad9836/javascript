//For Loop

// for(let i = 0; i < 10; i++){
//     if (i == 2){
//         console.log('2 is my favorite number');
//         continue;
//     }

//     if(i === 5){
//         console.log('stop the loop')
//         break;
//     }
    
//     console.log('Number ' + i);
// }//end for loops

// //while loop

// let i = 0;

// while(i < 10){
//     console.log(`Number + ${i}`);
//     i++;
// }

//do while
// let i = 100;

// do{
//     console.log(`Number ${i}`);
//     i++;
// }
// while(i < 10);

//LOOPS FOR ARRAYS

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(i = 0; i <cars.length; i++){
//     console.log(cars[i]);
// }

//foreach loop with callback function
// cars.forEach(function(car){
//     console.log(car);
// })

//foreach with index and array parameter
cars.forEach(function(car, index, array){
        console.log(`${index} : ${car.name}`);
        console.log(array);
    })



//MAP 
const users = [
    {id:1, name: 'John' },
    {id:2, name: 'Sara' },
    {id:3, name: 'Karen' }
];

const ids = users.map(function(user) {
    return user.id;
});

console.log(ids);


//forin loop for objects
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
};

for(let x in user){
    //console.log(x);
    console.log(`${x} : ${user[x]} `);
}




























