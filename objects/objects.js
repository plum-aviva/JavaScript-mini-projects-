// an object is a collection of related properties and / or methods (functions) 
// object = {key: value,
//             function()}


let product;

class Village {
    constructor(villageName, productsMade, villiageNumber) {
        this.villageName = villageName;
        this.productsMade = productsMade;
        this.villiageNumber = villiageNumber;
        this.price = 1;
        this.economy = 1;
        // price and stock ? 
        // I could put other products array here? so when the seller moves through they can sell 
        // different products 


    }
}

// identify the difference between the villiage number whre the product 
// and current villiage 






const seaVilliage = new Village("Seaside", "Seafood", 1, 0);
seaVilliage.sell("pies");

const fruitAndVegVilliage = new Village("Farm Villiage", "Fruits and Vegetables", 2, 0)

const wheatFarmVilliage = new Village("Cake Villiage", "Cake", 3, 0);

const pieVilliage = new Village("Pie Villiage", "Pies", 4, 0)

const breadVilliage = new Village("Bread Villiage", "Bread", 5, 0)


const village = [seaVilliage, fruitAndVegVilliage, wheatFarmVilliage, pieVilliage, breadVilliage]


// this function sets the price of a product - I can build in more in the future? 
// maybe a random event that increases or decreases price? 
function findVillgeByProduct(product) {
    let result;
    let startingVillage = seaVilliage;
    let price;

    village.forEach(village => {
        if (village.productsMade === product) {
            result = village.villiageNumber;

            let distance = Math.abs(result - startingVillage.villiageNumber);
            console.log(`${distance} stops away `);
            console.log(distance + 1);
            price = distance + 1;
            console.log(price);


            economyChange = startingVillage.economy += distance;

        }

    })
}



console.log(findVillgeByProduct("Bread"));
console.log(fruitAndVegVilliage.economy + " economy");


// make traveller who buys and sells items


