import React from 'react'
import { Link } from 'react-router-dom'
import { fetchSingleItem } from '../actions'

function ImBorrowingCard (props) {
  return (
    <div className='card-wrapper'>
      <div className='card-container'>
        <img className='card-image' src={props.image_url}></img>
        <div className='card-details-container'>
          <p className='card-heading'>{props.item_name}</p>
          <p className='card-details'>{props.description}</p>
        </div>
      </div>
      <div className='card-button-container'>
        <Link to="/OrderMyBorroedItems">
        <button className='card-button' onClick={ () => props.dispatch(fetchSingleItem(props.item_id))}>More</button>
      </Link>
      </div>
    </div>
  )
}

export default ImBorrowingCard
