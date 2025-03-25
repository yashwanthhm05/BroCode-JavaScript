// forEach() = method to iterate over the elements
//          of an array and apply a specified function(callback) to each element
//
///       array.forEach(callback)

// let numbers = [1,2,3,4,5,6];


// numbers.forEach(square);
// // numbers.forEach(triple);
// // numbers.forEach(doubleValue);
// numbers.forEach(display);


// function display(element){
//     console.log(element);
// }

// function doubleValue(element,index,array){
//     array[index]= element*2;
    
// }

// function triple(element,index,array)
// {
//     array[index] = element*3;
// }

// function square(element,index,array){
//     array[index] = Math.pow(element,2);
// }




let fruits = ["APPLE","BANANA","ORANGE","COCONUT"];

// fruits.forEach(upperCase);
// fruits.forEach(lowerCase);
fruits.forEach(capitaliseFirstWord);
fruits.forEach(display);

function upperCase(element,index,array){
    array[index] = element.toUpperCase();
}

function lowerCase(element,index,array){
    array[index] = element.toLowerCase();
}

function display(element){
   console.log(element);
}


function capitaliseFirstWord(element,index,array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}