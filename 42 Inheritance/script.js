// inheritance = allows a class to inherit properties and methods
//                 from an existing class ( parent -> child)
//                  helps in code reusability


class Animal{
    alive = true;

    eat(){
        console.log(`this ${this.name} is eating`);
    }
    sleep(){
        console.log(`this ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = "Rabbit";

    run(){
        console.log(`this ${this.name} is running`);
    }
}

class Fish extends Animal{
    name = "Fish";

    swim(){
        console.log(`this ${this.name} is swimming`);
    }
}
class Elephant extends Animal{
    name = "Elephant";
}

const rabbit = new Rabbit();
const fish = new Fish();
const elephant = new Elephant();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();