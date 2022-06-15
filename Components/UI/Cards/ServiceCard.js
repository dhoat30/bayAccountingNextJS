import React from 'react'
import ColumnTitle from '../Titles/Titles/ColumnTitle'
import styled from 'styled-components'
import Image from 'next/image'
import Paragraph from '../Titles/Paragraph/Paragraph'

import Link from 'next/link'
function ServiceCard({ title, image, excerpt, slug }) {
    let excerptProcessed = excerpt.replace(/(<([^>]+)>)/ig, '')
    excerptProcessed = excerptProcessed.substring(0, 100)
    return (
        <Link href={`/services/${slug}`} passHref>
            <Container >
                <Card >
                    <ImageContainer>
                        <ImageStyle src={image} layout="fill" alt={title} />

                    </ImageContainer>
                    <Content>
                        <ColumnTitle align="center">{title}</ColumnTitle>
                        <Paragraph align="center" >{excerptProcessed}...</Paragraph>
                    </Content>
                    <IconStyle width="30px" height="30px" viewBox="0 0 44.572 25.243">
                        <g id="Icon_feather-arrow-right" data-name="Icon feather-arrow-right" transform="translate(1.5 2.121)">
                            <path id="Path_20462" data-name="Path 20462" d="M7.5,18H49.071" transform="translate(-7.5 -7.5)" fill="none" stroke="#17212a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                            <path id="Path_20463" data-name="Path 20463" d="M18,7.5,28.5,18,18,28.5" transform="translate(13.072 -7.5)" fill="none" stroke="#17212a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                        </g>
                    </IconStyle>

                </Card>
                <BackDropCard />
            </Container>
        </Link>
    )
}

export default ServiceCard

const BackDropCard = styled.div`
    content: ''; 
    position: absolute;
    width: 93%;
    height: 100%;
    background: rgba(0,0,0,0.1);
    z-index: -1; 
    top: 10px;
    left: 50%; 
    transform: translate(-50%, 0);
    transition: var(--transition);

`
const Container = styled.a`
text-decoration: none; 
margin: 20px;
position: relative;
transition: var(--transition);

&:hover ${BackDropCard} {
    background:var(--darkGreen) !important;
    top: 15px; 
}
&:hover{ 
    color: var(--darkGreen);
}
`
const Card = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: column;
align-items: center;
width: 100%;
max-width: 300px;
background: white;
padding: 10px 20px;
cursor: pointer;
position: relative;
z-index: 2;
min-height: 360px;
background-repeat: no-repeat;
background-size: cover;

`
const ImageContainer = styled.div`
position: relative ;
width: 100px;
height: 100px;
`
const ImageStyle = styled(Image)`
object-fit: cover;
`
const Content = styled.div`
margin-top: 20px;
`

const IconStyle = styled.svg`
    
    text-align: center;
`

