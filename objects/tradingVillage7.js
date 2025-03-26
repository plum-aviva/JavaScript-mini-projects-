// the aims of this village is to recreate the functionality of the previous code but using two classes (person and products) as the basis for the 
// player1 and shop / and the different products respectively 
// the other aim is to make functions only do one thing - so create functions to be called within functions 

// create the person class 
class Person {
    products
    money
    id
    constructor(type, name, products, money, id) {
        this.type = type
        this.name = name
        this.products = products
        this.money = money
        this.id = id
    }
}

// create the product class
class Product {
    productId
    name
    sellPrice
    buyPrice
    quantity
    constructor(productId, sellPrice, buyPrice, quantity, name) {
        this.productId = productId
        this.sellPrice = sellPrice
        this.buyPrice = buyPrice
        this.quantity = quantity
        this.name = name
    }
}



// creates the stock items 
let apple = new Product(1, 0, 20, 15, "apple");
let banana = new Product(2, 0, 15, 10, "banana");
let lemon = new Product(3, 0, 10, 5, "lemon");
let mango = new Product(4, 0, 6, 3, "mango");
let kiwi = new Product(5, 0, 50, 25, "kiwi");

// creates the stock storage for player / shops 
let sukantProducts = []
let alsoAppleStock = []
let laterallyLemonStock = []
let basedOnBananaStock = []
let mainlyMangoStock = []
let concurrentlyKiwiStock = []

// creates player 1
const player1 = new Person("customer", "Sukant", sukantProducts, 40, 0)

// function to set up the shop 
function setupShop(shopProducts, shopName, money, id, mainProduct) {
    return new Person("shop", shopName, shopProducts, money, id, mainProduct)
}

// uses functions to set up the shops
const alsoApplesShop = setupShop(alsoAppleStock, "Also Apples Shop", 1000000, 1, "apples")
const basedOnBananaShop = setupShop(basedOnBananaStock, "Based On Banana Shop", 10000000, 2, "banana")
const laterallyLemonShop = setupShop(laterallyLemonStock, "Laterally Lemon Shop", 10000000, 3, "lemon")
const mainlyMangoShop = setupShop(mainlyMangoStock, "Mainly Mango Shop", 10000000, 4, "mango")
const concurrentlyKiwiShop = setupShop(concurrentlyKiwiStock, "Concurrently Kiwi Shop", 10000000, 5, "kiwi")

// creates arrays of shop and product names
let products = [apple, banana, lemon, mango, kiwi]
let shops = [alsoApplesShop, basedOnBananaShop, laterallyLemonShop, mainlyMangoShop, concurrentlyKiwiShop]

// function to push products into the stock variables 
function pushProducts(shopProducts) {
    let products = [apple, banana, lemon, mango, kiwi]

    for (let i = 0; i <= products.length; i++) {
        shopProducts.push(products[i])
    } return shopProducts
}

// stocking the players and shops with products 
pushProducts(sukantProducts)
pushProducts(alsoAppleStock)
pushProducts(basedOnBananaStock)
pushProducts(laterallyLemonStock)
pushProducts(mainlyMangoStock)
pushProducts(concurrentlyKiwiStock)



// can I access things
// console.log(player1)
// console.log(player1.products[0].name)
// console.log(mainlyMangoShop.products[2].quantity)
// console.log(apple.quantity)

// setting prices 
// 1 - price according to stock  

function priceToStockQuantity() {
    for (let i = 0; i < shops.length; i++) {
        for (let j = 0; j < products.length; j++) {

            if (shops[i].products[j].quantity > 19) {
                shops[i].products[j].sellPrice = 5
                shops[i].products[j].buyPrice = shops[i].products[j].sellPrice - 2;
            } else if (shops[i].products[j].quantity > 15) {
                shops[i].products[j].sellPrice = 10
                shops[i].products[j].buyPrice = shops[i].products[j].sellPrice - 2;
            } else if (shops[i].products[j].quantity > 10) {
                shops[i].products[j].sellPrice = 15
                shops[i].products[j].buyPrice = shops[i].products[j].sellPrice - 2;
            } else if (shops[i].products[j].quantity > 5) {
                shops[i].products[j].sellPrice = 25
                shops[i].products[j].buyPrice = shops[i].products[j].sellPrice - 2;
            } else if (shops[i].products[j].quantity >= 1) {
                shops[i].products[j].sellPrice = 30
                shops[i].products[j].buyPrice = shops[i].products[j].sellPrice - 2;
            } else if (shops[i].products[j].quantity < 1) {
                shops[i].products[j].buyPrice = 40;
                return "no sale we can only buy"
            }

            // console.log(`${shops[i].name} sells ${shops[i].products[j].name} for ${shops[i].products[j].sellPrice}`)
            // console.log(`${shops[i].name} sells ${shops[i].products[j].name} for ${shops[i].products[j].buyPrice}`)


        }
    } return "sale possible"
}

