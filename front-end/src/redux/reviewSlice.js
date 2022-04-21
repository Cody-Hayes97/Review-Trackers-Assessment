import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    reviews: []
}

export const fetchData = createAsyncThunk(
    'review/fetchReview',
    async () => {
        const promise = axios.get("reviews.json").then((res) => {
            const data = res.data
            return data
         })
        
         const data = await promise
         return data
    }
)


export const reviewSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers:{
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            return {...state, reviews: action.payload}
        })
    }
})

export const {} = reviewSlice.actions

export default reviewSlice.reducer