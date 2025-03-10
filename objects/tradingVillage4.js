// creating a product variable so multiple products can be used 


class Trading {
    constructor(trader) {
        this.bread = new Bread()
        this.apple = new Apple()
        this.pie = new Pie()
        this.chocolate = new Chocolate()
        this.beans = new Beans()
        this.trader = trader;
        this.moneyTotal = 0;
        this.shopID = 0;



    }
}

class Bread {
    constructor() {
        this.shopSellPrice = 20;
        this.stock = 0;
        this.produceLocation = 1;
        this.shopBuyPrice = 0;
        this.productName = "bread";
    }
}

class Apple {
    constructor() {
        this.shopSellPrice = 20;
        this.stock = 1;
        this.produceLocation = 2;
        this.shopBuyPrice = 0;
        this.productName = "apple";

    }
}

class Pie {
    constructor() {
        this.shopSellPrice = 20;
        this.stock = 3;
        this.produceLocation = 3;
        this.shopBuyPrice = 0;
        this.productName = "pie";
    }
}

class Chocolate {
    constructor() {
        this.shopSellPrice = 20;
        this.stock = 2;
        this.produceLocation = 4;
        this.shopBuyPrice = 0;
        this.productName = "chocolate";
    }
}

class Beans {
    constructor() {
        this.shopSellPrice = 20;
        this.stock = 1;
        this.produceLocation = 5;
        this.shopBuyPrice = 0;
        this.productName = "beans";
    }
}

const customer = new Trading("Customer");
let customerMoney = customer.moneyTotal = 200;
customer.bread.stock = 0;
customer.apple.stock = 0;
customer.pie.stock = 0;
customer.chocolate.stock = 0;
customer.beans.stock = 0;


let shopBread = new Trading("shopBread");
shopBread.shopID = 1;
shopBread.bread.stock = 100;
shopBread.name = "Bread shop";

let shopApple = new Trading("shopApple");
shopApple.shopID = 2;
shopApple.apple.stock = 100;
shopApple.name = "Apple shop";

let shopPie = new Trading("shopPie");
shopPie.shopID = 3;
shopPie.pie.stock = 100;
shopPie.name = "Pie shop";


let shopChocolate = new Trading("shopChocolate");
shopChocolate.shopID = 4;
shopChocolate.chocolate.stock = 100;
shopChocolate.name = "Chocolate shop"

let shopBeans = new Trading("shopBeans");
shopBeans.shopID = 5;
shopBeans.beans.stock = 100;
shopBeans.name = "Bean shop"



try {

    // // answer refers to quantity required 
    customer.buygoods = function (answer, product, shop) {
        let origionalStock = shop[product].stock;
        let origionalCustStock = customer[product].stock;
        let origCustMoney = customer.moneyTotal;
        let origShopMoney = shop.moneyTotal;


        //setting price to stock 
        if (shop[product].stock > 20) {
            shop[product].price = 5;
        } else if (shop[product].stock <= 20 && shop[product].stock >= 10) {
            shop[product].price = 8;
        } else if (shop[product].stock <= 9 && shop[product].stock > 0) {
            shop[product].price = 10;
        } else {
            shop[product].price = "we have no stock - we cannot sell";
        }





        // if customer asks for less than stock and has enough money for everything // console.log message? 
        if (shop[product].stock >= answer && customer.moneyTotal >= shop[product].price * answer) {

            console.log(`we can do the whole order - `)
            console.log(` ${answer} ${product}  at ${shop[product].price} will be ` + shop[product].price * answer)
            customer[product].stock = customer[product].stock + answer;
            shop[product].stock = shop[product].stock - answer;
            shop.moneyTotal = shop[product].price * answer;
            customer.moneyTotal = customer.moneyTotal - shop.moneyTotal;
            // what if customer either asks for more than shop has or doesn't have enough money 


        } else if (customer.moneyTotal < shop[product].price * answer && customer.moneyTotal >= shop[product].price && shop[product].stock >= answer) {
            let totalSold = Math.floor(customer.moneyTotal / shop[product].price);
            console.log(`you can afford ${totalSold}`)
            customer[product].stock = customer[product].stock + totalSold;
            shop[product].stock = shop[product].stock - totalSold;
            shop.moneyTotal = shop[product].price * totalSold;
            customer.moneyTotal = customer.moneyTotal - shop.moneyTotal;

        } else if (answer > shop[product].stock && customer.moneyTotal > shop[product].price) {
            console.log(`we have ${shop[product].stock} available - you have asked for ${answer}`)
            let totalAvailable = shop[product].stock * shop[product].price;
            console.log(`you can have ${shop[product].stock} ${product} `)
            customer[product].stock = customer[product].stock + totalAvailable;
            shop[product].stock = shop[product].stock - totalAvailable;
            shop.moneyTotal = shop[product].price * shop[product].stock;
            customer.moneyTotal = customer.moneyTotal - shop.moneyTotal;


        } else if (customer.moneyTotal < shop[product].price) {

            console.log(`you have ${customer.moneyTotal} that is not enough to buy a item worth ${shop[product].price}`)
        }


        console.log("transaction summary: ")
        console.log("---------------------")
        console.log("Shop transaction summary:")
        console.log("********************")
        console.log("Shop stock")
        console.log("********************")
        console.log(`The shop started with ${origionalStock} ${product}  and now has ${shop[product].stock} ${product} left`);
        console.log(shop[product].stock - origionalStock + " this is the change");
        console.log("********************")
        console.log("Shop finances")
        console.log("********************")
        console.log(`each ${product} costs ${shop[product].price}`)
        console.log(`the shop started with ${origShopMoney} has gained ${shop.moneyTotal} coins`);
        console.log("---------------------")
        console.log("Customer transaction summary")
        console.log("********************")
        console.log("Stock")
        console.log("********************")
        console.log(`The customer wanted to buy ${answer} ${product}`)
        console.log(`the customer started with ${origionalCustStock} ${product}  and now has  ${customer[product].stock}`)
        console.log("********************")
        console.log(`Customer finances`)
        console.log("********************")
        console.log(`the customer started with ${origCustMoney} spent ${shop.moneyTotal} and now has ${customer.moneyTotal}`)
        console.log(`for each ${product} the customer paid ${shop[product].price}`)
    }



    // test 1 - the customer has enough for the whole order
    console.log(customer.buygoods(3, "bread", shopChocolate));
}
catch (err) {
    console.log(`please enter a quantity followed by available product in one of the shops`)
}


// customer.sellbread = function (answer) {

//     // how much bread is wanted
//     let origionalShopArray = shop.bread.length;
//     let origionalCustArray = customer.bread.length;
//     console.log("The shop starts with" + origionalShopArray + "${product} ");





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
//                 console.log(`we have ${shop.bread.length} ${product}  left`)
//             } else if (customer.moneyTotal < 1) {
//                 console.log(`you have ${customer.moneyTotal} that is not enough to buy a item worth ${shop.breadCost}`)
//             }



//         }
//     } console.log(`the shop started with ${origionalShopArray} ${product}  and now has - `)
//     console.log(shop.bread.length + "new length");
//     console.log(shop.bread.length - origionalShopArray + " this is the change");
//     console.log(`the customer started with ${origionalCustArray} ${product}  and now has - `)
//     console.log(customer.bread.length - origionalCustArray)
//     console.log(`the shop has gained ${shop.moneyTotal} coins`);
//     console.log(`the customer started with ${customerMoney} spent ${shop.moneyTotal} and now has ${customer.moneyTotal}`)



// }









// console.log(customer.buybread(20));
// // // console.log(customer.buybread());