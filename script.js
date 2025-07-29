console.log("Hello World");

let sparkle = "123";
console.log(sparkle);
console.log(typeof sparkle);

console.log(10 + " eggs");
console.log(10 + 8 + "eggs");
console.log("eggs "+ 10 + 8);

console.log(2<=6)

//Both Conditions Need to be true
console.log(7>3)&&(10>8);

//Only one condition must be true
console.log(10>3) ||(5>10);

//If the statement is logical or not
console.log(!5>3);


const hour = new Date().getHoueyrs();
let greeting = "";

if (hour<12){
    greeting = "Good Morning ☀️";
}else if (hour<18){
    greeting = "Good Afternoon⛅";
}else{
    greeting = "Good Evening 🌙";
}

document.getElementById("greeting").innerText = greeting;