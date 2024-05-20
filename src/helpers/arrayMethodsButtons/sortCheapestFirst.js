import {inventory} from "../../constants/inventory.js";
function sortCheapestFirst() {
    inventory.sort((a,b) => {
        return a.price - b.price;
    });

    console.log(inventory);
}

export default sortCheapestFirst;
