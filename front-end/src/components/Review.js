import React from 'react'
import {ReviewCardContainer} from '../styles/review-styles'


export const Review = ({review}) => {
  return (
    <ReviewCardContainer>
        {review.author}
    </ReviewCardContainer>
  )
}
