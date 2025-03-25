// callback = a function that is passed as an argument
//            to another function
//       
//          used to handle asynchronous operations:
//          1. Reading a file
//          2. Network requesting
//          3. Interacting with databases

// hello(goodBye);
// function hello(callback){
//     console.log("Hello");
//     callback();
// }

// function goodBye(){
//     console.log("Goodbye");
// }


sum(displayResult,1,2);

function sum(callback,x,y)
{
    let result = x + y;
    callback(result);
}

function displayResult(result){
 console.log(result);
}