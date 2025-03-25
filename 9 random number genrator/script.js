// let randomNumber = Math.random();
// console.log(randomNumber);  //prints a random number between 0 & 1


// let randomNumber = Math.floor(Math.random() * 6);   // numbers from 0 to 5
// console.log(randomNumber);

// let randomNumber = Math.floor ( Math.random() * 6) +1;   // numbers from 0 to 6
// console.log(randomNumber);


// let randomNumber = Math.floor ( Math.random() * 100) +1;   // numbers from 0 to 100
// console.log(randomNumber);


// const min = 50;
// const max = 100;

// let randomNumber = Math.floor(Math.random() * (max-min) )+ min;
// console.log(randomNumber);   //numbers btw 50 and 100



//RANDOM NUMBER GENERATOR

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");

const min = 1;
const max = 6;
let randomNumber1;
let randomNumber2;
let randomNumber3;

myButton.onclick = function(){
    randomNumber1 = Math.floor(Math.random() * (max-min))+min;
    randomNumber2 = Math.floor(Math.random() * (max-min))+min;
    randomNumber3 = Math.floor(Math.random() * (max-min))+min;
   
    label1.textContent = randomNumber1;
    label2.textContent = randomNumber2;
    label3.textContent = randomNumber3;
}