import React from 'react'
import styled from 'styled-components'


function ListItems({ listContent, showDots }) {
    return (
        <ListContainer showDots={showDots}>
            <List>
                <IconStyle width="50" height="50" viewBox="0 0 50 50">
                    <g id="icon" transform="translate(-376 -1783)">
                        <g id="border" transform="translate(376 1783)" fill="none" stroke="#2e5e37" strokeWidth="2">
                            <circle cx="25" cy="25" r="25" stroke="none" />
                            <circle cx="25" cy="25" r="24" fill="none" />
                        </g>
                        <path id="Icon_feather-check" data-name="Icon feather-check" d="M23.8,9,11.563,21.239,6,15.676" transform="translate(386.1 1792.881)" fill="none" stroke="#2e5e37" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    </g>
                </IconStyle>
                {listContent}</List>
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
const IconStyle = styled.svg`
fill: var(--darkGreen);
padding-right: 10px; 
`