// creating a product variable so multiple products can be used 

let shop = "shop1"

class Trading {
    constructor(trader) {
        this.apple = new Apple()
        this.bread = new Bread()
        this.trader = trader;
        this.moneyTotal = 0;



    }
}

class Bread {
    constructor() {
        this.price = 20;
        this.stock = 5;
        this.producLocation = 1;
    }
}

class Apple {
    constructor() {
        this.price = 20;
        this.stock = 40;
        this.produceLocation = 2;
    }
}



const customer = new Trading("Customer");
let customerMoney = customer.moneyTotal = 20;
customer.bread.stock = 5;


shop = new Trading("shop1")
shop.bread.stock = 10;
shop.apple.stock = 2;

let origionalBreadStock = shop.bread.stock;
let origionalCustBreadStock = customer.bread.stock;
let origCustMoney = customer.moneyTotal;
let origShopMoney = shop.moneyTotal;




customer.buybread = function (answer) {
    customer.moneyTotal = 50;


    // when customer has the money and the shop has the stock 
    if (shop.bread.stock >= answer && customer.moneyTotal >= shop.bread.price * answer) {

        console.log(`we can do the whole order - `)
        console.log(` ${answer} loaves of bread at ${shop.bread.price} will be ` + shop.bread.price * answer)
        customer.bread.stock = customer.bread.stock + answer;
        shop.bread.stock = shop.bread.stock - answer;
        shop.moneyTotal = shop.bread.price * answer;
        customer.moneyTotal = customer.moneyTotal - shop.moneyTotal;


        // when the customer hasn't got enough money to buy the whole order - but can buy at least 1 
    } else if (customer.moneyTotal < shop.bread.price * answer && customer.moneyTotal >= shop.bread.price && shop.bread.stock >= answer) {
        let totalSold = Math.floor(customer.moneyTotal / shop.bread.price);
        console.log(`you can afford ${totalSold}`)
        customer.bread.stock = customer.bread.stock + totalSold;
        shop.bread.stock = shop.bread.stock - totalSold;
        shop.moneyTotal = shop.bread.price * totalSold;
        customer.moneyTotal = customer.moneyTotal - shop.moneyTotal;

        //when the shop hasn't got enough stock - but the customer can afford at least 1 
    } else if (answer > shop.bread.stock && customer.moneyTotal > shop.bread.price) {
        console.log(`we have ${shop.bread.stock} available - you have asked for ${answer}`)
        let totalAvailable = shop.bread.stock * shop.bread.price;
        console.log(`you can have ${shop.bread.stock} loaves of bread`)
        customer.bread.stock = customer.bread.stock + totalAvailable;
        shop.bread.stock = shop.bread.stock - totalAvailable;
        shop.moneyTotal = shop.bread.price * shop.bread.stock;
        customer.moneyTotal = customer.moneyTotal - shop.moneyTotal;

        // if the customer cannot afford one 
    } else if (customer.moneyTotal < shop.bread.price) {

        console.log(`you have ${customer.moneyTotal} that is not enough to buy a item worth ${shop.bread.price}`)
    }
}


//     console.log("transaction summary: ")
//     console.log("---------------------")
//     console.log("Shop trans action summary:")
//     console.log("********************")
//     console.log("Shop stock")
//     console.log("********************")
//     console.log(`The shop started with ${origionalBreadStock} loaves of bread and now has ${shop.bread.stock} loaves left`);
//     console.log(shop.bread.stock - origionalBreadStock + " this is the change");
//     console.log("********************")
//     console.log("Shop finances")
//     console.log("********************")
//     console.log(`each loaf costs ${shop.bread.price}`)
//     console.log(`the shop started with ${origShopMoney} has gained ${shop.moneyTotal} coins`);
//     console.log("---------------------")
//     console.log("Customer transaction summary")
//     console.log("********************")
//     console.log("Stock")
//     console.log("********************")
//     console.log(`The customer wanted to buy ${answer} bread`)
//     console.log(`the customer started with ${origionalCustBreadStock} loaves of bread and now has - ${customer.bread.stock}`)
//     console.log("********************")
//     console.log(`Customer finances`)
//     console.log("********************")
//     console.log(`the customer started with ${origCustMoney} spent ${shop.moneyTotal} and now has ${customer.moneyTotal}`)
//     console.log(`for each loaf the customer paid ${shop.bread.price}`)
// }



// test 1 - the customer has enough for the whole order
console.log(customer.buybread(5));



