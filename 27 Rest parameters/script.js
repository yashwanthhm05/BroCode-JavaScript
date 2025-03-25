// rest parameters = (...rest) allow a function work with a variable
//                         number of arguments by building them into an array

  // spread expands an array into separate elements
             //rest = bundles separate elements into an array


 function openFridge(...foods){

 console.log(foods);
 }
const food1 = "panner";
const food2 = "pizza";
const food3 = "burger";
const food4 = "biryani";

openFridge(food1,food2,food3,food4);