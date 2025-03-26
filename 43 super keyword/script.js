// super = keyword is used in classes to call the constructor
//         or access the properties and methods of the parent class(super class)


// this = this object
//  super = the parent


//before using super constructor
// class Animal{
    
// }

// class Rabbit extends Animal{
//        constructor(name, age, runSpeed)
//        {
//         super();
//         this.name = name;
//         this.age = age;
//         this.runSpeed = runSpeed;
//        }
// }

 
// class Fish extends Animal{
//     constructor(name, age, swimSpeed)
//     {
//         super();
//      this.name = name;
//      this.age = age;
//      this.runSpeed = swimSpeed;
//     }
// }

// class Hawk extends Animal{
//     constructor(name, age, flySpeed)
//     {
//         super();
//      this.name = name;
//      this.age = age;
//      this.runSpeed = flySpeed;
//     }
// }

// const rabbit = new Rabbit("rabbit",5, 25);
// const fish = new Fish("rabbit",2, 50);
// const hawk = new Hawk("rabbit",10, 100);


// // using super keyword
class Animal{
     constructor(name,age)
     {
        this.name = name;
        this.age  =age;
     }
     move(speed){
        console.log(` this ${this.name} moves at a speed of ${speed} KMPH`);
    }
}

class Rabbit extends Animal{
       constructor(name, age, runSpeed)
       {
        super(name, age);
        this.runSpeed = runSpeed;
       }

       run(){
        console.log(`this ${this.name} can run`);
        super.move(this.runSpeed);
       }
}

 
class Fish extends Animal{
    constructor(name, age, swimSpeed)
    {
        super(name ,age);
     this.name = name;
     this.age = age;
     this.swimSpeed = swimSpeed;
    }
    swim(){
        console.log(`this ${this.name} can swim`);
        super.move(this.swimSpeed);
       }
}

class Hawk extends Animal{
    constructor(name, age, flySpeed)
    {
        super(name,age);
     this.name = name;
     this.age = age;
     this.flySpeed = flySpeed;
    }
    fly(){
        console.log(`this ${this.name} can fly`);
        super.move(this.flySpeed);
       }


   
}

const rabbit = new Rabbit("rabbit",5, 25);
const fish = new Fish("fish",2, 50);
const hawk = new Hawk("hawk",10, 100);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
rabbit.run();

console.log(fish.name);
console.log(fish.age);
console.log(fish.runSpeed);
fish.swim()

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.runSpeed);
hawk.fly()