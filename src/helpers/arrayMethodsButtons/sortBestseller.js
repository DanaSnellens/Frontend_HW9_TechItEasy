import {inventory} from "../../constants/inventory.js";
function sortBestseller() {
    inventory.sort((a,b) => {
        return b.sold - a.sold;
    });

    console.log(inventory);
}

export default sortBestseller;
