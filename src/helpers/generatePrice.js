import {bestSellingTv as tv} from "../constants/inventory.js";


function generatePrice(price) {
    return `€${tv.price},-`;
}

export default generatePrice;