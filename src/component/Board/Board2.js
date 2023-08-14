import React from 'react'
import {MoreHorizontal} from 'react-feather'
import './Board.css'
import Card3 from '../Card/Card3'
import Card4 from '../Card/Card4'
import Card5 from '../Card/Card5'
function Board2() {
  return (
    <div className='board'>
        <div className= "board_top">
            <p className = "board_top_title">
            &nbsp;To Do3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<MoreHorizontal />
            </p>
            
        </div>
        <div className= "board_cards">
            <Card3 />
        </div>
        <div className= "board_cards">
            <Card4 />
        </div>
        <div className= "board_cards">
            <Card5 />
        </div>
    </div>
  )
}

export default Board2