// console.log(priceToStockQuantity())

function priceToDistance() {


    for (let i = 0; i < shops.length; i++) {

        for (let j = 0; j < products.length; j++) {

            let distance = Math.abs(shops[i].id - products[j].productId)
            priceToStockQuantity();
            if (distance === 0) {
                shops[i].products[j].buyPrice--;
                // console.log(`${shops[i].name} sells ${shops[i].products[j].name} for ${shops[i].products[j].sellPrice} distance was ${distance}`)
                // console.log(`${shops[i].name} buys ${shops[i].products[j].name} for ${shops[i].products[j].buyPrice} distance was ${distance}`)

                // console.log("price has not changed")
            } else {
                shops[i].products[j].buyPrice += distance;
                shops[i].products[j].sellPrice += (distance * 2);


                // console.log(`${shops[i].name} sells ${shops[i].products[j].name} for ${shops[i].products[j].sellPrice} distance was ${distance}`)
                // console.log(`${shops[i].name} buys ${shops[i].products[j].name} for ${shops[i].products[j].buyPrice} distance was ${distance}`)

            }
        }
    } return "price changed"
}
// priceToDistance();

// function for random event 
function randomEvent(ranNumber) {

    for (let i = 0; i < shops.length; i++) {

        for (let j = 0; j < products.length; j++) {
            // console.log(priceToStockQuantity());
            // console.log(priceToDistance());

            // let ranNumber = Math.floor(Math.random() * 100);
            // console.log("A random event might impact price");
            // console.log(ranNumber);

            switch (ranNumber) {
                case 1:
                    console.log("you find 50 coins");
                    player1.money = player1.money + 50;
                    break;
                case 10:
                    console.log("There is a shortage of " + shops[i].products[j].name + " prices will go up!");
                    shops[i].products[j].shopBuyPrice = shops[i].products[j].shopBuyPrice * 10;
                    break;
                case 15:
                    console.log("There is so much " + shops[i].products[j].name + " and  prices will go down to 1 coin")
                    shops[i].products[j].shopBuyPrice = 1;
                    shops[i].products[j].shopSellPrice = 1;
                    break;
                case 20:
                    console.log(shops[i].products[j].name + "  stocks go up by 100")
                    shops[i].products[j].stock = shops[i].products[j].stock + 100;
                    break;
                default:
                    console.log("no random happening this time");
                    break;

            }console.log(`${shops[i].name} sells ${shops[i].products[j].name} for ${shops[i].products[j].sellPrice} `)
            console.log(`${shops[i].name} buys ${shops[i].products[j].name} for ${shops[i].products[j].buyPrice} `)
        }

    } return "random events change prices sometimes"
}
// console.log(randomEvent(20))

// so now I have the code to create a price I need to create the transaction 
// the above could generate an offer price 
// at the moment this function sells but I want it to just create the offer 
// make a new function called offer 
// this function will be able to show particular price for particular items 


function playerBuysStuff(numberRequired, productRequired, shopLocation) {


    priceToDistance();

    //A search showed me that the find() method can help me look through the shops product array - I was able to access the other bits but not the stock for the 
    // selected product 

    const productOrdered = shopLocation.products.find(p => p.name === productRequired);
    let totalSold = Math.floor(player1.money / productOrdered.sellPrice);

    // if customer asks for less than stock and has enough money for everything // console.log message? 
    if (productOrdered.quantity >= numberRequired && player1.money >= productOrdered.sellPrice * numberRequired) {

        return ` we can do this order ${numberRequired} ${productRequired}  at ${productOrdered.sellPrice} coins each will be ` + productOrdered.sellPrice * numberRequired

        // what if customer either asks for more than shop has or doesn't have enough money 

    } else if (player1.money < productOrdered.sellPrice * numberRequired && player1.money >= productOrdered.sellPrice && productOrdered.quantity >= numberRequired) {

        return `you don't have enough for the whole order -  you can afford ${totalSold} ${productRequired} for ${totalSold * productOrdered.sellPrice}`

    } else if (numberRequired > productOrdered.quantity && player1.money > productOrdered.sellPrice * productOrdered.quantity) {
        let totalAvailable = productOrdered.quantity * productOrdered.sellPrice;
        return `we don't have ${numberRequired} ${productOrdered.name} in stock 
        you can have all we have which is ${productOrdered.quantity} ${productRequired} for ${totalAvailable} `

    } else if (numberRequired > productOrdered.quantity && player1.money < productOrdered.quantity * productOrdered.sellPrice) {
        return `we have ${productOrdered.quantity} ${productRequired} - this would cost ${productOrdered.quantity * productOrdered.sellPrice} 
        but you have ${player1.money} so you can have ${totalSold} ${productRequired}`
    } else if (player1.money < productOrdered.sellPrice) {

        return `you have ${player1.money} that is not enough to buy a ${productRequired} worth ${productOrdered.sellPrice}`
    }

    return "would you like to go ahead with the offer?"
}


