class House {
    constructor(bedrooms, bathrooms) {
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.housePrice = 0;
    }
    basicInfo() {
        return `This house has ${this.bedrooms} bedrooms and ${this.bathrooms} bathrooms and costs £${this.housePrice}`
    }

    price(housePrice) {
        this.housePrice = housePrice;
    }

}

const plumsHouse = new House(57, 4000);
plumsHouse.price(500);
console.log(plumsHouse.basicInfo())