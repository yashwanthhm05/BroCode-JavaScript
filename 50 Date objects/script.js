// // Date objects = objects that contain values that represent dates and times.
// //           These date objects can be changed and formatted


// const date = new Date();
// // console.log(date);  //prints the current date and time

// //if we want to add manually
// // Date(year, month, day, hour,min, sec, ms)

// // const manualdate = new Date(2024,0,1,2,3,4);
// // console.log(manualdate);


// const newdate = new Date("2025-03-31T23:36:00")
// console.log(newdate)

// const year = date.getFullYear();
// console.log(year);

// const month = date.getMonth();
// console.log(month);

// const day = date.getDate();
// console.log(day);

// const hour = date.getHours();
// console.log(hour);

// const minutes = date.getMinutes();
// console.log(minutes);

// const seconds = date.getSeconds();
// console.log(seconds);

//setting the time
const date= new Date()

date.setFullYear(2025);
date.setMonth(3);
date.setDate(1);
date.setHours(15);
date.setMinutes(51);
date.setSeconds(15);


console.log(date);