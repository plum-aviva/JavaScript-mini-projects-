
//Parked on 27th March - moving onto AJ's stuff 

// I want objects I can loop through

// the aims of this village is to recreate the functionality of the previous code but using two classes (person and products) as the basis for the
// player1 and shop / and the different products respectively
// the other aim is to make functions only do one thing - so create functions to be called within functions

// create the person class
class Person {
    constructor(type, name, products, money, id) {
        this.type = type;
        this.name = name;
        this.products = products;
        this.money = money;
        this.id = id;
    }
}

// create the product class
class Product {
    constructor(productId, sellPrice, buyPrice, quantity, name) {
        this.productId = productId;
        this.sellPrice = sellPrice;
        this.buyPrice = buyPrice;
        this.quantity = quantity;
        this.name = name;
    }
}

// creates the stock items
let apple = new Product(1, 0, 20, 15, "apple");
let banana = new Product(2, 0, 15, 10, "banana");
let lemon = new Product(3, 0, 10, 5, "lemon");
let mango = new Product(4, 0, 6, 3, "mango");
let kiwi = new Product(5, 0, 50, 25, "kiwi");

// creates the stock storage for player / shops
let sukantProducts = [];
let alsoAppleStock = [];
let laterallyLemonStock = [];
let basedOnBananaStock = [];
let mainlyMangoStock = [];
let concurrentlyKiwiStock = [];

// creates player 1
const player1 = new Person("customer", "Sukant", sukantProducts, 25, 0);

// function to set up the shop
function setupShop(shopName, shopProducts, money, id, mainProduct) {
    return new Person("shop", shopName, shopProducts, money, id, mainProduct);
}

// uses functions to set up the shops
const alsoApplesShop = setupShop(
    "Also Apples Shop",
    alsoAppleStock,
    1000000,
    1,
    "apples",
);
const basedOnBananaShop = setupShop(
    "Based On Banana Shop",
    basedOnBananaStock,
    10000000,
    2,
    "banana",
);
const laterallyLemonShop = setupShop(
    "Laterally Lemon Shop",
    laterallyLemonStock,
    10000000,
    3,
    "lemon",
);
const mainlyMangoShop = setupShop(
    "Mainly Mango Shop",
    mainlyMangoStock,
    10000000,
    4,
    "mango",
);
const concurrentlyKiwiShop = setupShop(
    "Concurrently Kiwi Shop",
    concurrentlyKiwiStock,
    10000000,
    5,
    "kiwi",
);

// creates arrays of shop and product names
// let products = [apple, banana, lemon, mango, kiwi]; Delete if not needed
let shops = [
    alsoApplesShop,
    basedOnBananaShop,
    laterallyLemonShop,
    mainlyMangoShop,
    concurrentlyKiwiShop,
];

// function to push products into the stock variables ????
function pushProducts(shopProducts) {
    let products = [apple, banana, lemon, mango, kiwi];

    for (let i = 0; i < products.length; i++) {
        shopProducts.push(products[i]);
    }
    return shopProducts;
}

// stocking the players and shops with products ?
pushProducts(sukantProducts);
pushProducts(alsoAppleStock);
pushProducts(basedOnBananaStock);
pushProducts(laterallyLemonStock);
pushProducts(mainlyMangoStock);
pushProducts(concurrentlyKiwiStock);

// find the shop
const findShop = function (shopName) {
    return shops.find((shop) => shop.name === shopName);
};

// find the item
const findProduct = function (shopName, productName) {
    const shop = findShop(shopName);
    return shop.products.find((product) => product.name === productName);
};


// set the price the shop will sell for
const setSellPrice = function (shopName, productName) {
    const product = findProduct(shopName, productName);
    const shop = findShop(shopName);

    if (product.quantity > 30) {
        product.sellPrice = product.sellPrice + 5;
    } else if (product.quantity > 15) {
        product.sellPrice = product.sellPrice + 10;
    } else if (product.quantity >= 1) {
        product.sellPrice = product.sellPrice + 15;
    } else {

    }
    let distance = Math.abs(shop.id - product.productId);
    product.sellPrice = product.sellPrice + distance;
    console.log("  This one product.sellPrice is 15 ")
    console.log(product.sellPrice)


    return product.sellPrice;
};
// console.log(setSellPrice("Mainly Mango Shop", "mango"));