//  playerBuysStuff(4, "banana", alsoApplesShop)

function playerSellsStuff(numberRequired, productRequired, shopLocation) {
    priceToDistance();
    const productShopBuy = shopLocation.products.find(p => p.name === productRequired);
    const productPlayerSell = player1.products.find(s => s.name === productRequired);

    //I'm going to assume the shop will always have enough money 
    // the number a player tries to sell needs to be equal to or lower than their stock 

    if (productPlayerSell.quantity >= numberRequired) {
        return `we will buy what you offer ${numberRequired} ${productRequired} for ${productShopBuy.buyPrice} each - which totals ${productShopBuy.buyPrice * numberRequired}`
    } else (productPlayerSell.quantity < numberRequired)
    return `you have ${productPlayerSell.quantity} - we will buy ${productRequired} for ${productShopBuy.buyPrice} each - which totals ${productShopBuy.buyPrice * numberRequired} `
}


console.log(playerSellsStuff(4, "mango", mainlyMangoShop))


function transactionOffer() {

    const playerBuyResult = playerBuysStuff(1, "banana", alsoApplesShop)
    const playerSellResult = playerSellsStuff(1, "mango", mainlyMangoShop)

    return " SELL " + playerBuyResult + "   BUY    " +
        playerSellResult

}

// console.log(transactionOffer());


function finalTransaction() {

    const playerBuyResult = playerBuysStuff(2, "apple", alsoApplesShop)
    const playerSellResult = playerSellsStuff(1, "mango", mainlyMangoShop)


    // const productShop = shopLocation.products.find(p => p.name === productRequired);
    // const productPlayer = player1.products.find(s => s.name === productRequired);
    let playerSells = true;
    let playerBuys = true;

    if (playerSells === true && playerBuys === true) {
        return `${playerSellResult} +
        ${playerBuyResult}
        `
    } else if (playerSells === true && playerBuys === false) {
        return `${playerSellResult}  `
    } else if (playerSells === false && playerBuys === true) {
        return `${playerBuyResult}`
    }





}
console.log(finalTransaction())






//     // if customer asks for less than stock and has enough money for everything // console.log message? 
//     if (shop.products.stock >= numberRequired && player1.money >= shop.products.price * numberRequired) {

//         console.log(`we can do the whole order - `)
//         console.log(` ${numberRequired} ${product}  at ${shop.products.price} will be ` + shop.products.price * numberRequired)
//         player1.products.stock = player1.products.stock + numberRequired;
//         shop.products.stock = shop.products.stock - numberRequired;
//         shop.money = shop.products.price * numberRequired;
//         player1.money = player1.money - shop.money;
//         // what if customer either asks for more than shop has or doesn't have enough money 


//     } else if (player1.money < shop.products.price * numberRequired && player1.money >= shop.products.price && shop.products.stock >= numberRequired) {
//         let totalSold = Math.floor(player1.money / shop.products.price);
//         console.log(`you can afford ${totalSold}`)
//         player1.products.stock = player1.products.stock + totalSold;
//         shop.products.stock = shop.products.stock - totalSold;
//         shop.money = shop.products.price * totalSold;
//         player1.money = player1.money - shop.money;

//     } else if (numberRequired > shop.products.stock && player1.money > shop.products.price) {
//         console.log(`we have ${shop.products.stock} available - you have asked for ${numberRequired}`)
//         let totalAvailable = shop.products.stock * shop.products.price;
//         console.log(`you can have ${shop.products.stock} ${product} `)
//         player1.products.stock = player1.products.stock + totalAvailable;
//         shop.products.stock = shop.products.stock - totalAvailable;
//         shop.money = shop.products.price * shop.products.stock;
//         player1.money = player1.money - shop.money;


//     } else if (player1.money < shop.products.price) {

//         return `you have ${player1.money} that is not enough to buy a item worth ${shop.products.price}`
//     }


