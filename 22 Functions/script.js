//function = A block of reuseable code .
             
function happyBirthday(username, age){
    console.log("happy birthday to you!");
    console.log(`happy birthday ${username}`);
    console.log(`you are ${age} years old`);
    
    
}

happyBirthday("yashwanth",20);


function add(x,y){
    return x+y;
}
console.log(add(2,3));


function isValidEmail(email){
 

   return email.includes("@") ? true : false;
}

console.log(isValidEmail("yashu@gmail.com"));