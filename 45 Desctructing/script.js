// destructing = extract values from array and objects,
//               then assign them to variables in a convenient way

//              [] = to perform array destructing
//               {} = to perform object destructing

//example 1
// SWAP the value of two variables

let a = 1;
let b = 2;

[a,b] = [b,a];

console.log(a);
console.log(b);


//EXAMPLE 2
// SWAP 2 ELEMENTS IN AN ARRAY

const colors = ["red","green","blue","black","white"];

[colors[0],colors[1]] = [colors[1],colors[0]];
console.log(colors[0]);
console.log(colors[1]);


// EXAMPLE 3 
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const COLOURS = ["red","green","blue","black","white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = COLOURS;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);


//EXAMPLE 4
// EXTRACT VALUES FROM OBJECTS

// const person1 = {
//     firstName : "YAShwanth",
//     lastName : "RAJ",
//     age : 20,
// }

// const  {firstName, lastName, age} = person1;

// console.log(firstName);
// console.log(lastName);
// console.log(age);

//  EXAMPLE 5
//  DESTRUCTIVE IN FUNCTION PARAMETERS


function displayPerson({firstName, lastName, age}){
    console.log(`name : ${firstName} ${lastName}`);
    console.log(`Age : ${age}`);
}
const Person1 = {
    firstName : "YAShwanth",
    lastName : "RAJ",
    age : 20,
}

const person2 = {
    firstName : "TOxic",
    lastName : "VS",
    age : 20,
}

displayPerson(Person1);
displayPerson(person2);