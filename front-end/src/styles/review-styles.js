import styled from 'styled-components'
import Grid from '@mui/material/Grid'

export const ReviewCardContainer = styled.div`
    background-color: white;
    padding: 1% 0 0 4%;
    margin: 0 15% 10% 15%;
    height: 25vh;
    filter: drop-shadow(3px 4px 2px rgb(0 0 0 / 0.2));

   
`
export const ReviewCardTop = styled.div`

    >p{
        white-space: nowrap;
        overflow: hidden;
        max-width: 15ch;
        text-overflow: ellipsis;
    }

   >h2{
        margin: 4% 0 1% 0;
    }
`
export const ReviewCardBottom = styled.div`
  display: flex;
  align-items: center;
  margin: 17% 0; 

  >p{
    color: gray;
    padding: 0 10%;
    font-size: 14px;
  }

  >h5{
      font-weight: 500
  }

  >span{
      margin: 2% 0 0 20%;
      :hover{
          color: blue;
      }
  }
`

export const ReviewListContainer = styled.div`
    margin: 3% 6%;
`

export const ReviewListGrid = styled(Grid)`
`


//selected review styles
export const SelectedReviewCardContainer = styled.div`
    background-color: white;
    padding: 1% 0 0 4%;
    margin: 2% 8% 0 8%;
    height: 30vh;
    filter: drop-shadow(3px 4px 2px rgb(0 0 0 / 0.2));

   
`

export const SelectedReviewCardTop = styled.div`

   >h2{
       margin: 0;
    }

   >p{
    padding: 0 2% 0 0;
    }
`

export const SelectedReviewCardBottom = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 5% 0; 

  >p{
    color: gray;
    padding: 0 3%;
    font-size: 14px;
  }

  >h5{
      font-weight: 500
  }

  >span{
      position: absolute;
      left: 95%;
      :hover{
          color: blue;
          cursor: pointer;
      }
  }
`

export const CommentInputContainer = styled.form`
    background-color: white;
    padding: 1%;
    margin: 2% 8% 0 8%;
    filter: drop-shadow(3px 4px 2px rgb(0 0 0 / 0.2));
    display: flex;
    justify-content: space-between;
`
export const CommentInput = styled.input`
    width: 90%;
    height: 3vh;
`
export const CommentButton = styled.button`
    width: 10%;
    background-color: #0057b3;
    font-size: 18px;
    color: white;
    border: none;
    cursor: pointer;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`