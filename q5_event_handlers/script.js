// PLACE YOUR CODE HERE


//Given the HTML, add an event listener to the button with 
//the id of `changeColor` such that when it is clicked,
//the `<h1>` element's background color will become yellow.

let btn=document.querySelector("#changeColor");
let h1=document.querySelector("h1");
btn.addEventListener("click",function(){
 h1.style.backgroundColor="yellow";
})
