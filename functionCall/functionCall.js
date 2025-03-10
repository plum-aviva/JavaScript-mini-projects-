// ways of calling a function that multiplies two numbers together

function product(a, b) {
    return a * b;
}

console.log(product(5, 20));

let result = product.call(this, 20, 5);  // this makes the answer a number 
console.log(result);

// Using a function within an object - this function can be called in different objects - 

let employee = {
    details: function (designation, experience) {
        return this.name
            + " "
            + this.id
            + designation
            + experience;
    }
}

//objects declaration
let emp1 = {
    name: "A",
    id: "123",
}
let emp2 = {
    name: "B",
    id: "456"
}

let x = employee.details.call(emp2, "Manager", "4 years")
console.log(x);

// This is a different way of calling a function from an object 

const myPerson = {
    firstName: "Holly",
    lastName: "Bell",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

console.log(myPerson.fullName());
console.log(myPerson.firstName);