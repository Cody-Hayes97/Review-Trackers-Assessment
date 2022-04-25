import React from 'react'
import {HeaderContainer, HeaderList, HeaderListItem, HeaderMiddle, HeaderRight} from '../styles/header-styles'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderContainer>
        <HeaderList>
          <Link to='/' style={{textDecoration: "none", color: "inherit"}}>
            <HeaderListItem>Reviews</HeaderListItem> 
          </Link>
        </HeaderList>
    </HeaderContainer>
  )
}
