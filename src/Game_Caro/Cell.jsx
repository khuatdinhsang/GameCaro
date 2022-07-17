import React from 'react';
import Board from './Board';
import './GameStyle.scss'

const Cell = (props) => {
    return (     
        <div class={` game-cell ${props.className}`}onClick={props.onClick}>
           {props.value}
        </div>
    )
}
export default Cell