//     console.log("transaction summary: ")
//     console.log("---------------------")
//     console.log("Shop transaction summary:")
//     console.log("********************")
//     console.log("Shop stock")
//     console.log("********************")
//     console.log(`The shop started with ${origionalStock} ${product}  and now has ${shop.products.stock} ${product} left`);
//     console.log(shop.products.stock - origionalStock + " this is the change");
//     console.log("********************")
//     console.log("Shop finances")
//     console.log("********************")
//     console.log(`each ${product} costs ${shop.products.price}`)
//     console.log(`the shop started with ${origShopMoney} has gained ${shop.money} coins`);
//     console.log("---------------------")
//     console.log("Customer transaction summary")
//     console.log("********************")
//     console.log("Stock")
//     console.log("********************")
//     console.log(`The customer wanted to buy ${numberRequired} ${product}`)
//     console.log(`the customer started with ${origionalCustStock} ${product}  and now has  ${player1.products.stock}`)
//     console.log("********************")
//     console.log(`Customer finances`)
//     console.log("********************")
//     console.log(`the customer started with ${origCustMoney} spent ${shop.money} and now has ${player1.money}`)
//     console.log(`for each ${product} the customer paid ${shop.products.price}`)
//     return "buy successful"
// }





// // test 1 - the customer has enough for the whole order
// let buyResult = player1.buygoods(3, "mango", mainlyMangoShop)
// console.log(buyResult)





// player1sellgoods = function (numberRequired, product, shop) {
//     let origionalStock = shop.products.stock;
//     let origionalCustStock = player1.products.stock;
//     let origCustMoney = player1money;
//     let origShopMoney = shop.money;

//     //setting price to stock 
//     if (shop.products.stock > 20) {
//         shop.products.price = 5;
//     } else if (shop.products.stock <= 20 && shop.products.stock >= 10) {
//         shop.products.price = 8;
//     } else if (shop.products.stock <= 9 && shop.products.stock > 0) {
//         shop.products.price = 10;
//     } else {
//         shop.products.price = 25;
//     }


//     ///put prices code in here - price to distance works 


//     // if customer is selling stock they have   - it will be assumed that shops have enough money 
//     if (player1.products.stock >= numberRequired) {

//         console.log(` you have enough stock to sell that much  `)
//         console.log(` selling ${numberRequired} ${product}  at ${shop.products.price} will make ` + shop.products.price * numberRequired)
//         shop.products.stock = shop.products.stock + numberRequired;
//         player1.products.stock = player1.products.stock - numberRequired;
//         player1money = shop.products.price * numberRequired;
//         shop.money = shop.money - player1money;
//         // what if customer either asks for more than shop has or doesn't have enough money 


//     } else if (numberRequired > player1.products.stock & player1.products.stock > 0) {
//         console.log(`you have ${shop.products.stock} available - you can't sell us ${numberRequired}`)
//         let totalAvailable = player1.products.stock * shop.products.price;
//         console.log(`you can sell us ${player1.products.stock} ${product} maximum `)
//         shop.products.stock = shop.products.stock + totalAvailable;
//         player1.products.stock = player1.products.stock - totalAvailable;
//         player1.money = shop.products.price * player1.products.stock;
//         shop.money = shop.money - player1.money;


//     } else if (player1.products.stock < 1) {

//         return `you have ${player1.products.stock} ${product} you have none to sell`
//     }


//     console.log("transaction summary: ")
//     console.log("---------------------")
//     console.log("Shop transaction summary:")
//     console.log("********************")
//     console.log("Shop stock")
//     console.log("********************")
//     console.log(`The shop started with ${origionalStock} ${product}  and now has ${shop.products.stock} ${product} left`);
//     console.log(shop.products.stock - origionalStock + " this is the change");
//     console.log("********************")
//     console.log("Shop finances")
//     console.log("********************")
//     console.log(`each ${product} costs ${shop.products.price}`)
//     console.log(shop.products.stock - origionalStock + " " + product + " = " + player1.money) //check this
//     console.log(`the shop started with ${origShopMoney} and now has ${shop.money} coins`);
//     console.log("---------------------")
//     console.log("player1 transaction summary")
//     console.log("********************")
//     console.log("Stock")
//     console.log("********************")
//     console.log(`The player1 wanted to buy ${numberRequired} ${product}`)
//     console.log(`the player1 started with ${origionalCustStock} ${product}  and now has  ${player1.products.stock}`)
//     console.log("********************")
//     console.log(`player1 finances`)
//     console.log("********************")
//     console.log(`the player1 started with ${origCustMoney} gained ${player1.money}  and now has ${origCustMoney + player1.money} `)
//     console.log(`for each ${product} the player1 paid ${shop.products.price}`)
//     return "sale successful"
// }



// // test 1 - the player1 has enough for the whole order
// // console.log(player1.buygoods(3, "chocolate", shopPie));
// console.log(player1.sellgoods(15, "pie", shopChocolate));








