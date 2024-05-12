function calculateTvsSold(inventory) {
    let tvsSold = 0;

    for (let i = 0; i < inventory.length; i++) {
        tvsSold = tvsSold + inventory[i].sold;
    }

    return tvsSold;
}

export default calculateTvsSold;