// const = a variable that can't be changed

const PI = 3.14;
let radius;
let circumference;
document.getElementById("mybtn").onclick = function(){
     radius = document.getElementById("mytext").value ;
    radius = Number(radius);
     circumference = 2 * PI * radius;
    document.getElementById("myH1").textContent = `circumference is ${circumference}`;
}