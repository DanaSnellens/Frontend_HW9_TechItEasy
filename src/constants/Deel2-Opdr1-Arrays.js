import {inventory} from "./inventory.js";

export const productTypes = inventory.map((product) => {
    return product.type;
});
console.log(productTypes);


export const soldOutProducts = inventory.filter((product) => {
    return product.originalStock === product.sold
});
console.log(soldOutProducts);

const findSpecificType = inventory.find((product) => {
    return product.type === 'NH3216SMART'
})
console.log(findSpecificType);

const suitableForSports = inventory.map((product) => {
    if (product.refreshRate >= 100) {
        return { name: `${product.brand} ${product.name}`, suitable: true }
    } else {
        return { name: `${product.brand} ${product.name}`, suitable: false }
    }
});
console.log(suitableForSports);

const bigScreen= inventory.filter((product) => {
    for (let i = 0; i < product.availableSizes.length; i++) {
        if (product.availableSizes[i] >= 65) {
            return product
        }
    }
});
console.log(bigScreen)

const ambiLight = inventory.filter((product) => {
    if (product.options[4].applicable) {
        return product
    }
})
console.log(ambiLight);




