import React from 'react';
import './grid.css'
import useTicTacToe from "./useTicTacToe";

const Grid = () => {

    const {gameState, currentPlayer, winner, hasWinner, isDraw, onFieldClick, resetGame} = useTicTacToe("o");
    const showButton = isDraw || winner;

    let playerTurnInfo = <div> It is {currentPlayer} turn!</div>;
    if (hasWinner) {
        playerTurnInfo = <div> The winner is {winner}</div>

    } else if (isDraw) {
        playerTurnInfo = <div> It is a draw</div>
    }

    const gridRepresentation = gameState.split("").map((e, idx) => {
        let cellValue = e;
        if (e === "a") {
            cellValue = "";
        }
        return <div className="grid" onClick={() => onFieldClick(idx)}>{cellValue}</div>
    });

    return (
        <div>
            <div className="grid-container">{gridRepresentation}</div>
            {playerTurnInfo}
            {showButton && <button onClick={resetGame}>Reset</button>}
        </div>
    )
};

export default Grid