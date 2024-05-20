import {inventory} from "../../constants/inventory.js";
function sortSportTV() {
    inventory.sort((a,b) => {
        return b.refreshRate - a.refreshRate;
    });

    console.log(inventory);
}

export default sortSportTV;
