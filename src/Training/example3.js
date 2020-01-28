const plantRoom = {
    tomatoes: [
        {
            id: "tomato1",
            startDate: "2020-05-14",
            amount: 200,
            daysOld: 10
        },
        {
            id: "tomato2",
            startDate: "2020-07-14",
            amount: 150,
            daysOld: 8
        }
    ],
    cucumbers: [
        {
            id: "cuc1",
            startDate: "2020-03-14",
            amount: 35,
            daysOld: 5
        },
        {
            id: "cuc2",
            startDate: "2020-05-14",
            amount: 27,
            daysOld: 12
        }
    ],
    salad: [
        {
            id: "sal1",
            startDate: "2020-01-14",
            amount: 300,
            daysOld: 6
        },
        {
            id: "sal2",
            startDate: "2020-02-14",
            amount: 280,
            daysOld: 15
        }
    ],

};

const ripe = {
    salad: 30,
    tomatoes: 60,
    cucumbers: 90
};

const readyVeg = (veg, ripeTime) => {
   let vars = 5+2
};

console.log(readyVeg(plantRoom.tomatoes, ripe.tomatoes));
console.log(readyVeg(plantRoom.cucumbers, ripe.cucumbers));
console.log(readyVeg(plantRoom.salad, ripe.salad));


const grid = [
    [0,0,1,1],
    [0,0,1,1],
    [0,0,1,1],
];


const position = [1,0];

const extract = grid[position[0]][position[1]];

let path;
if (grid[position-1] === 0) {
   path = "not a wall"
}
