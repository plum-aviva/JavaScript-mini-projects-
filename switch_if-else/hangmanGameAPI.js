
const url = 'https://random-word-api.herokuapp.com/word?length=5'
let correctGuessArea = [];
let wrongGuessArea = [];
let correctGuess;
let wordArray;

async function getWord() {
    const response = await fetch(url);
    const data = await response.json();

    return data[0]


}


async function wordIntoArray() {
    const answerWord = await getWord()
    wordArray = Array.from(answerWord)
    console.log(wordArray);
    document.getElementById("wordArray").innerHTML = wordArray
    for (letters in wordArray) {
        letterBox = document.createElement("span");

        let letterBoxText = document.createTextNode(wordArray[letters]);
        letterBox.appendChild(letterBoxText);
        document.getElementById("answerArea").appendChild(letterBox);
        letterBox.id = letterBox.innerHTML;
        console.log(letterBox);

    } return letterBox
}
wordIntoArray()

let i = 1;

function selectLetter() {



    let guess = document.getElementById("letterChoice").value;
    console.log(guess)
    console.log("wordArray")
    const word = document.getElementById("wordArray").innerHTML
    console.log(word)

    // for (let i = 0; i < word.length; i++) {

    let letterBox = document.getElementById(word[i])

    if (wordArray[i].includes(guess)) {
        correctGuessArea.push(guess);
        console.log(correctGuessArea)
        document.getElementById("CorrectGuessArea").innerHTML = correctGuessArea;
        console.log(correctGuessArea)
        rightGuess = document.getElementById(letterBox.id);
        rightGuess.style.backgroundColor = "pink";


    } else {
        wrongGuessArea.push(guess)
        // let uniqueGuess = new Set(wrongGuessArea)
        // let wrongArray = Array.from(uniqueGuess)
        document.getElementById("WrongGuessArea").innerHTML = guess;
    }

}

// }





