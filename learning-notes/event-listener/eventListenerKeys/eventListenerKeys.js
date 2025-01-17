
const myBox = document.getElementById("myBox");
const displayArray = document.getElementById("displayArray");
const arrayIntoSring = document.getElementById("arrayIntoString");
const array = [];
let resultString = "";

document.addEventListener("keyup", event => {
    console.log(`key up = ${event.key}`);
    myBox.textContent = event.key
    if (event.key === "Backspace") {
        resultString = resultString.substring(0, resultString.length - 1)
    } else if
        (event.key === "Shift") {
        resultString = resultString.substring(0, resultString.length - 6) + resultString.slice(resultString.length - 1, resultString.length);
        // resultString = resultString + resultString.slice(resultString.length - 2, resultString.length) this just repeats string
    } else {
        resultString = resultString + event.key;
    }

    displayArray.textContent = resultString;
    document.getElementById("noComma").textContent = resultString;
});

document.addEventListener("keydown", event => {
    console.log(`key down = ${event.key}`);
    if (event.key === "Shift") {
        myBox.textContent = "";
        resultString = resultString + event.key.toUpperCase();
    }
});

// want to capitalise - do an If statement with Shift key and resultString to uppercase also have to not put shift onto screen


// document.addEventListener("keyup", event => {
//     console.log(`key up = ${event.key}`);
//     myBox.textContent = event.key
//     array.push(event.key);
//     displayArray.textContent = array;
//     let string = array.toString();
//     arrayIntoSring.textContent = string;
//     let noComma = string.split(",");
//     document.getElementById("noComma").textContent = noComma;
//     testIdea = document.getElementById("arrayIntoString").value
//     console.log(testIdea);


// });

// document.addEventListener("keydown", event => {
//     console.log(`key down = ${event.key}`);
//     if (event.key === "a") {
//         myBox.textContent = "a";
//     } else if (event.key === "b") {
//         myBox.textContent = "🐘";
//         myBox.style.backgroundColor = "green";
//     } else if (event.key = "Enter") {
//         console.log("you did it! ")
//     }
// })