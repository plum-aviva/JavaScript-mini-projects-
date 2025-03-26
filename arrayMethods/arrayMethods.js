// // Array methods 
// console.log("                      ")
// console.log("**************************")
let pets = ["cat", "dog", "fish", "rabbit", "goat", "horse", "sheep"]
let petAge = [1, 2, 3, 4, 5, 6, 7]
let nestedArray = [["cat", "dog"], ["fish", "rabbit"], ["goat", "horse", "sheep"]]
const animals = [
    { name: "cat", hobbies: ["sleeping", "eating"] },
    { name: "dog", hobbies: ["fetching", "walking"] },
    { name: "fish", hobbies: ["swimming", "blowing bubbles"] }

];

// console.log("                      ")
// console.log("**************************")
// // find the length of an array 
// console.log(pets.length + " number of pets")
// console.log("                      ")
// console.log("**************************")
// // turns the array into a string 
// console.log("turns array into a string")
// console.log(pets.toString())
// console.log("                      ")
// console.log("**************************")
// //find different elements of the string 
// console.log(pets.at(3) + " is the 2nd element")
// console.log(pets.at(-1) + " the last element of the array? ")
// console.log("                      ")
// console.log("**************************")
// // turns array elements into a string - but can specify separator: 
// console.log(pets.join(petAge))
// console.log("                      ")
// console.log("**************************")
// //The shift method remeoves the first array element and "shifts" all other elements into a lower index 
// console.log(pets.indexOf("rabbit") + "index of rabbit")
// pets.shift();
// console.log(pets.indexOf("rabbit") + "new index of rabbit");
// console.log("                      ")
// console.log("**************************")
// // unshift() adds new items to the array at the beginning and moves other elements
// pets.unshift("gerbil")
// console.log(pets)
// console.log("                      ")
// console.log("**************************")
// // can use index number to change an item - e.g. gerbil to donkey 
// pets[0] = "donkey"
// console.log(pets)
// console.log("                      ")
// console.log("**************************")
// it is possible to join two arrays together 
// const bothArray = pets.concat(petAge);
// console.log(bothArray);
// console.log("                      ")
// console.log("**************************")

// copyWithin copies an element from the array within the array
// this method modifies the array - uses indexing
// console.log(petAge);
// petAge.copyWithin(3);
// console.log(petAge);
// petAge.copyWithin(4);
// console.log(petAge);
// console.log("                      ")
// console.log("**************************")
// flat() method can turn nested arrays into a simple array 
// // need to save the altered array to anther variable 
// console.log(nestedArray);
// const flatArray = nestedArray.flat(2);
// console.log(flatArray);
// console.log("                      ")
// console.log("**************************")
// // flatMap() - transforms and flattens an array 
// const animalHobbies = animals.flatMap(animal => animal.hobbies);
// console.log(animalHobbies);
// console.log("                      ")
// console.log("**************************")
// // map() takes an array - performs a function and creates a new array - 
// //there are different ways of writing this 
// can be done on one line 
const ageDogYears = petAge.map(age => [age + " age ", age + 2])
console.log(ageDogYears + "This one");
// can create a seperate function with variables 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const plusOne = numbers.map(addOne);


// function addOne(element) {
//     return element += element;
// }

// console.log(plusOne + "plusOne");

// splice() is useful because it can add and remove elements from an array - 
// first parameter defines postion (where selection should start from)
// second parameter defines how many elements to remove
// rest of the parameters define the new elements to be added 
// // this method changes the origional array - see toSpliced() for a method that does not change array 
// numbers.splice(2, 0, 4, 5, 6)
// console.log(numbers)
// // adds numbers
// numbers.splice(2, 3);
// console.log(numbers);
// // removes the numbers I added

// // toSpliced() is similar to splice() but need to create a new array to use 
// const newNumbers = numbers.toSpliced(1, 2, "cat", "Fish", "cake")
// console.log(newNumbers);
// slice() takes out a section of an array - start and end index are the parameters
console.log(numbers)
const sliced = numbers.slice(2, 5)
console.log(sliced)