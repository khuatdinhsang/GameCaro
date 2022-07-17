import React from 'react';
import Cell from './Cell';
import { calculateWinner } from './Helper';



const Board = (props) => {
    // const show =()=>{
    //     const cells=[
    //         '0','0','0',
    //         null,'X','X',
    //         null,null,'0'
    //     ]
    //     console.log(calculateWinner(cells));
    // }
    return ( 
        <div className="game-board">
            {props.cells.map((item,index)=>(
                <Cell key={index} 
                value={item} 
                onClick={()=>props.onClick(index)}
                className={item ==='X'?'is-x':item==='O'?'is-o':''}
                ></Cell>
            ))}
           
        </div>
    )
}
export default Board