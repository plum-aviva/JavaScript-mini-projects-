// the last iteration enabled all prices on all objects in all villages - this version only requires price
// in current village to display 
// introduce movement function - 




// first create all the classes (shops, items -with stock and prices )
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
        this.shopSellPrice;
        this.stock = 0;
        this.produceLocation = 2;
        this.shopBuyPrice = 0;
        this.productName = "apple";

    }
}

class Pie {
    constructor() {
        this.shopSellPrice = 20;
        this.stock = 0;
        this.produceLocation = 3;
        this.shopBuyPrice = 0;
        this.productName = "pie";
    }
}

class Chocolate {
    constructor() {
        this.shopSellPrice = 20;
        this.stock = 0;
        this.produceLocation = 4;
        this.shopBuyPrice = 0;
        this.productName = "chocolate";
    }
}

class Beans {
    constructor() {
        this.shopSellPrice = 20;
        this.stock = 0;
        this.produceLocation = 5;
        this.shopBuyPrice = 0;
        this.productName = "beans";
    }
}

const customer = new Trading("Customer");
let customerMoney = customer.moneyTotal = 200000;
customer.bread.stock = 20;
customer.apple.stock = 20;
customer.pie.stock = 20;
customer.chocolate.stock = 20;
customer.beans.stock = 20;


let shopBread = new Trading("shopBread");
shopBread.shopID = 1;
shopBread.bread.stock = 100;
shopBread.apple.stock = 5;
shopBread.beans.stock = 5;
shopBread.chocolate.stock = 5;
shopBread.pie.stock = 5;
shopBread.name = "Bread shop";
shopBread.moneyTotal = 1000000;

let shopApple = new Trading("shopApple");
shopApple.shopID = 2;
shopApple.apple.stock = 100;
shopApple.bread.stock = 5;
shopApple.beans.stock = 5;
shopApple.chocolate.stock = 5;
shopApple.pie.stock = 5;
shopApple.name = "Apple shop";
shopApple.moneyTotal = 10000000;

let shopPie = new Trading("shopPie");
shopPie.shopID = 3;
shopPie.pie.stock = 100;
shopPie.bread.stock = 5;
shopPie.apple.stock = 50;
shopPie.beans.stock = 5;
shopPie.chocolate.stock = 5;
shopPie.name = "Pie shop";
shopPie.moneyTotal = 10000000;


let shopChocolate = new Trading("shopChocolate");
shopChocolate.shopID = 4;
shopChocolate.chocolate.stock = 100;
shopChocolate.bread.stock = 5;
shopChocolate.apple.stock = 5;
shopChocolate.beans.stock = 5;
shopChocolate.pie.stock = 5;
shopChocolate.name = "Chocolate shop"
shopChocolate.moneyTotal = 1000000000;

let shopBeans = new Trading("shopBeans");
shopBeans.shopID = 5;
shopBeans.beans.stock = 100;
shopBeans.bread.stock = 5;
shopBeans.apple.stock = 5;
shopBeans.chocolate.stock = 5;
shopBeans.pie.stock = 50;
shopBeans.name = "Bean shop"
shopBeans.moneyTotal = 100000000000;

// function to set prices 

