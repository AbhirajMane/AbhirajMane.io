import React from 'react'
import {MoreHorizontal} from 'react-feather'
import './Board.css'
import Card from '../Card/Card'
function Board5() {
  return (
    <div className='board'>
        <div className= "board_top">
            <p className = "board_top_title">
            &nbsp;Canceled 0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<MoreHorizontal />
            </p>
            
        </div>
        <div className= "board_cards">
            <Card />
        </div>
    </div>
  )
}

export default Board5
