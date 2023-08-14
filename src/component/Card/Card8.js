import React from 'react'
import { MoreHorizontal } from 'react-feather'
import Chip from '../Chip/Chip'
import "./Card.css"

function Card8() {
  return (
    <div className='card'>
        <div className='card_top'>
            <div className='card_labels'>
                <Chip text="CAM-7" />
            </div>
            <MoreHorizontal />
        </div>
        <div className='card_title'>Third-Party Payment Gateway</div>
        <div className='card_footer'>
            <p>Feature Request</p>
        </div>
      
    </div>
  )
}

export default Card8