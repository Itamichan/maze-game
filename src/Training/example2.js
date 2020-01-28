const carPool = [
    {
        id: 254,
        model: "Opel 2000",
        color: "white"
    },
    {
        id: 354,
        model: "Tayota 2000",
        color: "red"
    },
    {
        id: 2784,
        model: "BMW 2000",
        color: "blue"
    },

];

const clientPool = [
    {
        firstName: "Cristina",
        lastName: "Garbuz",
        rentedCar: 254,
        startDate: "2020-05-20"
    },
    {
        firstName: "Robert",
        lastName: "Kessler",
        rentedCar: 354,
        startDate: "2020-07-20"
    }
];

const blueCars = carPool.map(car => {
    let blue = 0;
    if (car.color === "blue") {
        blue++
    }
    return blue
});

const totalBlueCars = blueCars.reduce((accum, cur) => accum + cur);

console.log(blueCars);
console.log(totalBlueCars);