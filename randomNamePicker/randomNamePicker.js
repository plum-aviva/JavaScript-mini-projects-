

let nameList = []; //creates empty array of namesList
let addedNames = "";// creates added names as an empty string
let text = "";
let score = 0;
let nameBox = "";
let winnerList = [];
let playerDetail = {
    name: "",
    score: 0
};


// use winnerList as basis of score 


// create non-static nameList 
// takes the input from the textarea 
document.getElementById("submitButton").onclick = function () {
    addedNames = document.getElementById("nameInput").value;
    // console.log(addedNames);

    // document.querySelector(".playerName").innerHTML = addedNames;
    const tempNamesList = addedNames.split("\n");
    for (let playerName of tempNamesList) {
        let playerDetail = {
            name: playerName,
            score: 0
        };
        nameList.push(playerDetail);
        nameBox = document.createElement("p");
        nameBox.setAttribute("id", `${playerDetail.name}`);
        nameBox.innerHTML = `name: ${playerDetail.name} ~ score: ${playerDetail.score}`;
        document.querySelector(".nameDiv1").appendChild(nameBox);

        // console.log(nameBox.classList);

    }




};



document.getElementById("chooseName").addEventListener("click", randomName);


function randomName() {
    // creates the variable ran Person from name list 
    // let nameList = ["bob", "kelly", "jim"];
    let ranNumber = Math.floor(Math.random() * nameList.length); // generates a random index
    let ranPerson = nameList[ranNumber];
    ranPerson.score += 1;
    nameList[ranNumber] = ranPerson;
    document.querySelector(".testDiv").innerHTML = ranPerson.name;
    document.querySelector(".nameDiv1").innerHTML = "";
    for (let playerDetail of nameList) {
        console.log(playerDetail);
        nameBox = document.createElement("p");
        nameBox.setAttribute("id", `${playerDetail.name}`);
        nameBox.innerHTML = `name: ${playerDetail.name} ~ score: ${playerDetail.score}`;
        document.querySelector(".nameDiv1").appendChild(nameBox); //
    }
}
