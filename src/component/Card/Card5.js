import React from 'react'
import { MoreHorizontal } from 'react-feather'
import Chip from '../Chip/Chip'
import "./Card.css"

function Card5() {
  return (
    <div className='card'>
        <div className='card_top'>
            <div className='card_labels'>
                <Chip text="CAM-1" />
            </div>
            <MoreHorizontal />
        </div>
        <div className='card_title'>Update User Profile Page UI</div>
        <div className='card_footer'>
            <p>Feature Request</p>
        </div>
      
    </div>
  )
}

export default Card5