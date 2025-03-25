// Object = A collection of related properties or methods that can represent 
//                real world objects(people,products,places)
//           object = {key:value , 
                      //   functions()}
//
//


const person1  = {
    firstName : "Yashwanth",
    lastName  : "H M",
    age :20,
    isEmployed : true,
    sayHello  : function(){
        console.log("Hi I am Yashwanth"); },
    sayBye: function(){
        console.log("GoodBye!");}
}


const person2  = {
    firstName : "vivek",
    lastName  : "shetty",
    age :21,
    isEmployed : false,
    sayHello  : function(){
        console.log("Hi I am vivek"); },
    sayBye: function(){
        console.log("Bye...!");}
}
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

console.log("\n");
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);

person1.sayHello();
person2.sayHello();