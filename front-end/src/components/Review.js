import React from 'react'
import {ReviewCardContainer, ReviewCardTop, ReviewCardBottom} from '../styles/review-styles'
import Rating from '@mui/material/Rating';

export const Review = ({review}) => {
    const formattedDate = review.published_at.split(' ').slice(1,4).join().replace(/,/g, '/')

  return (
    <ReviewCardContainer>

        <ReviewCardTop>
            <h2>{review.place}</h2>
            <Rating name='read-only' value={review.rating} readOnly/>
            <p>{review.content}</p>
        </ReviewCardTop>

        <ReviewCardBottom>
            <h5>{review.author}</h5>
            <p>{formattedDate}</p>
        </ReviewCardBottom>

        
    </ReviewCardContainer>
  )
}
