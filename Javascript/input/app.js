// WINDOW PROMPT    

/* 
let username = window.prompt("What is your name?");
console.log(`Hello ${username}!`);
*/


// Wrong syntax  let username1 =  document.getElementById("btn").onclick;

// HTML TEXTBOX 
let username1;
document.getElementById("btn").onclick = function() {
    username1 = document.getElementById("name").value;
    console.log(`Hello ${username1}!`);

    document.getElementById("id1").textContent = `Hello ${username1}!`;
}
