// set some variables 
// word answer needs to work accross the scope of the page
// const answerArrayList = [
//     "apple",
//     "grape",
//     "beach",
//     "cloud",
//     "pearl",
//     "stone",
//     "flame",
//     "grass",
//     "spark",
//     "drift",
//     "scent",
//     "petal",
//     "shine",
//     "creek",
//     "globe",
//     "frost",
//     "bloom",
//     "quake",
//     "brave",
//     "light"
// ];

// let ranWord = Math.floor(Math.random() * answerArrayList.length); // generates a random index
//     // answer = answerArrayList[ranWord];



let answer = ""
let correctAnswers = [] // area to store correct answers
let wrongAnswers = [] // area to store wrong answers 
let lives = "";
let score = "";

document.getElementById("startGame").onclick = function () {
    document.getElementById("answerArea").innerHTML = "";
    lives = 10;
    document.getElementById("lives").innerHTML = lives;

    // call word from API 

    const apiUrl = 'https://random-word-api.herokuapp.com/word?length=7'

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network was not okay');
            }
            return response.json();

        })
        .then(data => {
            console.log(data);

            let arr = []
            for (let key in response) {
                arr.push(response[key]);
            }
            console.log(arr);

            // let answerArray = Array.from();


        })
        .catch(error => {
            console.log('Error: ', error)



            // make the word into an array 

            // now make each letter in the array a separate span area - so that the css document can change formatting and hide 

            for (letters in answerArray) {
                letterBox = document.createElement("span");
                letterBox.setAttribute("id", `${letters}`);
                let letterBoxText = document.createTextNode(answerArray[letters]);
                letterBox.appendChild(letterBoxText);
                document.getElementById("answerArea").appendChild(letterBox);
                console.log(letterBox);

            }
        });
}

//guess a letter 
// get selection and store in a variable - submit button function
document.getElementById("submitChoice").onclick = function () {

    let guess = document.getElementById("letterChoice").value;
    console.log(guess);
    let answerArray = Array.from(answer);


    for (letters in answerArray) {

        let letterBox = document.getElementById(letters);

        if (answerArray[letters].includes(guess)) {



            rightGuess = document.getElementById(letterBox.id);
            rightGuess.style.backgroundColor = "pink";

            correctAnswers.push(rightGuess);



        } if (correctAnswers.length === answerArray.length) {
            document.getElementById("result").innerHTML = `You win - the correct answer is ${answer}`;
        }
    }


    if (!answerArray.includes(guess)) {
        wrongAnswers.push(guess)
        document.getElementById("feedbackArea").innerHTML = wrongAnswers;
        lives--
        document.getElementById("lives").innerHTML = lives;
        if (lives < 1) {
            alert(`the word was ${answer} better luck next time!`)
        }


    } let options = document.getElementById("letterChoice");
    for (let i = options.length - 1; i >= 0; i--) {

        if (options[i].value === guess) {
            options.removeChild(options[i]);
        }
    }
}


