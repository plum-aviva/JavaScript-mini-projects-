// let day = 1;

// switch (day) {
//     case 1:
//         console.log("it is Monday")
//         break;
//     default:
//         console.log("no such day")
// }

// let testscore = 92;
// let letterGrade;

// switch (true) {
//     case testScore >= 90:
//         letterGrade = "A";
//         break;
//     case testScore >= 70;
//         letterGrade = "B";
//         break
//     default:
//         letterGrade = "F"
// }

// let age = 25;

// if (age >= 19) {
//     console.log("you are an adult");
// } else {
//     console.log("you are not an adult");
// }

const wordGuess = document.getElementById("inputWord");
const submitGuess = document.getElementById("mySubmit");
const feedback = document.getElementById("resultElement");
let livesLeft = document.getElementById("lives");
let lives = 5;
livesLeft.innerHTML = `lives left: ${lives}`;

submitGuess.onclick = function () {
    guess = wordGuess.value;
    let answer = "cat";
    let answerArray = Array.from(answer);
    let answerArea = document.getElementById("answer").innerHTML = answerArray;
    for (i = 0; i < answerArray.length; i++) {
        spantag = document.createElement("span");

        document.getElementById().appendChild(spantag);

        console.log(answerArea[i]);
    }
    console.log(answerArray);




    if (lives > 0) {

        if (answerArray.includes(guess)) {
            feedback.innerHTML = "yes";
            for (i = 0; i < answerArea.length; i++) {
                if (guess === answerArray[i]) {
                    answerIndex = answerArray.indexOf(answerArray[i]);
                    console.log(answerIndex);

                    spantag.innerHTML = answerArray[i];

                }
            }

        } else {
            feedback.innerHTML = "no";
            lives--;
            livesLeft.innerHTML = `lives left: ${lives}`;

            console.log(livesLeft);

        }
    } else {
        livesLeft.innerHTML = "run out of lives";
    }

}