// arrow functions = a concise way to write function expressions
//                  good for simple functions that you use only once(parmaters) =>some code

const hello =  (name,age) => {
    console.log(` hello ${name}`);
    console.log(`You are ${age} years old`);
}

hello("Yashwanth",20);


setTimeout( () =>{
    console.log("Hello")
}, 3000);