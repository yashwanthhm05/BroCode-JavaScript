// constructor = special method for defining the properties
//                 and methods of objects

function car(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;

    this.drive = function(){ console.log(`you driving the ${this.make}`)}
}

const car1 = new car("BMW","M5",2024,"black");
const car2 = new car("audi","R8",2023,"blue");


console.log(car1.make);
console.log(car1.model);
car1.drive();


console.log(car2.make);
console.log(car2.model);