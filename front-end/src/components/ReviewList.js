import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../redux/reviewSlice'
import { Review } from './Review'
import {ReviewListContainer, ReviewListGrid} from '../styles/review-styles'
import Grid from '@mui/material/Grid'
import { Link } from "react-router-dom";

export const ReviewList = () => {
    const reviews = useSelector((state) => state.reviews.reviews)
    const dispatch = useDispatch()
 
    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

  

  return (
    <ReviewListContainer>
        <ReviewListGrid container spacing={8}>
        {reviews.map(review => (
          <Grid item xs={12} md={6} lg={4} key={reviews.id}>
              <Link to={`/review/${review.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Review review={review}/>
          </Link>
            </Grid>
        ))}
         </ReviewListGrid>
    </ReviewListContainer>
  )
}
