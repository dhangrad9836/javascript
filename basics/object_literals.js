const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function(){
        return 2017 - this.age;
    }
}

let val;

val = person;

//get specific values 
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
//val = person.address['state'];

val = person.getBirthYear();

//or using brackets 
//val = person['firstName'];


console.log(val);

//array of objects
const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 23}
];

//loop through the array
for(let i = 0; i < people.length; i++) {
    console.log(people[i].name);
}











