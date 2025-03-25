
const minNum = 1;
const maxNum = 100;

const ans = Math.floor( Math.random() * (maxNum - minNum +1)) +minNum;

console.log(ans);


let attempts = 0;
let guess;
let running = true;

while(running)
{
    let guess = prompt(`guess a number between ${minNum} and ${maxNum}`);
     guess = Number(guess);
   
if(isNaN(guess))
{
    alert("Please enter a valid number")
}
else if(guess<minNum && guess > maxNum)
{
    alert("Please enter the number between 1 and 100")

}
else {
    attempts++;
    if(guess <ans)
        alert("Too low try again");
    else if(guess >ans)
        alert("Too high try again");
    else {
     alert (`correct the answer is ${ans}. It took you ${attempts} attempts`)
  running =false;
    }
}

    running =false;
}