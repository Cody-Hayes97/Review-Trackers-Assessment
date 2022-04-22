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
  align-items: baseline;
  margin: 17% 0; 

  >p{
    color: gray;
    padding: 0 10%;
    font-size: 14px;
  }

  >h5{
      font-weight: 500
  }
`

export const ReviewListContainer = styled.div`
    margin: 3% 6%;
`

export const ReviewListGrid = styled(Grid)`
`
