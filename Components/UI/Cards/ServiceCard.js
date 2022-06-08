import React from 'react'
import ColumnTitle from '../Titles/Titles/ColumnTitle'
import styled from 'styled-components'
import Image from 'next/image'
import Paragraph from '../Titles/Paragraph/Paragraph'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/pro-light-svg-icons'
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
                    <IconStyle icon={faLongArrowRight} />
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

const IconStyle = styled(FontAwesomeIcon)`
    font-size: 2rem;
    text-align: center;
`

