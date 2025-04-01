//closure = A function defined inside of another function,
//          the inner function has access to the variables
//        and scope of the outer function
//        Allow for private variables and state maintaince
//       used frequently in JS frameworks : React,Angular ,Vue .

// function outer(){
//     let message = "hello";
//     function inner(){
//      console.log(message);
//     }
//    inner(); 
// }

// outer();


// //EXAMPLE

// function createCounter(){
//     let count = 0;
//     function increment(){
//         count++;
//         console.log(`count increased to ${count}`);
//     }
//    function getCount(){
//     return count;
//     }

//     return {increment,count}; //clousure
// }

// const counter = createCounter();

// counter.increment();
// counter.increment();
// counter.increment();

// console.log(`the current count is ${counter.getCount()}`);

//example 2

function  createGame(){ //outer function
     let score = 0;
     function increaseScore(points)
     {
        score += points;
        console.log(`+${points} pts`)
     }
     function decreaseScore(points)
     {
        score -= points;
        console.log(`-${points} pts`)
     }
     function getScore(){
        return score;
     }

     return {increaseScore,decreaseScore,getScore};  //closure
     
}

const game = createGame();

game.increaseScore(5);
game.decreaseScore(3);
game.increaseScore(10);


console.log(`the final score is ${game.getScore()} pts`)