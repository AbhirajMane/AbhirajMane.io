import React from 'react'
import {MoreHorizontal} from 'react-feather'
import './Board.css'
import Card6 from '../Card/Card6'
function Board3() {
  return (
    <div className='board'>
        <div className= "board_top">
            <p className = "board_top_title">
            &nbsp;InProgress1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<MoreHorizontal />
            </p>
            
        </div>
        <div className= "board_cards">
            <Card6 />
        </div>
    </div>
  )
}

export default Board3
