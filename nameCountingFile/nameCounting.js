//can I take in an array - like the other one and 

let array = ["dog", "fish", "dog", "fish", "dog", "dog", "butterfly", "butterfly", "Sukant"]

let set = new Set(array);


let newArray = Array.from(set);

const things = new Map();

let metaArray = [];

for (let i = 0; i < newArray.length; i++) {
    let interimArray = [];
    for (let j = 0; j < array.length; j++) {
        if (newArray[i] === array[j]) {
            console.log(array[j])
            interimArray.push(array[j])
        }
    }
    console.log(interimArray.length)
    metaArray.push(interimArray);
}

for (let z = 0; z < metaArray.length; z++) {
    console.log(metaArray[z][0] + "~" + metaArray[z].length);


}
// for (let i = 0; i < newArray.length; i++) {
//     console.log(newArray[i] + " title");
//     let count = 0;
//     for (let j = 0; j < array.length; j++) {
//         console.log(array[j] + "found")
//         if (array[j] === newArray[i]) {
//             console.log(newArray[i] + "matched")
//             count++;
//         }
//     }
//     console.log(newArray[i] + "found" + count + " number of times ")
//     things.set(newArray[i], count);
//     console.log(things);
// }
// console.log(things);

// function checkMatch(item1, item2) {
//     return item1 === item2
// }

// for (let i = 0; i < newArray.length; i++) {
//     console.log(newArray[i] + " title");
//     let filteredArray = array.filter((element) => checkMatch(newArray[i], element))
//     things.set(newArray[i], filteredArray.length)

// }
// console.log(things);

for (let i = 0; i < newArray.length; i++) {
    console.log(newArray[i] + " title");
    let filteredArray = [];
    for (let j = 0; j < array.length; j++) {
        console.log(array[j] + "found")
        if (array[j] === newArray[i]) {
            console.log(newArray[i] + "matched")
            filteredArray.push(array[j]);
        }
    }

    things.set(newArray[i], filteredArray.length);
    console.log(things);
}