function itemPrices() {
    // variables for price comparison 


    let product = ['bread', 'apple', 'pie', 'chocolate', 'beans'];
    let shop = [shopApple, shopBeans, shopBread, shopChocolate, shopPie]
    // let origionalStock = shop[product].stock;
    let customerLocation = shopPie;


    for (let i = 0; i < shop.length; i++) {
        for (let j = 0; j < product.length; j++) {

            //setting price to stock based on quantity available 
            if (shop[i][product[j]].stock > 20) {
                shop[i][product[j]].shopSellPrice = 5;
                shop[i][product[j]].shopBuyPrice = 1;
            } else if (shop[i][product[j]].stock <= 20 && shop[i][product[j]].stock >= 10) {
                shop[i][product[j]].shopSellPrice = 8;
                shop[i][product[j]].shopBuyPrice = 5;
            } else if (shop[i][product[j]].stock <= 9 && shop[i][product[j]].stock > 0) {
                shop[i][product[j]].shopSellPrice = 10;
                shop[i][product[j]].shopBuyPrice = 8;
            } else {
                shop[i][product[j]].shopSellPrice = "we have no stock - we cannot sell";
                shop[i][product[j]].shopBuyPrice = 10;
            }

            //setting price based on manufacture location 
            let distance = Math.abs(shop[i][product[j]].produceLocation - shop[i].shopID)

            if (shop[i][product[j]].stock > 0) {
                shop[i][product[j]].shopSellPrice = shop[i][product[j]].shopSellPrice + distance * 2;
            }
            else { }
            shop[i][product[j]].shopBuyPrice = shop[i][product[j]].shopBuyPrice + distance * 2;






            if (shop[i] === customerLocation) {



                console.log("**************************************************")

                let ranNumber = Math.floor(Math.random() * 100);
                console.log("A random event might impact price");
                console.log(ranNumber);

                switch (ranNumber) {
                    case 1:
                        console.log("you find 50 coins");
                        customer.moneyTotal = customer.moneyTotal + 50;
                        break;
                    case 10:
                        console.log("There is a shortage of " + shop[i][product[j]].productName + " prices will go up!");
                        shop[i][product[j]].shopBuyPrice = shop[i][product[j]].shopBuyPrice * 10;
                        break;
                    case 15:
                        console.log("There is so much " + shop[i][product[j]].productName + " and  prices will go down to 1 coin")
                        shop[i][product[j]].shopBuyPrice = 1;
                        shop[i][product[j]].shopSellPrice = 1;
                        break;
                    case 20:
                        console.log(shop[i][product[j]].productName + "  stocks go up by 100")
                        shop[i][product[j]].stock = shop[i][product[j]].stock + 100;
                        break;
                    default:
                        console.log("no random happening this time");
                        break;

                }

                console.log(customerLocation.name + " has : " + customerLocation[product[j]].stock + " " + customerLocation[product[j]].productName);
                console.log(customerLocation.name + " Will buy " + customerLocation[product[j]].productName + " for: " + customerLocation[product[j]].shopBuyPrice);
                console.log(customerLocation.name + " Will sell " + customerLocation[product[j]].productName + " for: " + customerLocation[product[j]].shopSellPrice);
                console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
            } else { }
        }
    }

}

// console.log(itemPrices())

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


    itemPrices();


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
// console.log(customer.buygoods(3, "chocolate", shopPie));


customer.sellgoods = function (answer, product, shop) {
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
        shop[product].price = 25;
    }


    itemPrices();


    // if customer is selling stock they have   - it will be assumed that shops have enough money 
    if (customer[product].stock >= answer) {

        console.log(` you have enough stock to sell that much  `)
        console.log(` selling ${answer} ${product}  at ${shop[product].price} will make ` + shop[product].price * answer)
        shop[product].stock = shop[product].stock + answer;
        customer[product].stock = customer[product].stock - answer;
        customer.moneyTotal = shop[product].price * answer;
        shop.moneyTotal = shop.moneyTotal - customer.moneyTotal;
        // what if customer either asks for more than shop has or doesn't have enough money 


    } else if (answer > customer[product].stock & customer[product].stock > 0) {
        console.log(`you have ${shop[product].stock} available - you can't sell us ${answer}`)
        let totalAvailable = customer[product].stock * shop[product].price;
        console.log(`you can sell us ${customer[product].stock} ${product} maximum `)
        shop[product].stock = shop[product].stock + totalAvailable;
        customer[product].stock = customer[product].stock - totalAvailable;
        customer.moneyTotal = shop[product].price * customer[product].stock;
        shop.moneyTotal = shop.moneyTotal - customer.moneyTotal;


    } else if (customer[product].stock < 1) {

        console.log(`you have ${customer[product].stock} ${product} you have none to sell`)
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
    console.log(shop[product].stock - origionalStock + " " + product + " = " + customer.moneyTotal)
    console.log(`the shop started with ${origShopMoney} and now has ${shop.moneyTotal} coins`);
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
    console.log(`the customer started with ${origCustMoney} gained ${customer.moneyTotal}  and now has ${origCustMoney + customer.moneyTotal} `)
    console.log(`for each ${product} the customer paid ${shop[product].price}`)
}



// test 1 - the customer has enough for the whole order
// console.log(customer.buygoods(3, "chocolate", shopPie));
console.log(customer.sellgoods(15, "pie", shopPie));








