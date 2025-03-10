// this version asks user input in the console - but want to try it another way as this makes it hard to repeat 
// first challenge make two arrays of a product - set up a function to buy and a function to sell -
// needs two arrays - one stock with shop and one with buyer 
// two functions buyBread and sellBread - buy puts bread from shopBread array into the buyerBread array and sell moves bread from buyer array into shopBread array 



let shop = "shop1"

class Trading {
    constructor(trader) {
        this.trader = trader;
        this.bread = [];
        this.apple = [];
        this.moneyTotal = 0;
        this.appleCost = 5;
        this.breadCost = 10;


    }
}

const customer = new Trading("Customer");
let customerMoney = customer.moneyTotal = 50;

shop = new Trading("shop1")


shop.bread.push("Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread",)






customer.buybread = function () {
    // how much bread is wanted
    let origionalShopArray = shop.bread.length;
    let origionalCustArray = customer.bread.length;
    console.log(origionalShopArray + " this is how much to start with");

    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question(`we have ${shop.bread.length} available - how many would you like?`, (answer) => {
        console.log(`you want ${answer} loaves of bread`);
        rl.close();

        //setting price 
        if (shop.bread.length > 20) {
            shop.breadCost = 1;
        } else if (shop.bread.length <= 20 && shop.bread.length >= 10) {
            shop.breadCost = 5;
        } else if (shop.bread.length <= 9 && shop.bread.length > 0) {
            shop.breadCost = 10;
        } else {
            shop.breadCost = "not for sale";
        }


        if (answer > shop.bread.length) {
            console.log(answer + "answer");
            console.log(`you have asked for ${quantity}, we have ${shop.bread.length} available`)
            console.log(`Please ask for ${shop.bread.length} or less`)
        } else if (answer <= shop.bread.length) {
            for (i = 0; i < answer; i++) {
                customer.bread.push("bread");
                shop.moneyTotal += shop.breadCost;
                customer.moneyTotal -= shop.breadCost;
                shop.bread.pop("bread");


            }


        } console.log(`the shop started with ${origionalShopArray} loaves of bread and now has - `)
        console.log(shop.bread.length + "new length");
        console.log(shop.bread.length - origionalShopArray + " this is the change");
        console.log(`the customer started with ${origionalCustArray} loaves of bread and now has - `)
        console.log(customer.bread.length - origionalCustArray)
        console.log(`the shop has gained ${shop.moneyTotal} coins`);
        console.log(`the customer started with ${customerMoney} spent ${shop.moneyTotal} and now has ${customer.moneyTotal}`)

    })




};


// can use same logic to write applie buy - and sale functions 

// what about different cities? 

// customer.buyapple = function () {
//     let previousNumber = customer.apple.length;
//     shop.apple.pop("apple", "apple", "apple");
//     customer.apple.push("apple", "apple", "apple");
//     console.log("");
//     let newNumber = customer.apple.length;
//     console.log("you bought  " + (previousNumber + newNumber) + " of apple");


// }

console.log(customer.buybread());


// // console.log(customer.buybread());