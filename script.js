// ===== FUNCTIONS WITH NO PARAMETERS ===== //
function sayHello(){

    let output1 = document.querySelector("#output1");
    output1.innerHTML = "Hello Keliah! 👋 Welcome to JavaScript function review!";
}
function showDate(){
    let output1 = document.querySelector("#output1");
    output1.innerHTML = "Today's date is: Wed Oct 29 2025";
}
function quote(){
    let output1 = document.querySelector("#output1");
    output1.innerHTML = "All our dreams can come true if we have the courage to pursue them";

}
function addNumbers(){
    let output1 = document.quereySelector("#output1");
    output1.innerHTML = "The sum of 5 + 7 = 12";
}
function greetUser(){
    let output1 = document.querySelector("#output1");
    output1.innerHTML = "Hello, Alex! 👋 Welcome to the world of JavaScript.";
}
function calculateArea(){
    let output1 = document.querySelector("#output1");
    output1.innerHTML = "The area of a 10x6 rectangle is 60 square units.";
}
 function favoriteColor(){
    let output1 = document.querySelector("output1");
    output1.innerHTML = "Your favorite color is blue! 🎨";
 }





// ===== FUNCTIONS WITH PARAMETERS ===== //

function add(val1, val2){
    let output1 = document.quereySelector("#output2");
    output2.innerHTML = "The sum of $(val1) + $(val2) = $(val1 + val2) ";
}







// ===== EVENT LISTENERS THAT CALLS FUNCTIONS ===== //
docuemnt.querySelector(".sayHelloBTN") .addEventListener("click",function(){
    sayHello();
});
document.querySelector(".showDate") .addEventListener("click", function(){
    showDate();
});
document.querySelector(".quote") .addEventListener("click",function(){
      quote();
});
document.querySelector(".addNumbers") .addEventListener("click", function(){
addNumbers();
});
document.querySelector(".greetUser") .addEventListener("click", function(){
   greetUser();
});
document.querySelector(".calculateArea") .addEventListener("click", function(){
  calculateArea();
});
document.querySelector(".favoriteColor") .addEventListener("click", function(){
  favoriteColor();
});