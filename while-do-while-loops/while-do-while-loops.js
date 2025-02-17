// this idea could be used for spelling tests? Help me learn new words? 
// while loop that will only accept word cat 
let spelling1 = "";


document.getElementById("whileLoop").onclick = function () {
    while (spelling1 !== "cat") {
        spelling1 = window.prompt(`enter spelling one`);

    }
    document.getElementById("rightAnswer").innerHTML = "Correct - cat"
}
// will only accept the word dog 
let spelling2 = "";
// let letterArray = [...spelling2]


let animal = "dog"
document.getElementById("doWhileLoop1").onclick = function () {
    do {
        animal = window.prompt(`Enter animal name`);
        document.getElementById("wrongAnswer1").innerHTML = "right Answer - it's a " + animal;
    } while (animal !== "dog")


}

//was playing with the idea of changing number to a string - but didn't make sense using this method will build something seperate

let input = "";

document.getElementById("changeToString").onclick = function () {
    while (true) {
        input = window.prompt("enter a number");
        console.log(isNaN(7))
        console.log(isNaN("a"))
        if (!isNaN(input))
            break;
    }
}


let username;

document.getElementById("hiddenPageArea").onclick = function () {
    while (username !== "Plum") {
        username = window.prompt("enter username");
    }
    document.getElementById("hiddenPage").innerHTML = "here it is";
    document.getElementById("hiddenPageLink").removeAttribute("hidden");
}




document.getElementById("hiddenPageRedirect").onclick = function () {
    while (username !== "Plum") {
        username = window.prompt("enter username");
    }
    location.replace("hiddenPage.html")
} 
