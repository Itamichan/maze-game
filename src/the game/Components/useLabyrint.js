import {useState} from "react";

const useLabyrint = () => {

    //0 - empty; 1 - wall; 2 - finish

    //2,9
    // /1,9
    const grid = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
    ];

    const [currentLocation, setCurrentLocation] = useState([0, 0]);
    const [startTime, setStartTime] = useState(undefined);

    const startGame = () => {
        setStartTime(new Date());
    };

    let finish = false;
    if (grid[currentLocation[0]][currentLocation[1]] === 2) {
        finish = true
    }

    //crashes when I go out of the limits of the grid - done
    //I can go into the walls - done
    //finish condition is not executed
    const move = (deltaY, deltaX) => {
        let Y = currentLocation[0];
        let X = currentLocation[1];

        let newLocation = [Y + deltaY, X + deltaX];

        if (grid[newLocation[0]][newLocation[1]] !== 1) {
            setCurrentLocation(newLocation);
        }
    };

    const up = () => {
        if (currentLocation[0] > 0) {
            move(-1, 0)
        }
    };

    const down = () => {
        if (currentLocation[0] < grid.length - 1) {
            move(1, 0)
        }
    };

    const right = () => {
        if (currentLocation[1] < grid[0].length - 1) {
            move(0, 1)
        }
    };

    const left = () => {
        if (currentLocation[1] > 0)
            move(0, -1)
    };




    return {
        grid,
        currentLocation,
        startTime,
        startGame,
        up,
        down,
        right,
        left,
        finish
    }
};

export default useLabyrint;