import React from 'react'
import {MoreHorizontal} from 'react-feather'
import './Board.css'
import Card from '../Card/Card'
import Card7 from '../Card/Card7'
import Card8 from '../Card/Card8'
import Card9 from '../Card/Card9'
import Card10 from '../Card/Card10'
import Card11 from '../Card/Card11'
function Board4() {
  return (
    <div className='board'>
        <div className= "board_top">
            <p className = "board_top_title">
            &nbsp;Done 5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<MoreHorizontal />
            </p>
            
        </div>
        <div className= "board_cards">
            <Card7 />
        </div>
        <div className= "board_cards">
            <Card8 />
        </div>
        <div className= "board_cards">
            <Card9 />
        </div>
        <div className= "board_cards">
            <Card10 />
        </div>
        <div className= "board_cards">
            <Card11 />
        </div>
    </div>
  )
}

export default Board4
