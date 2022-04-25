import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { SelectedReviewCardContainer, SelectedReviewCardTop, SelectedReviewCardBottom, CommentInput, CommentInputContainer,CommentButton } from '../styles/review-styles'
import Rating from '@mui/material/Rating';
import {Forum, Close} from '@mui/icons-material';


export const SelectedReview = ({review}) => {
    const [inputActive, setInputActive] = useState(false)
    const { id } = useParams()

    const selectedReview = review.filter(review => {
            if(review.id === id){
                return review
            }
        })[0]

        const formattedDate = selectedReview.published_at.split(' ').slice(1,4).join().replace(/,/g, '/')


  return (
      <>
    <SelectedReviewCardContainer>
        <SelectedReviewCardTop>
            <h2>{selectedReview.place}</h2>
            <Rating name='read-only' value={selectedReview.rating} readOnly/>
            <p>{selectedReview.content}</p>
        </SelectedReviewCardTop>
        <SelectedReviewCardBottom>
            <h5>{selectedReview.author}</h5>
            <p>{formattedDate}</p>
            <span onClick={() => setInputActive(!inputActive)}>{inputActive ? (
                <Close fontSize='small'/>
            ): (
                <Forum fontSize='small'/>
            )}</span>
        </SelectedReviewCardBottom>
    </SelectedReviewCardContainer>

    {inputActive ? (
    <CommentInputContainer>
        <CommentInput placeholder='Enter Comment'/>
        <CommentButton>Submit</CommentButton>
    </CommentInputContainer>
    ): null}
    </>
  )
}
