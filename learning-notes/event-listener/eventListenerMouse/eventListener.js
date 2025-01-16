// eventListener = Listen for specific events to create interactive webpages events: click, mouseover, mouseout

// basic syntax = .addEventListener(event, callback)

let myBox = document.getElementById("myBox")
// where the eventListener will happen - create a const 

// create the event function - 
function changeColor(event) {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Hello Sunshine! 🌻"
    event.target.style.borderRadius = "30%";
    event.target.style.padding = "35px";
    event.target.style.boxShadow = "10px 10px 5px 0px orange";
    event.target.style.border = "solid red 5px";
    event.target.style.margin = "20px";
}

myBox.addEventListener('click', changeColor);


//similar to above but with anonymous function

let myBox1 = document.getElementById("myBox1")
// where the eventListener will happen - create a const 

// create the event function - 


myBox1.addEventListener('click', function (event) {
    event.target.style.width = "20px";
    event.target.style.height = "20px";
    event.target.textContent = "🐭"
});

myBox1.addEventListener("mouseenter", function (event) {
    event.target.style.width = "60px";
    event.target.style.height = "60px";
    event.target.textContent = "🐘";
})

myBox1.addEventListener("mouseleave", function (event) {
    event.target.style.width = "200px";
    event.target.style.height = "200px";
    event.target.textContent = "Bigger! 🦕"
})

// using a arrow function 

const myBox2 = document.getElementById("myBox2");

myBox2.addEventListener("click", event => {
    event.target.style.opacity = "80%";
    event.target.style.backgroundColor = "teal";
    event.target.textContent = "Hello!  🐣"
    event.target.fontsize = "5rem"
});

myBox2.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "green";
    event.target.textContent = "💐 Will be spring soon 💐"

})

myBox2.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "blue";
    event.target.textContent = "warmer weather 🌞 🍦"
})

//making a button to control all the boxes 
document.addEventListener("DOMContentLoaded", () => {
    const textBox = document.querySelectorAll("div.myBox");
    const paragraph = document.querySelectorAll("p")

    const controlButton = document.getElementById("myButton");


    function celebrateLearning(event) {
        for (i = 0; i < textBox.length; i++) {
            event.target.style.backgroundColor = "red";
            console.log(textBox[i]);
            textBox[i].style.backgroundColor = "purple";
            paragraph[1].style.backgroundColor = "yellow";
            textBox[i].textContent = "I've learnt something!"


        }
    }

    controlButton.addEventListener("click", celebrateLearning);
});