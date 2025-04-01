// nested objects  = objects inside the other objects
//                   allows you to represent more complex data structures
//                 child object is enclosed by parent object

//           person{Address{}, ContactInfo{}}    person - parent   address,contactInfo =child
//            ShoppingCart{Keyboard{}, Mouse{}, Monitor}


// const person = {
//     fullName : "yashwanth",
//     age : 20,
//     isStudent : true,
//     hobbies : ["volleyball","cricket"],
//     //child object
//     address : {
//        street : "KSRTC Depo road" ,
//        city : "chitradurga",
//      country : "India"
//     }
// }


// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies);

// // console.log(person.address.street)
// // console.log(person.address.city)
// // console.log(person.address.country)

// for(const property in person.address){
//     console.log(person.address[property]);
// }

