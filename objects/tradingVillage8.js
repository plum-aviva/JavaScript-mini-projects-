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
const player1 = new Person("customer", "Sukant", sukantProducts, 40, 0);

// function to set up the shop
function setupShop(shopProducts, shopName, money, id, mainProduct) {
    return new Person("shop", shopName, shopProducts, money, id, mainProduct);
}

// uses functions to set up the shops
const alsoApplesShop = setupShop(
    alsoAppleStock,
    "Also Apples Shop",
    1000000,
    1,
    "apples",
);
const basedOnBananaShop = setupShop(
    basedOnBananaStock,
    "Based On Banana Shop",
    10000000,
    2,
    "banana",
);
const laterallyLemonShop = setupShop(
    laterallyLemonStock,
    "Laterally Lemon Shop",
    10000000,
    3,
    "lemon",
);
const mainlyMangoShop = setupShop(
    mainlyMangoStock,
    "Mainly Mango Shop",
    10000000,
    4,
    "mango",
);
const concurrentlyKiwiShop = setupShop(
    concurrentlyKiwiStock,
    "Concurrently Kiwi Shop",
    10000000,
    5,
    "kiwi",
);

// creates arrays of shop and product names
let products = [apple, banana, lemon, mango, kiwi];
let shops = [
    alsoApplesShop,
    basedOnBananaShop,
    laterallyLemonShop,
    mainlyMangoShop,
    concurrentlyKiwiShop,
];

// function to push products into the stock variables
function pushProducts(shopProducts) {
    let products = [apple, banana, lemon, mango, kiwi];

    for (let i = 0; i < products.length; i++) {
        shopProducts.push(products[i]);
    }
    return shopProducts;
}

// stocking the players and shops with products
pushProducts(sukantProducts);
pushProducts(alsoAppleStock);
pushProducts(basedOnBananaStock);
pushProducts(laterallyLemonStock);
pushProducts(mainlyMangoStock);
pushProducts(concurrentlyKiwiStock);

// find the shop
const findShop = function (shopName) {
    const shopChoice = shops.find((shop) => shop.name === shopName);
    return shopChoice;
};

// console.log(findShop("Mainly Mango Shop"));
// find the item
const findProduct = function (callback, shopName, productName) {
    const shop = callback(shopName);
    const product = shop.products.find((product) => product.name === productName);
    return product;
};

// console.log(findProduct(findShop, "Mainly Mango Shop", "apple"));
// retrieve the item price


// set the price the shop will sell for
const setSellPrice = function (callback, shopName, productName) {
    const product = callback(findShop, shopName, productName);
    const shop = findShop(shopName);


    let shopSells = product.sellPrice


    if (product.quantity > 30) {
        shopSells = shopSells + 5;
    } else if (product.quantity > 15) {
        shopSells = shopSells + 10;
    } else if (product.quantity >= 1) {
        shopSells = shopSells + 15;
    } else {
        return "no sale";
    }
    let distance = Math.abs(shop.id - product.productId);
    shopSells = product.sellPrice * distance + 10;

    return shopSells;
};
// console.log(setSellPrice(findProduct, "Mainly Mango Shop", "apple"));

// set the price the shop will buy for 
const setBuyPrice = function (callback, shopName, productName) {
    const product = callback(findShop, shopName, productName);
    const shop = findShop(shopName);

    // let distance = Math.abs(shop.id - product.productId);


    let shopBuys = product.buyPrice




    if (product.quantity > 30) {
        shopBuys = shopBuys + 2;
    } else if (product.quantity > 15) {
        shopBuys = shopBuys + 5;
    } else if (product.quantity >= 1) {
        shopBuys = shopBuys + 15;
    } else {
        shopBuys = shopBuys + 20;
    }

    let distance = Math.abs(shop.id - product.productId);
    shopBuys = product.buyPrice * distance;

    return shopBuys;
};
// console.log(setBuyPrice(findProduct, "Mainly Mango Shop", "apple"));

// // put in an order
const makeOrderShopBuy = function (shopName, productName, quantity) {
    const shop = findShop(shopName);
    const product = findProduct(findShop, shopName, productName);
    const shopBuysPrice = setBuyPrice(findProduct, shopName, productName);

    console.log(`you are in ${shop.name}`);
    console.log(`you want to buy ${product.name}`);

    let totalBuyPrice = shopBuysPrice * quantity;

    console.log("The shop will buy ")

    return totalBuyPrice

};
console.log(makeOrderShopBuy("Also Apples Shop", "lemon", 5));

const makeOrderShopSell = function (shopName, productName, quantity) {
    const shop = findShop(shopName);
    const product = findProduct(findShop, shopName, productName);
    const shopSellsPrice = setSellPrice(findProduct, shopName, productName);

    console.log(`you are in ${shop.name}`);
    console.log(`you want to buy ${product.name}`);

    let totalSellPrice = shopSellsPrice * quantity;

    console.log("the shop will sell")
    return totalSellPrice

};
console.log(makeOrderShopSell("Also Apples Shop", "apple", 5));

// next task is to change shop quantity and money according to price and player stock and quantity 

// const playerBuys = function() {

// }

// const playerSells = function() {


// }
