// .reduce() = reduce of an array value of an array to a single value

const prices = [5,36,57,575,234];

const total = prices.reduce(sum);
console.log(`${total}`)


function sum(accumulator,element){
    return accumulator +element;
}