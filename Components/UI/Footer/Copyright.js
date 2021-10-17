import React from 'react'
import Paragraph from '../Titles/Paragraph/Paragraph'
import styled from 'styled-components'
function Copyright({ copyrightData }) {
    return (
        <Container>
            <Paragraph color="var(--lightBlue)">© Copyright <Span>{copyrightData} </Span>| <Anchor href="https://webduel.co.nz" target="_blank">Built By Web<Span>Duel</Span></Anchor> </Paragraph>
        </Container>
    )
}

export default Copyright
const Container = styled.div`
margin: 30px 0 0 0;
`

const Span = styled.span`
color: var(--neonGreen);

`

const Anchor = styled.a`
color: var(--lightBlue); 
text-decoration: none;
cursor: pointer;
&:hover{ 
    color: var(--neonGreen);
    text-decoration: underline; 
}
`
