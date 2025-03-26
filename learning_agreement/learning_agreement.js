

const student = "Plum Bristow"
const confidentKnowledge = "this is written without looking anything up (with the possible exception of looking up some spellings)"
console.log(`this is the ${confidentKnowledge} of ${student}`)

const notPassed = `${student} has not demonstrated skill or had to look up skill to complete`
const goodEnough = `${student} has demonstrated skill and been able to explain coding skill`

console.log(`${student} will work to achieve ${goodEnough} standard of coding`)
console.log(`please note - ${student} is responsible for their own future mistakes / moments of forgetting and having to look things up`)




console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")

console.log("variables, data-types and changing variable types")
let number = 5
let variables = [number, "string", "array", "object", "set", "set"]
console.log(typeof (number) + " describes the variable 'number' " + number)
let numberAsString = number.toString()
console.log(typeof (numberAsString) + "  this is a string")
console.log(variables)
ArrayToSet = new Set(variables);
console.log(ArrayToSet);

console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")

console.log("difference between const and let")
const variableConst = "unchanging"
let variableLet = "be reassigned"
console.log(`a const variable is ${variableConst} but a ${variableLet} can be reassigned`)

console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")

console.log("if else statements")
let choice = 3;

if (choice === 1) {
    console.log(`you selected choice ${choice}`)
} else if (choice === 2) {
    console.log(`you selected choice ${choice}`)
} else if (choice === 3) {
    console.log(`you selected choice ${choice}`)
} else {
    console.log('there are only 3 choices')
}

console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")

console.log("for loop")
let filling = ["cheese", "cucumber", "nutella"]
let bread = ["white", "brown", "pitta"]


let sandwiches = []



function makeSandwiches() {
    for (let i = 0; i < bread.length; i++) {
        for (let j = 0; j < filling.length; j++) {
            sandwiches.push(bread[i])
            sandwiches.push(filling[j])
        }
    } return sandwiches
}
console.log(makeSandwiches())
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
console.log("while loop")

function cleanFloor() {
    let dirtLevel = 10

    while (dirtLevel > 0) {
        console.log(`dirt level is ${dirtLevel} - keep cleaning`)
        dirtLevel--
    }
    console.log("it's clean now - you can stop")
}
cleanFloor();
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")

console.log("do while loop")
function eatChocolate() {
    let eaten = 0

    do {
        console.log(`I have eaten ${eaten} chocolate`)
        eaten++
    }
    while (eaten < 10)
}

eatChocolate()

console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")

console.log("switch statements")

const petFood = {
    rabbit: "carrot",
    bird: "peanuts",
    mouse: "cheese"
}

let pet = petFood.mouse

switch (pet) {
    case petFood.bird:
        console.log(`birds eat ${petFood.bird}`);
        break;
    case petFood.mouse:
        console.log(`mice eat ${petFood.mouse}`);
        break;
    case petFood.rabbit:
        console.log(`rabbits eat ${petFood.rabbit}`)
        break
}

// things I couldn't remember - how to change a string to a number 
let string = "5";
console.log(typeof (string));
let nowNumber = Number(string);
console.log(typeof (nowNumber));

//but then I figured it out and didn't look it up 

