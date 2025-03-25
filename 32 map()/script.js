// .map() = accepts a callback and applies that function
//         to each element of an array then return an array

// const numbers = [1,2,3,4,5,6];

// const squares = numbers.map(square);
// console.log(squares);
// const cubes = numbers.map(cube);
// console.log(cubes);

// function square(element){
//     return Math.pow(element,2);
// }

// function cube(element)
// {
//     return Math.pow(element,3);
// }


const students = ["yashwanth","vivek","shetty","srujan"];

const captilised = students.map(uppercase);
console.log(captilised);

function uppercase(students){
    return students.toUpperCase();
}


const dates= ["2024-1-10","2025-2-20","2026-3-30"];

const formatedDates = dates.map(formatDates);
console.log(formatedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`
}