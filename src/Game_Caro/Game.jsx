import React, { useState } from 'react';
import Board from './Board';
import './GameStyle.scss'
import { calculateWinner } from './Helper';

const Game = () => {
    const[board,setboard]=useState(Array(9).fill(null));
    const [xIsNext,setIsNext]=useState(true);
    const winner=calculateWinner(board);
    const handleClick=(index) =>{
        const boardCopy=[...board];
        if(winner|| boardCopy[index]) return;
        boardCopy[index]=xIsNext?'X':'O';
        setboard(boardCopy);
        setIsNext((xIsNext)=>!xIsNext);
    }
    const handleResetGame=()=>{
        setboard(Array(9).fill(null));
        setIsNext(true);
    }
    return ( 
        <div>
            <Board cells={board} onClick={handleClick}></Board>
            {winner  && <div className="game-winner">
               Winner is {winner}
            </div>}
            <button className='reset' onClick={handleResetGame}>Reset Game</button>
        </div>
    )
}
export default Game