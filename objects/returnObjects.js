const sum = function (num1, num2) {
    return {
        num1: num1,
        num2: num2,
        total: num1 * num2
    }

}

console.log(sum(2, 5))

const addNumber = function (number) {
    const add = sum(2, 4).total
    return add + number

}
console.log(addNumber(3))