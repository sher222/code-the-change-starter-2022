import React, {useState} from "react";
import Board from "./Board";

const Game = () => {
  // TODO: Set up states and functions: position of Xs and Os on board,
  // step number, whether X is next, is there a win or tie, etc.

    function jumpToStart(){
        setBoard([null, null, null, null, null, null, null, null, null]);
        setXisNext(true);
        setStepNumber(0);
    }
    function handleClick(index){
        console.log("HANDLE CLICK INDEX", index);
        if (board[index] != null){
            return;
        }
        console.log("calculateWinner", calculateWinner())
        if (calculateWinner() != null){
            return;
        }
        var a = board;
        a[index] = xIsNext ? "X" : "O";
        setBoard(a);
        setXisNext(!xIsNext);
        setStepNumber(stepNumber + 1);

    }
    function result(){
        console.log("result is called");
        if (calculateWinner() != null){

            console.log("Winner: "+calculateWinner());
            return "Winner: " + calculateWinner();
        }
        if (stepNumber >= 9){
            console.log("Tie Game");
            return "Tie Game";
        }
        console.log("NEXT PLAYER");
        console.log("Next Player: " + (xIsNext ? "X" : "O"));
        return "Next Player: " + (xIsNext ? "X" : "O");
    }
    const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null])
    const [stepNumber, setStepNumber] = useState(0)
    const [xIsNext, setXisNext] = useState(true)
    function getIndex(arr){
        return 3 * arr[0] + arr[1];
    }
    function calculateWinner(){
        var check = [
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]]
        ]
        for (let i = 0; i < check.length; i++){
           if (board[getIndex(check[i][0])] === board[getIndex(check[i][1])] && board[getIndex(check[i][1])] === board[getIndex(check[i][2])] && board[getIndex(check[i][0])] !== null){
               return board[getIndex(check[i][0])];
           }
        }
        return null;
    }
    return (
        <>
            <h1>Tic Tac Toe</h1>
            <Board squares={board} onClick={handleClick} />
            <div className='info-wrapper'>
                <div>
                    <button onClick={jumpToStart}>Go to Start</button>
                </div>
                <h3>{result()}</h3>
            </div>
        </>
  );
};

export default Game;
