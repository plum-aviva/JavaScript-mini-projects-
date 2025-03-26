let cakes = ["chocolate", "banana", "apple", "Welsh", "Victoria", "apple"]

// you can search fro the position of an item in an array using indexof()

let position = cakes.indexOf("Welsh") + 1; // the plus one adjusts for 0 indexing
console.log("banana is at " + position)

// indexof() returns the first - lastIndexOf() returns the last one 

const lastApple = cakes.lastIndexOf("apple") + 1;
console.log(lastApple + " position of last apple")

// includes()
console.log(cakes.includes("mango") + " includes mango?")
console.log(cakes.includes("apple") + " includes apple")

// the find() method returns the value of the first array element that passes a test function 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let first = numbers.find(myFunction)

function myFunction(value, index, array) {
    return value > 4;
}

console.log(myFunction(first))