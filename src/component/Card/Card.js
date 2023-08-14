import React from 'react'
import { MoreHorizontal } from 'react-feather'
import Chip from '../Chip/Chip'
import "./Card.css"

function Card() {
  return (
    <div className='card'>
        <div className='card_top'>
            <div className='card_labels'>
                <Chip text="CAM-5" />
            </div>
            <MoreHorizontal />
        </div>
        <div className='card_title'>Add Multi-Language Support - Enable multi-language support within the application</div>
        <div className='card_footer'>
            <p>Feature Request</p>
        </div>
      
    </div>
  )
}

export default Card
