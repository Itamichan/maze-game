import {useEffect, useState} from "react";


const useTicTacToe = (startPlayer = "x") => {
    const [gameState, setGameState] = useState("aaaaaaaaa");
    const [currentPlayer, setCurrentPlayer] = useState(startPlayer);

    // useEffect(() => {
    //     console.log(new Date());
    //     setGameState("aaaaaaaax")
    // }, [])


    let winner = "";
    if (gameState[0] === gameState[1] && gameState[0] === gameState[2]) {
        winner = gameState[0];
    } else if (gameState[3] === gameState[4] && gameState[3] === gameState[5]) {
        winner = gameState[3];
    } else if (gameState[6] === gameState[7] && gameState[6] === gameState[8]) {
        winner = gameState[6];
    } else if (gameState[0] === gameState[3] && gameState[0] === gameState[6]) {
        winner = gameState[0];
    } else if (gameState[1] === gameState[4] && gameState[1] === gameState[7]) {
        winner = gameState[1];
    } else if (gameState[2] === gameState[5] && gameState[2] === gameState[8]) {
        winner = gameState[2];
    } else if (gameState[0] === gameState[4] && gameState[0] === gameState[8]) {
        winner = gameState[0];
    } else if (gameState[2] === gameState[4] && gameState[2] === gameState[6]) {
        winner = gameState[2];
    }

    if (winner === 'a') {
        winner = ""
    }

    const hasWinner = winner !== "";
    const isDraw = !gameState.includes("a") && !winner;

    const onFieldClick = (index) => {
        if (gameState.charAt(index) === "a" && !winner) {
            setGameState(prevState => {
                let newString = prevState;
                newString = newString.substr(0, index) + currentPlayer + newString.substr(index + 1);
                // setCurrentPlayer(currentPlayer === "x" ? "0" : "x");
                return newString

            })
        }
    };

    let resetGame = () => {
        if (hasWinner || isDraw) {
            setGameState("aaaaaaaaa");
            setCurrentPlayer("x")
        }
    };


    return {
        gameState,
        currentPlayer,
        winner,
        hasWinner,
        isDraw,
        onFieldClick,
        resetGame
    }

};

export default useTicTacToe