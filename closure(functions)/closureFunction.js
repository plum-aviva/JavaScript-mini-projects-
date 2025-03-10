//closure - seems to be about how the variables inside the function can be accessed outside 

// the outer function contains innner functions - and these inner functions can be reused - in this case different types of pizza 
// below is an example of a factory function 

function pizza(topping) {
    function addTopping() {
        console.log(`here is some ${topping} for your pizza`)
    }
    function givePizza() {
        console.log(`enjoy your ${topping} pizza`)
    }
    return {
        addTopping,
        givePizza
    }
}

const mushroom = pizza("mushroom");
const jackfruit = pizza("jackfruit");

console.log(mushroom.addTopping());
console.log(mushroom.givePizza());


// brocode explanation - a closure is a function that is defined inside another function - 
// the inner function has access to the variables and scope of the outer function 
// this allows for private variables and state maintenance - used in JS framewords (so relivant for react )

function outer() {
    let message = "I can access variables in outer function";

    function inner() {
        console.log(message);
    }
    inner();
}

console.log(outer());

// example of closure being used in state management - in this case a counter 
function createcounter() {
    let count = 0;

    function increment() {
        count++;
        console.log(`Count increased to ${count}`)
    }

    function decrement() {
        count--;
        console.log(`Count decreased to ${count}`)
    }
    return {
        decrement,
        increment
    };
}

const counter = createcounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());

// higher order functions 
const names = ["fish", "cat", "dog", "mouse"]

function isNotC(n) {
    return n[0] !== "c";
}

function is4LettersMin(n) {
    return n.length > 3
}

console.log(names.filter(isNotC));
console.log(names.filter(is4LettersMin));
