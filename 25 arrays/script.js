
let fruits = ["Apple","BAnana","pineapple","watermelon"];


// fruits.push("orange");  // push elements at the end
// fruits.pop();          // pops element at the end
//  fruits.unshift("Mango")   // push element at the front
// fruits.shift();           //delets first element

console.log(fruits.length);
let index = fruits.indexOf("BAnana");
 console.log(index);

console.log(fruits);


//spread operator =  ... allows an iterable such as an array
//                       or string to be expanded into separate elements
                        // (unpacks the element)

// let numbers = [1,2,3,4,5];
// let maximum = Math.max(numbers);
// console.log(maximum);     //here we cannot directly give array so we can use spread operator


let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers);
console.log(maximum);     //here we cannot directly give array so we can use spread operator



let nums = [1,2,3,4,5];
let minimum = Math.min(...nums);
console.log(minimum);     //here we cannot directly give array so we can use spread operator


let username = "Yashwanth";
let letters  = [...username];
 
console.log(letters);

let fruit = ["Apple","BAnana","pineapple","watermelon"];

let copyFruits = [...fruit];
console.log(copyFruits);


//concatenate two string using spread operator

let newArray = [...fruit,...copyFruits];
console.log(newArray);