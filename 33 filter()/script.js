

// .filter() = creates a new Array by filtering
//             out the elements

let numbers = [1,2,3,4,5,6,7];


let Even = numbers.filter(isEven);
console.log(Even);

let odd = numbers.filter(isOdd);
console.log(odd);
function isEven(element){
    return element%2 === 0;
}
function isOdd(element){
    return element%2 !== 0;
}


const ages = [16,17,18,19,20,60];

const adults = ages.filter(isAdult);
console.log(adults);
function isAdult(element){
    return element>=18;
}