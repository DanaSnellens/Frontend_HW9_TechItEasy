import calculatePurchasedTvs from "./calculatePurchasedTvs.js";
import calculateSoldTvs from "./calculateSoldTvs.js";
function calculateTvsInStock(products) {
    const purchasedTvs = calculatePurchasedTvs(products);
    const soldTvs = calculateSoldTvs(products);

    return purchasedTvs - soldTvs;
}

export default calculateTvsInStock;