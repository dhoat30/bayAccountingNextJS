import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/pro-light-svg-icons'

function ListItems({ listContent, showDots }) {
    return (
        <ListContainer showDots={showDots}>
            <List>  <IconStyle icon={faCheckCircle} />  {listContent}</List>
        </ListContainer>
    )
}

export default ListItems
const ListContainer = styled.ul`
list-style-type: circle !important;
`
const List = styled.li`
font-size: 1.2rem; 
display: flex; 
align-items: center;
color: var(--darkGrey);
letter-spacing: 0.03rem;
margin: 0 0 15px 0;
`
const IconStyle = styled(FontAwesomeIcon)`
color: var(--darkGreen);
font-size: 3rem;
margin-right: 10px; 
`