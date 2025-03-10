// this version will use numbers rather than push or pop - 
// do conditions properly (e.g. if customer has not enough money or shop has no stock)

let shop = "shop1"

class Trading {
    constructor(trader) {
        this.trader = trader;
        this.bread = 0;
        this.apple = 0;
        this.moneyTotal = 0;
        this.appleCost = 1;
        this.breadCost = 1;


    }
}

const customer = new Trading("Customer");
let customerMoney = customer.moneyTotal = 1000;
shop.bread = 0;

shop = new Trading("shop1")
shop.bread = 30;
let origionalBreadStock = shop.bread;
let origionalCustBreadStock = customer.bread;
let origCustMoney = customer.moneyTotal;
let origShopMoney = shop.moneyTotal;


// answer refers to quantity required 
customer.buybread = function (answer) {

    // how much bread is wanted

    // console.log("The shop starts with " + shop.bread + " loaves of bread");
    // console.log("The customer asked for " + answer + " loaves of bread");

    //setting price 
    if (shop.bread > 20) {
        shop.breadCost = 5;
    } else if (shop.bread <= 20 && shop.bread >= 10) {
        shop.breadCost = 8;
    } else if (shop.bread <= 9 && shop.bread > 0) {
        shop.breadCost = 10;
    } else {
        shop.breadCost = "not for sale";
    }

    if (shop.bread > answer && customer.moneyTotal > shop.breadCost) {
        // do conditions

        //not worrying about customer money 
        customer.bread = customer.bread + answer;
        shop.bread = shop.bread - answer;
        shop.moneyTotal = shop.breadCost * answer;
        customer.moneyTotal = customer.moneyTotal - shop.moneyTotal;


    }
    else {
        if (shop.bread < 1) {
            console.log(`we have ${shop.bread} loaves of bread left`)
        } else if (customer.moneyTotal < 1) {
            console.log(`you have ${customer.moneyTotal} that is not enough to buy a item worth ${shop.breadCost}`)
        }
    }
    console.log("transaction summary: ")
    console.log("---------------------")
    console.log("Shop trans action summary:")
    console.log("********************")
    console.log("Shop stock")
    console.log("********************")
    console.log(`The shop started with ${origionalBreadStock} loaves of bread and now has - ${shop.bread} loaves left`);
    console.log(shop.bread - origionalBreadStock + " this is the change");
    console.log("********************")
    console.log("Shop finances")
    console.log("********************")
    console.log(`each loaf costs ${shop.breadCost}`)
    console.log(`the shop started with ${origShopMoney} has gained ${shop.moneyTotal} coins`);
    console.log("---------------------")
    console.log("Customer transaction summary")
    console.log("********************")
    console.log("Stock")
    console.log("********************")
    console.log(`The customer wanted to buy ${answer} bread`)
    console.log(`the customer started with ${origionalCustBreadStock} loaves of bread and now has - ${customer.bread}`)
    console.log("********************")
    console.log(`Customer finances`)
    console.log("********************")
    console.log(`the customer started with ${origCustMoney} spent ${shop.moneyTotal} and now has ${customer.moneyTotal}`)
    console.log(`for each loaf the customer paid ${shop.breadCost}`)

}

console.log(customer.buybread(15));
console.log(customer.buybread(10));
// // console.log(customer.buybread());

// customer.sellbread = function (answer) {

//     // how much bread is wanted
//     let origionalShopArray = shop.bread.length;
//     let origionalCustArray = customer.bread.length;
//     console.log("The shop starts with" + origionalShopArray + "loaves of bread");





//     //setting price 
//     if (shop.bread.length > 30) {
//         shop.breadCost = 1;
//     } else if (shop.bread.length <= 20 && shop.bread.length >= 10) {
//         shop.breadCost = 5;
//     } else if (shop.bread.length <= 9 && shop.bread.length > 0) {
//         shop.breadCost = 8;
//     } else {
//         shop.breadCost = 10;
//     }


//     for (i = answer; i > 0; i--) {
//         { //not worrying about customer money 
//             console.log(`customer wants to sell ${answer}`)
//             console.log(i + "is i")
//             answer--
//             customer.bread.pop("bread");
//             shop.moneyTotal -= shop.breadCost;
//             customer.moneyTotal += shop.breadCost;
//             shop.bread.push("bread");
//             console.log(`customer wants ${answer} more`)
//             console.log(`we have ${shop.bread.length} left you can buy more`)
//             console.log(`you have ${customer.moneyTotal} which is enough money to buy more`)

//             if (shop.bread.length < 1) {
//                 console.log(`we have ${shop.bread.length} loaves of bread left`)
//             } else if (customer.moneyTotal < 1) {
//                 console.log(`you have ${customer.moneyTotal} that is not enough to buy a item worth ${shop.breadCost}`)
//             }



//         }
//     } console.log(`the shop started with ${origionalShopArray} loaves of bread and now has - `)
//     console.log(shop.bread.length + "new length");
//     console.log(shop.bread.length - origionalShopArray + " this is the change");
//     console.log(`the customer started with ${origionalCustArray} loaves of bread and now has - `)
//     console.log(customer.bread.length - origionalCustArray)
//     console.log(`the shop has gained ${shop.moneyTotal} coins`);
//     console.log(`the customer started with ${customerMoney} spent ${shop.moneyTotal} and now has ${customer.moneyTotal}`)



// }









// console.log(customer.buybread(20));
// // // console.log(customer.buybread());