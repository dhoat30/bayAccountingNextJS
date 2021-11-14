import React from 'react'
import Paragraph from '../Titles/Paragraph/Paragraph'
import styled from 'styled-components'
import Link from 'next/link'
function Copyright({ copyrightData }) {
    return (
        <Container>
            <Paragraph color="var(--lightBlue)">© Copyright <Span>{copyrightData} </Span>| <Anchor href="https://webduel.co.nz" target="_blank">Built By Web<Span>Duel</Span></Anchor> </Paragraph>
            <PolicyLinks>
                <Link passHref href="/policies/terms-of-engagement">
                    <AnchorLink>
                        Terms Of Engagement
                    </AnchorLink>
                </Link>
            </PolicyLinks>
        </Container>
    )
}

export default Copyright
const Container = styled.div`
margin: 30px 0 0 0;
display: flex;
justify-content: space-between;
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
const PolicyLinks = styled.div`

`
const AnchorLink = styled.a`
    color: var(--lightBlue);
    &:hover{
        color: var(--neonGreen); 
        text-decoration: underline; 
    }
`