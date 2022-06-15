import React from 'react'
import styled from 'styled-components'
import ColumnTitle from '../Titles/Titles/ColumnTitle'

function LinksBar({ slugs, title }) {
    const linkCards = slugs.map(item => {
        return (<Link key={item.slug}>
            <Anchor
                href={`/services/${item.slug}`}
                dangerouslySetInnerHTML={{ __html: item.title }}>
            </Anchor>
        </Link>)
    })
    return (
        <Container>
            <ColumnTitle color="white">{title}</ColumnTitle>
            <Links>
                {linkCards}
            </Links>
        </Container >
    )
}

export default LinksBar
const Container = styled.div``

const Links = styled.ul`
list-style: none ;
margin: 0;
padding: 0; 
`
const Link = styled.li`
margin: 15px 0 0 0; 
`

// const IconStyle = styled(FontAwesomeIcon)`
//     color: var(--lightGreen);
//     font-size: 1.8rem;
//     padding-right: 7px;
// `
const Anchor = styled.a`
line-height: 1.5rem;
display: flex; 
align-items: center;
text-decoration: none ;
color: var(--lightBlue);
font-size: 1.2rem;
&:hover{ 
    color: var(--white); 
}
/* &:hover ${IconStyle}{ 
    color: var(--white);
} */
`
const IconContainer = styled.span`
display: block;
width: 30px;
`