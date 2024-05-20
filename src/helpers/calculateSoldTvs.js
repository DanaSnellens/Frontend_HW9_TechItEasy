function calculateSoldTvs(products) {
    console.log(products)
    let tvsSold = 0;

    for (let i = 0; i < products.length; i++) {
        tvsSold = tvsSold + products[i].sold;
    }

    return tvsSold;
}

export default calculateSoldTvs;