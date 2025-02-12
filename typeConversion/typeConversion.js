let inputText = document.getElementById("inputVariable").value;
let inputTextDisplay = document.getElementById("inputVariableDisplay");



document.getElementById("submitRawVariable").onclick = function () {

    let inputText = document.getElementById("inputVariable").value;
    let inputTextDisplay = document.getElementById("inputVariableDisplay");
    let rawVariableType = document.getElementById("rawVariableDataType");

    inputTextDisplay.innerHTML = inputText;
    rawVariableType.innerHTML = typeof (inputText);

}