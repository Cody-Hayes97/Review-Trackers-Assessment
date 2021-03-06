import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SelectedReviewCardContainer, SelectedReviewCardTop, SelectedReviewCardBottom, CommentInput, CommentInputContainer,CommentButton, CommentContainer, CommentCardTop, CommentCardBottom } from '../styles/review-styles'
import Rating from '@mui/material/Rating';
import {Forum, Close, Edit} from '@mui/icons-material';


export const SelectedReview = ({review}) => {
    const [inputActive, setInputActive] = useState(false)
    const [comment, setComment] = useState("")
    const { id } = useParams()
    const [selectedReview, setSelectedReview] = useState(review.filter(review => {
        if(review.id === id){
            return {...review}
        }
    })[0])

    const formattedDate = selectedReview.published_at.split(' ').slice(1,4).join().replace(/,/g, '/')

    const handleChange = e => {
        setComment(e.target.value)
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        setSelectedReview({...selectedReview, newComment: comment}) 
        setComment("")
        setInputActive(false)
    }

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
    <CommentInputContainer onSubmit={handleSubmit}>
        <CommentInput placeholder='Enter Comment' type="text" value={comment} onChange={handleChange}/>
        <CommentButton>Submit</CommentButton>
    </CommentInputContainer>
    ): null}

    {selectedReview.newComment ? (
         <CommentContainer>
         <CommentCardTop>
             <p>{selectedReview.newComment}</p>
            <span onClick={() => setInputActive(true)}><Edit/></span> 
         </CommentCardTop> 
         <CommentCardBottom>
         <h5>Jane Doe</h5>
         <p>{formattedDate}</p>
         </CommentCardBottom>
     </CommentContainer>
    ): null}
    </>
  )
}
