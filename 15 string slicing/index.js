//string slicing = creating a substring from a 
 //                portion if another string

 //   string.slice(start,end);

//  const fullName = "Yashwanth H M";


//  let firstName = fullName.slice(0,9);
//  console.log(firstName);

//  let lastName = fullName.slice(10,14);
//  console.log(lastName);

//  //negative index 
//  let lastChar = fullName.slice(-1);
//  console.log(lastChar);



const fullName = "Yashwanth H M";
 let firstName = fullName.slice(0, fullName.indexOf(" "));
 console.log(firstName);

 let lastName = fullName.slice(fullName.indexOf(" ")+1);
 console.log(lastName);


 //extracting username from string

 const email = "yashu05@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@")+1);

 console.log(username); 
 console.log(extension);