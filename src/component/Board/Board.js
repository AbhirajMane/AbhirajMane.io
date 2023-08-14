import React from 'react'
import {MoreHorizontal} from 'react-feather'
import './Board.css'
import Card from '../Card/Card'
import Card2 from '../Card/Card2'
function Board() {
  return (
    <div className='board'>
        <div className= "board_top">
            <p className = "board_top_title">
            &nbsp;Running&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<MoreHorizontal />
            </p>
            
        </div>
        <div className= "board_cards">
            <Card />
        </div>
        <div className= "board_cards">
            <Card2 />
        </div>
    </div>
  )
}

export default Board
