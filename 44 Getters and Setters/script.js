// getter = special method that makes a property readable
// setter = special method that makes a property writable

// validate and modify a value when reading/writing a property

// class Rectangle{
//     constructor(width, height)
//     {
//         this.width= width;
//         this.height = height;
//     }
// }


// const rectangle = new Rectangle(-100000,"pizza");
// console.log(rectangle.width);
// console.log(rectangle.height);
// // in the above example we have created a rectangle class 
// with width and height and giving value by using the constructor
//     Here it is taking negative values and string but it has to
// //    take only +ve numbers at that time getters and setters come into picture



// class Rectangle
// {
//      constructor(width, height)
//         {
//             this.width= width;
//             this.height = height;
//         }

//         set width(newWidth){
//             if(newWidth>0){
//                 this._width = newWidth;  // _width = private property
//             }
//             else{
//                 console.error(`width must be a positive number`);
//             }

//         }

//         set height(newHeight){
//             if(newHeight>0){
//                 this._height = newHeight;  // _width = private property
//             }
//             else{
//                 console.error(`Height must be a positive number`);
//             }

//         }

//         get width(){
//             return this._width;
//         }

//         get height(){
//             return this._height;
//         }
//         get area(){
//             return this._width * this._height;
//         }
//  }

//  const rectangle = new Rectangle(3,4);
//  rectangle.width = 5;
//  rectangle.height = 6;

// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);


//example

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age =age;
    }
    set firstName(newFirstName){
         if(typeof newFirstName === "string" && newFirstName.length>0)
         {
            this._firstName = newFirstName; 
         }
         else 
          console.error(`First name must be a non empty string`)
    }
    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length>0)
        {
           this._lastName = newLastName; 
        }
        else 
         console.error(`Last name must be a non empty string`)
   }

   set age (newAge){
    if(typeof newAge === "number" && newAge>=0)
        this._age = newAge;
    else
     console.error(` Age must be a non negative integer`)
   }

   get firstName(){
    return this._firstName;
   }
   get lastName(){
    return this._lastName;
   }
   get age(){
    return this._age;
   }
}

// const person = new Person(420,50,"pizza");
const person =  new Person("yashwanth","shetty",20);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