// set the price the shop will buy for 
const setBuyPrice = function (shopName, productName) {
    const product = findProduct(shopName, productName);
    const shop = findShop(shopName);

    // let distance = Math.abs(shop.id - product.productId);

    if (product.quantity > 30) {
        product.buyPrice = product.buyPrice + 2;
    } else if (product.quantity > 15) {
        product.buyPrice = product.buyPrice + 5;
    } else if (product.quantity >= 1) {
        product.buyPrice = product.buyPrice + 15;
    } else {
        product.buyPrice = product.buyPrice + 20;
    }

    let distance = Math.abs(shop.id - product.productId);
    product.buyPrice = product.buyPrice + distance;

    return product.buyPrice;
};
// console.log(setBuyPrice("Mainly Mango Shop", "mango"));

// // put in an order // can you only call find product - rework 
const makeOrderShopBuy = function (shopName, productName, orderSize) {
    const shop = findShop(shopName);
    const product = findProduct(shopName, productName);
    const shopBuysPrice = setBuyPrice(shopName, productName);
    const player1find = findShop(player1);
    const player1stock = findProduct(player1, productName)

    let totalBuyPrice = shopBuysPrice * orderSize;

    if (player1find.quantity < orderSize) {
        console.log("you can't sell more than you have")
        console.log(`you can sell a maximum of ${player1stock.quantity}`)
        orderSize = player1stock.quantity;
        totalBuyPrice = player1stock.quantity * shopBuysPrice
    } else {
        totalBuyPrice = shopBuysPrice * orderSize;
    }


    console.log(`you are in ${shop.name}`);
    console.log(`you want to buy ${product.name}`);

    console.log("The shop will buy ")

    return {
        totalBuyPrice: totalBuyPrice,
        orderSize: orderSize
    }

};
// console.log(makeOrderShopBuy("Also Apples Shop", "lemon", 5));

const makeOrderShopSell = function (shopName, productName, orderSize) {
    const shop = findShop(shopName);
    const product = findProduct(shopName, productName);
    const shopSellsPrice = setSellPrice(shopName, productName);

    let productsAffordable = Math.floor(player1.money / shopSellsPrice)


    console.log(`you are in ${shop.name}`);
    console.log(`you want to buy ${product.name}`);
    let totalSellPrice = shopSellsPrice * orderSize

    if (orderSize <= product.quantity && player1.money >= totalSellPrice) {
        totalSellPrice = shopSellsPrice * orderSize
        console.log("The first condition works")
        console.log(totalSellPrice)
        return {
            orderSize: orderSize,
            totalSellPrice: totalSellPrice
        }
    } else if (player1.money < totalSellPrice) {
        console.log("not enough money")
        orderSize = productsAffordable;
        totalSellPrice = shopSellsPrice * orderSize;
        console.log("second condition works ")
    }

    else if (orderSize > product.quantity) {
        console.log("first ordersize")
        console.log("the third condition works")
        console.log(orderSize)
        orderSize = product.quantity
        totalSellPrice = shopSellsPrice * orderSize
        console.log("is this smaller? ")
        console.log(orderSize)
        return {
            orderSize: orderSize,
            totalSellPrice: totalSellPrice
        }
    }






    console.log("the shop will sell - (make order shop sell function)")
    return {
        orderSize: orderSize,
        totalSellPrice: totalSellPrice
    }

};
console.log(makeOrderShopSell("Mainly Mango Shop", "mango", 2));

// next task is to change shop quantity and money according to price and player stock and quantity 

const completeOrderShopSell = function (shopName, productName, orderSize) {

    const shop = findShop(shopName);
    const product = findProduct(shopName, productName);
    const shopSellsPrice = setSellPrice(shopName, productName);
    const totalSellPrice = makeOrderShopSell(shopName, productName, orderSize) //didn't need callback here


    console.log("shop")
    console.log(shop)
    console.log("product")
    console.log(product)
    console.log("shop.money")
    console.log(shop.money)
    console.log("shopSellsPrice")
    console.log(shopSellsPrice)
    console.log("orderSize")
    console.log(orderSize)
    console.log("totalSellPrice")
    console.log("totalSellPrice.ordersize")
    console.log(totalSellPrice.orderSize)
    console.log("totalSellPrice.totalSellPrice")
    console.log(totalSellPrice.totalSellPrice)
    console.log("player.money")
    console.log(player1.money)

    shop.money = shop.money + totalSellPrice.totalSellPrice;
    product.quantity = product.quantity - orderSize;

    console.log("shop.money")
    console.log(shop.money)
    console.log("product.quantity")
    console.log(product.quantity)



    return 5



}

console.log(completeOrderShopSell("Mainly Mango Shop", "mango", 1))

