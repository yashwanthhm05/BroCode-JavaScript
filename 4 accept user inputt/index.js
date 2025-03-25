/* 
there are 2 types of accepting user input

1. EASY WAY = window prompt
2. PROFESSIONAL WAY = HTML textbox


*/

// 1.easy way
// let username = prompt("Enter the user name");
// console.log(username);


//2 . 
  let username;
document.getElementById("mySubmit").onclick = function(){
username = document.getElementById("myText").value; //myText value is stored in the username
document.getElementById("myH1").textContent = `Hello ${username} welcome to JavaScript`;  //prints whatever that the username we have entered
//  console.log(username);
}


