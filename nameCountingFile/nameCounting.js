//can I take in an array - like the other one and 

// change array to fullList
let fullList = ""
let fullListArea = ""
let fullListArray = []



// ;

// const things = new Map();



// this is a way of accessing the button - and getting the button to perform function
document.getElementById("submitFullList").onclick = function () {
    fullList = document.getElementById("listInput").value;
    console.log(fullList);

    const tempList = fullList.toLowerCase().split(" ");
    console.log(tempList + " templist");

    document.getElementById("listArea").innerHTML = "";
    document.getElementById("duplicationCount").innerHTML = "";



    for (let listItem of tempList) {
        fullListArea = document.createElement("li");
        fullListArea.innerHTML = listItem;
        document.getElementById("listArea").appendChild(fullListArea)

    }

}

document.getElementById("uniqueItems").onclick = function () {
    const tempList = fullList.toLowerCase().split(" ");
    console.log(tempList + " templist");
    let uniqueItemArea = new Set(tempList);
    console.log(uniqueItemArea);
    let uniqueArray = Array.from(uniqueItemArea);
    console.log(uniqueArray);
    document.getElementById("uniqueItemArea").innerHTML = "";
    document.getElementById("duplicationCount").innerHTML = "";

    for (let uniqueItem of uniqueArray) {
        uniqueItemArea = document.createElement("li");
        uniqueItemArea.innerHTML = uniqueItem;
        document.getElementById("uniqueItemArea").appendChild(uniqueItemArea)

    }


    document.getElementById("countUniqueItems").onclick = function () {
        document.getElementById("duplicationCount").innerHTML = "";
        let metaArray = [];

        for (let i = 0; i < uniqueArray.length; i++) {
            let interimArray = [];
            for (let j = 0; j < tempList.length; j++) {
                if (uniqueArray[i] === tempList[j]) {
                    console.log(tempList[j] + "repeated: ")
                    interimArray.push(tempList[j])



                }
            }
            console.log(interimArray.length + "times")
            metaArray.push(interimArray);



        }

        let countItemArea = document.getElementById("duplicationCount").innerHTML = "";
        for (let z = 0; z < metaArray.length; z++) {
            metaArray[z][0] + "~" + metaArray[z].length;



            for (items in metaArray[z][0]) {
                countItemArea = document.createElement("li");
                countItemArea.innerHTML = metaArray[z][0] + " is repeated " + metaArray[z].length + " times";
                document.getElementById("duplicationCount").appendChild(countItemArea)
            }
            // document.getElementById("duplucationCount").innerHTML = duplicateCount;
            console.log(metaArray[z][0] + "~" + metaArray[z].length);


            // document.getElementById("duplicationCount").innerHTML = metaArray[z][0];
            // console.log(metaArray[z][0] + "~" + metaArray[z].length);

        }


    }

}


// }
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

// for (let i = 0; i < newArray.length; i++) {
//     console.log(newArray[i] + " title");
//     let filteredArray = [];
//     for (let j = 0; j < array.length; j++) {
//         console.log(array[j] + "found")
//         if (array[j] === newArray[i]) {
//             console.log(newArray[i] + "matched")
//             filteredArray.push(array[j]);
//         }
//     }

//     things.set(newArray[i], filteredArray.length);
//     console.log(things);
// }