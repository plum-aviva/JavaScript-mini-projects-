// string.slice(start, end)

// get the first name and last name using .slice() and indexOf 

// let fullName = "Thomas Bristow"

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" "),);

// document.getElementById("oneNameTest").innerHTML = `First name: ${firstName} last name: ${lastName} `
// this is like the things I did with Sukant 

const email = "plum.bristow@aviva.com"

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);




// let fullNames = ["Thomas Bristow", "Daniel Bristow", "Paul Bristow", "Victoria Thomas"]

// for (i = 0; i < fullNames.length; i++) {
//     console.log(fullNames[i]);
//     document.getElementById("test").innerHTML = fullNames




//     let firstName = fullNames[i].slice(0, fullNames.indexOf(" ")).push()
//     let lastName = fullNames[i].slice(fullNames.indexOf(" ")).push()



//     document.getElementById("arrayOfNamesTest").innerHTML = `First name: ${firstName} last name: ${lastName} `

// }
