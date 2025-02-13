let inputText = document.getElementById("inputVariable").value;
let inputTextDisplay = document.getElementById("inputVariableDisplay");



document.getElementById("submitRawVariable").onclick = function () {

    let inputText = document.getElementById("inputVariable").value;
    let inputTextDisplay = document.getElementById("inputVariableDisplay");
    let rawVariableType = document.getElementById("rawVariableDataType");

    inputTextDisplay.innerHTML = inputText;
    rawVariableType.innerHTML = typeof (inputText);

}

document.getElementById("convertToNumber").onclick = function () {
    let inputText = document.getElementById("inputVariable").value;
    let toNumber = Number(inputText);
    let isNow = typeof (toNumber);

    document.getElementById("numberDisplay").innerHTML = `the input ${toNumber} is now a ${isNow}`
}

document.getElementById("convertToBoolean").onclick = function () {
    let inputText = document.getElementById("inputVariable").value;
    let toBoolean = Boolean(inputText);
    let isNow = typeof (toBoolean);

    document.getElementById("booleanDisplay").innerHTML = `the input ${toBoolean} is now a ${isNow}`
}

document.getElementById("parseInt").onclick = function () {
    let inputText = document.getElementById("inputVariable").value;
    let mixedNumber = parseInt(inputText);
    let isNow = typeof (mixedNumber);

    document.getElementById("parseIntArea").innerHTML = `the input ${mixedNumber} is now a ${isNow} `;
}


document.getElementById("stringOrNumber").onclick = function () {

    let inputText = document.getElementById("inputVariable").value;
    let startType = typeof (inputText);
    console.log(inputText);
    console.log(startType);

    document.getElementById("startAsString").innerHTML = `the input text ${inputText} started as ${startType}`;

    let makeNumber = Number(inputText);
    let middleType = typeof (makeNumber);

    document.getElementById("changeToNumber").innerHTML = `then the input text ${makeNumber} is now a ${middleType}`

    let stringAgain = String(makeNumber);
    let endsAsString = typeof (stringAgain);

    document.getElementById("becomeStringagain").innerHTML = `finally the input text ${stringAgain} is now a ${endsAsString}`

}
