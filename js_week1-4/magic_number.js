const magicNumber = (num1, num2, num3) => {

    let sum = num1 / num2 * num3 + num1 * num3;
    let message = "";
    if (sum < 50) {
        message = " Try again -  this number needs to be bigger than 50"
    } else if (sum % 2 != 0) {
        message = " we want an even number"
    } else if (sum % num1 === 0 || sum % num2 === 0 || sum % num3 === 0) {

        message = `${sum} fits the criteria - well done! `

    } else {
        message = `${sum} is not divisible by one of the input numbers `
    }
    return sum + message;


}


console.log(magicNumber(8, 20, 10))