function calculatePurchasedTvs(products) {
    let tvsPurchased = 0;

    for (let i = 0; i < products.length; i++) {
        tvsPurchased = tvsPurchased + products[i].originalStock;
    }

    return tvsPurchased;
}

export default calculatePurchasedTvs;