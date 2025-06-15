function dotCalculator(equation) {

    const parts = equation.split(" ");
    const number1 = parts[0].length;
    const operator = parts[1];
    const number2 = parts[2].length;
    let answer = 0

    if (operator === "+") {
        answer = number1 + number2
    } else if (operator === "-") {
        answer = number1 - number2

    } else if (operator === "//") {
        answer = Math.floor(number1 / number2)
    } else if (operator === "*") {
        answer = number1 * number2
    }

    let answerString = ""

    for (let i = 0; i < answer; i++) {
        answerString += "."
    }


    return answerString;

}


const myEquation = "... // .."
console.log(dotCalculator(myEquation));