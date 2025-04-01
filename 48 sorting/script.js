// sort() =method used to sort elements of an array
//          in place.
//     sort elements as strings in lexicographic order,not alphabetical
//      lexicographic  - (alphabets, + numbers,+ symbols) as strings

let fruits = ["apple","banana","orange","grapheds"];
console.log(fruits.sort())

let numbers = [9,8,7,6,5,4,3,2,1];
console.log(numbers.sort());

const people =[
    {name:"yashwanth", age:20, cgpa:7.6},
    {name:"shetty", age:21, cgpa:7.3},
    {name:"smarty", age:15, cgpa:8.6},
]

people.sort((a,b)=> a.age - b.age); // sort for age according to ascending order
people.sort((a,b)=> b.age - a.age); // sort for age according to descending order

people.sort((a,b)=> a.cgpa - b.cgpa); // sort for cgpa according to ascending order
people.sort((a,b)=> b.cgpa - a.cgpa); // sort for cpga according to descending order
//imp point
// this type of sorting will only for the numbers not for the string

//for string like name
people.sort((a,b)=> a.name.localeCompare(b.name));


console.log(people);