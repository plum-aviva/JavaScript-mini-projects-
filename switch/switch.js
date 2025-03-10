
// cd switch
// node switch.js 
// static input 

// number between 1 - 7 
// will correspond to each day of the week 
// 1- Monday ..... 7 - Sunday 
//input = 1 . output = Monday 
// anything else input - this is not a day of the week 

//arrow functions are good for functions you only use once 

// let cost;

// let costCalculator = function () {
//     let totalUnits = 301;
//     switch (true) {
//         case totalUnits <= 100:
//             cost = totalUnits * 0;
//             break;
//         case totalUnits <= 200:
//             cost = totalUnits * 1.5;
//             break;
//         case totalUnits <= 300:
//             cost = totalUnits * 2.5;
//             break;
//         case totalUnits > 300:
//             cost = totalUnits * 4;
//             break;

//     }

//     return cost;

// }

// console.log(costCalculator())


let charge;
let totalUnits = -101;
let charge1;
let level2units;
let level2cost;

switch (true) {
    case totalUnits <= 100:
        charge = totalUnits * 0;
        console.log(charge);
        break;
    case totalUnits > 100 && totalUnits <= 200:
        let level1 = totalUnits * 1.5;
        console.log(`cost of units between 100 - 200 = ${level1}`)
        charge = level1;
        console.log(`total cost = ${charge}`)
        break;
    case totalUnits > 200 && totalUnits <= 300:
        charge1 = 200 * 1.5;
        level2units = (totalUnits - 200);
        level2cost = level2units * 2.5;
        charge = charge1 + level2cost;
        console.log(`cost of units between 100 - 200 = ${charge1}`)
        console.log(`cost of units between 200 - 300 = ${level2cost}`)
        console.log(`total = ${charge}`)

        break;
    case totalUnits > 300:
        charge1 = 200 * 1.5;
        level2cost = 100 * 2.5;
        let level3units = (totalUnits - 300)
        let level3cost = level3units * 4;
        charge = charge1 + level2cost + level3cost;
        console.log(`cost of units between 100 - 200 = ${charge1}`)
        console.log(`cost of units between 200 - 300 = ${level2cost}`)
        console.log(`cost of units greater than 300 = ${level3cost}`)
        console.log(`total = ${charge}`)
        break;

}







// let arrowCostCalculator = () => {
//     let totalUnits = 300;
//     switch (true) {
//         case totalUnits <= 100:
//             cost = totalUnits * 0;
//             break;
//         case totalUnits <= 200:
//             cost = totalUnits * 1.5;
//             break;
//         case totalUnits <= 300:
//             cost = totalUnits * 2.5;
//             break;
//         case totalUnits >= 400:
//             cost = totalUnits * 4;
//             break;

//     }

//     return cost;
// }

// // switch to give different numbers of points - using the function that demonstrates closure 


// function createcounter() {
//     let count = 0;

//     function increment() {
//         console.log(`Count started at ${count}`)
//         count += 1;
//         console.log(`Count increased to ${count}`)
//         return count;

//     }

//     function decrement() {
//         count -= 1;
//         console.log(`Count decreased to ${count}`)
//         return count;
//     }
//     return {
//         decrement,
//         increment
//     };
// }
// const counter = createcounter();
// let score = "lemmon"
// switch (score) {
//     case "apple":
//         score = counter.increment();
//         score = counter.increment();
//         score = counter.increment();
//         break;
//     case "lemmon":
//         score = counter.decrement();
//         score = counter.decrement();
//         score = counter.decrement();
//         score = counter.decrement();
//         score = counter.decrement();
// }

// console.log(score)







// // console.log(counter.increment());
// // console.log(counter.increment());
// // console.log(counter.increment());
// // console.log(counter.decrement());


// // console.log(arrowCostCalculator())

// // extending arrow functions with map, filter and reduce  (brocode lesson examples)

// const numbers = [1, 2, 3, 4, 5, 6];

// const squares = numbers.map((element) => Math.pow(element, 2));
// const evenNums = numbers.filter((element) => element % 2 === 0);
// const oddNums = numbers.filter((element) => element % 2 !== 0);
// const total = numbers.reduce((accumulator, element) => accumulator + element);

// console.log(squares);
// console.log(evenNums);
// console.log(oddNums);
// console.log(total);


