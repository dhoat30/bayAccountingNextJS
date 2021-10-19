import React from 'react'
import styled from 'styled-components'
function LargeTitle(props) {

    return (
        <Container
            dangerouslySetInnerHTML={{ __html: props.children }}
            className={props.className} align={props.align} color={props.color}>
        </Container>
    )
}

export default LargeTitle
const Container = styled.h1`
font-size: 4rem;
font-weight: 700;
margin: 10px 0;
line-height: 5rem;
color: ${props => props.color ? props.color : 'var(--darkGrey)'};
text-align: ${props => props.align ? props.align : "left"};
@media (max-width: 500px ){ 
   font-size: 3rem;
   line-height: 3rem;
}
`
