// this version I want to not have user input in the terminal and control the variables on the console. 

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

const customer = new Trading("Customer", "bread");
let customerMoney = customer.moneyTotal = 1000;

shop = new Trading("shop1", "Bread")


shop.bread.push("Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread", "Bread",)





// answer refers to quantity required 
customer.buybread = function (answer) {



    // how much bread is wanted
    let origionalShopArray = shop.bread.length;
    let origionalCustArray = customer.bread.length;
    console.log("The shop starts with" + origionalShopArray + "loaves of bread");





    //setting price 
    if (shop.bread.length > 20) {
        shop.breadCost = 5;
    } else if (shop.bread.length <= 20 && shop.bread.length >= 10) {
        shop.breadCost = 8;
    } else if (shop.bread.length <= 9 && shop.bread.length > 0) {
        shop.breadCost = 10;
    } else {
        shop.breadCost = "not for sale";
    }

    // do conditions
    for (i = answer; i > 0; i--) {
        { //not worrying about customer money 
            console.log(`customer asked for ${answer}`)
            console.log(i + "is i")
            answer--
            customer.bread.push("bread");
            shop.moneyTotal += shop.breadCost;
            customer.moneyTotal -= shop.breadCost;
            shop.bread.pop("bread");
            console.log(`customer wants ${answer} more`)
            console.log(`we have ${shop.bread.length} left you can buy more`)
            console.log(`you have ${customer.moneyTotal} which is enough money to buy more`)

            if (shop.bread.length < 1) {
                console.log(`we have ${shop.bread.length} loaves of bread left`)
            } else if (customer.moneyTotal < 1) {
                console.log(`you have ${customer.moneyTotal} that is not enough to buy a item worth ${shop.breadCost}`)
            }



        }
    } console.log(`the shop started with ${origionalShopArray} loaves of bread and now has - `)
    console.log(shop.bread.length + "new length");
    console.log(shop.bread.length - origionalShopArray + " this is the change");
    console.log(`the customer started with ${origionalCustArray} loaves of bread and now has - `)
    console.log(customer.bread.length - origionalCustArray)
    console.log(`the shop has gained ${shop.moneyTotal} coins`);
    console.log(`the customer started with ${customerMoney} spent ${shop.moneyTotal} and now has ${customer.moneyTotal}`)



}









console.log(customer.buybread(20));
// // console.log(customer.buybread());


customer.sellbread = function (answer) {



    // how much bread is wanted
    let origionalShopArray = shop.bread.length;
    let origionalCustArray = customer.bread.length;
    console.log("The shop starts with" + origionalShopArray + "loaves of bread");





    //setting price 
    if (shop.bread.length > 30) {
        shop.breadCost = 1;
    } else if (shop.bread.length <= 20 && shop.bread.length >= 10) {
        shop.breadCost = 5;
    } else if (shop.bread.length <= 9 && shop.bread.length > 0) {
        shop.breadCost = 8;
    } else {
        shop.breadCost = 10;
    }


    for (i = answer; i > 0; i--) {
        { //not worrying about customer money 
            console.log(`customer wants to sell ${answer}`)
            console.log(i + "is i")
            answer--
            customer.bread.pop("bread");
            shop.moneyTotal -= shop.breadCost;
            customer.moneyTotal += shop.breadCost;
            shop.bread.push("bread");
            console.log(`customer wants ${answer} more`)
            console.log(`we have ${shop.bread.length} left you can buy more`)
            console.log(`you have ${customer.moneyTotal} which is enough money to buy more`)

            if (shop.bread.length < 1) {
                console.log(`we have ${shop.bread.length} loaves of bread left`)
            } else if (customer.moneyTotal < 1) {
                console.log(`you have ${customer.moneyTotal} that is not enough to buy a item worth ${shop.breadCost}`)
            }



        }
    } console.log(`the shop started with ${origionalShopArray} loaves of bread and now has - `)
    console.log(shop.bread.length + "new length");
    console.log(shop.bread.length - origionalShopArray + " this is the change");
    console.log(`the customer started with ${origionalCustArray} loaves of bread and now has - `)
    console.log(customer.bread.length - origionalCustArray)
    console.log(`the shop has gained ${shop.moneyTotal} coins`);
    console.log(`the customer started with ${customerMoney} spent ${shop.moneyTotal} and now has ${customer.moneyTotal}`)



}










// // console.log(customer.buybread());