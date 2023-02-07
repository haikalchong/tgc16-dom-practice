// USE THOSE VARIABLES TO MODIFY THE DOM ELEMENTS
let header = document.querySelector('h1');
let important = document.querySelector('#important');
let todo = document.querySelector('li.todo');
todo.style.fontFamily="Verdana";
todo.style.fontSize="16px";
important.style.backgroundColor="red";
header.innerHTML="Hello world!";
   
// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
   module.exports = exports = {header, important, todo};
} catch (e) {}