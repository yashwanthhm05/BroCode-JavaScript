//Method chaining = calling one method after another in one continous line of code.


// ---- No method chaining
//problem - extract username from prompt and trim and make first character as capital and remaining captial letters as small

// let username = prompt("Enter the username :")

// username = username.trim();
// let letter = username.charAt(0)
// letter =  letter.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();

// username  = letter + extraChars;
// console.log(username);




// --Method chaining
let username = prompt("Enter the username :")
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);
