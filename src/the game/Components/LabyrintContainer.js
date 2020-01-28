import React from 'react';
import useLabyrint from "./useLabyrint";
import './Cell.css';

const Cell = ({cellValue}) => {

    switch (cellValue) {
        case 0:
            return <div className={'grid-cell empty-field'}/>;
        case 1:
            return <div className={'grid-cell wall-field'}/>;
        case 2:
            return <div className={'grid-cell finish-field'}/>;
        case 3:
            return <div className={'grid-cell player-field'}/>;
        default:
            return null
    }
};


const LabyrintContainer = (props) => {

    const {grid, currentLocation, startTime, startGame, up, down, right, left, finish} = useLabyrint();


    grid[currentLocation[0]][currentLocation[1]] = 3;


    const gameRepresentation = grid.map(row => {
        const rowRepresentation = row.map(cell => {
            return <Cell cellValue={cell}/>
        });
        return <div
            className={'row'}>
            {rowRepresentation}
        </div>
    });

    let playerWon;
    if (finish) {
        playerWon =  <div>You found the exit!</div>
    }

    keyDownHandler = () => {

        return
    };

document.addEventListener('keydown', keyDownHandler);

    return (
        <div style={{border: '1px solid black'}}>
            {gameRepresentation}
            {playerWon}
            <button onClick={up} >Button up</button>
            <button onClick={down}>Button down</button>
            <button onClick={left}>Button left</button>
            <button onClick={right}>Button right</button>
        </div>
    )
};

export default LabyrintContainer;
