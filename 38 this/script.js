//this = reference to the object where THIS is used
//      (the object depends on the immediate context)
//    person.name = this.name

const person1  = {
    Name : "Yashwanth",
    age :20,
    food: "pizza",
    sayHello  : function(){
        console.log(`Hi I am ${this.Name}`); },
    eat: function(){
        console.log(`${this.Name} is eating ${this.food}`);}
}


person1.sayHello();
person1.eat();