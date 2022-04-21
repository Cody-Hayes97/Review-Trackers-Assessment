import styled from 'styled-components'

export const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    background-color: #0057b3;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    color: white;
   
`

export const HeaderList = styled.ul`
    flex: 0.1; 
    display: flex;
    align-items: center;
    margin-left: 75px;
`

export const HeaderListItem = styled.li`
    list-style-type: none;
    font-size: 24px;
    font-weight: 600;
`