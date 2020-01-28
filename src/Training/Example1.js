const candyShop = {
    candyVariety: [
        {
            id: 2576,
            name: "melon",
            amount: 20,
            price: 10


        },
        {
            id: 2578,
            name: "skulls",
            amount: 25,
            price: 8
        }
    ]
};

const value = candyShop.candyVariety.map((candyType,idx) => {
    return candyType.amount * candyType.price
});

const totalValue = value.reduce((acc, cur) => { return acc + cur});

console.log(totalValue);