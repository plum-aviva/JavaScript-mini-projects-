
const url = 'https://random-word-api.herokuapp.com/word?length=8'
let correctGuessArea = [];
let wrongGuessArea = [];
let correctGuess;
let wordArray;
let copyOfWordArray;


async function getWord() {
    const response = await fetch(url);
    const data = await response.json();

    return data[0]


}


async function wordIntoArray() {
    const answerWord = await getWord()
    wordArray = Array.from(answerWord)
    copyOfWordArray = [...wordArray]
    console.log(copyOfWordArray, "copy of word array")
    console.log(wordArray);
    document.getElementById("wordArray").innerHTML = wordArray
    for (letters in wordArray) {
        letterBox = document.createElement("span");

        let letterBoxText = document.createTextNode(wordArray[letters]);
        letterBox.appendChild(letterBoxText);
        document.getElementById("answerArea").appendChild(letterBox);
        letterBox.className = letterBox.innerHTML;
        console.log("class name", letterBox.className)
        console.log(letterBox);

    } return letterBox
}
wordIntoArray()




document.getElementById("submitGuess").addEventListener('click', () => selectLetter());
function selectLetter() {



    let guess = document.getElementById("letterChoice").value;
    console.log(guess)
    console.log("wordArray")
    const word = document.getElementById("wordArray").innerHTML
    console.log(word)

    // for (let i = 0; i < word.length; i++) {

    // let letterBox = document.getElementById(word[i])

    if (copyOfWordArray.includes(guess)) {
        correctGuessArea.push(guess);
        const indexOfGuess = copyOfWordArray.indexOf(guess)
        console.log(indexOfGuess)
        copyOfWordArray.splice(indexOfGuess, 1);
        console.log(wordArray, "new word array")
        console.log(correctGuessArea)
        document.getElementById("CorrectGuessArea").innerHTML = correctGuessArea;
        console.log(correctGuessArea)
        rightGuess = document.querySelectorAll(`.${guess}`);
        for (let element of rightGuess) {
            element.style.backgroundColor = "pink"
        }





    } else {
        wrongGuessArea.push(guess)
        // let uniqueGuess = new Set(wrongGuessArea)
        // let wrongArray = Array.from(uniqueGuess)
        document.getElementById("WrongGuessArea").innerHTML = wrongGuessArea;
    }
    document.getElementById("letterChoice").value = "";
}

// }





