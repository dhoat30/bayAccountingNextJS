import React from 'react'
import ColumnTitle from '../Titles/Titles/ColumnTitle'
import styled from 'styled-components'
import Image from 'next/image'
import Paragraph from '../Titles/Paragraph/Paragraph'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight, faCalendarAlt } from '@fortawesome/pro-light-svg-icons'
import Link from 'next/link'

function NewsCard({ title, image, excerpt, slug, date }) {
    console.log(date)
    let excerptProcessed = excerpt.replace(/(<([^>]+)>)/ig, '')
    excerptProcessed = excerptProcessed.substring(0, 80)
    return (
        <Link href={slug} passHref>
            <Container >
                <Card>
                    <ImageContainer>
                        <ImageStyle src={image} layout="fill" alt={title} />
                    </ImageContainer>

                    <Content>
                        <div>
                            <CalIcon icon={faCalendarAlt} />
                            <CalTitle>{date} </CalTitle>
                        </div>
                        <ColumnTitleStyle >{title}</ColumnTitleStyle>
                        <Paragraph  >{excerptProcessed}...</Paragraph>
                    </Content>
                    <IconStyle icon={faLongArrowRight} />
                </Card>
                <BackDropCard />
            </Container>
        </Link>
    )
}

export default NewsCard

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
padding-bottom: 20px;
display: flex;
justify-content: flex-start;
flex-direction: column;
align-items: center;
flex-wrap: wrap;
min-width: 280px; 
width: 100%;
max-width: 350px;
background: white;
cursor: pointer;
position: relative;
z-index: 2;
min-height: 360px;
background-repeat: no-repeat;
background-size: cover;

`
const ImageStyle = styled(Image)`
object-fit: cover;

`
const Content = styled.div`
margin-top: 20px;
padding: 10px 20px;
`
const CalIcon = styled(FontAwesomeIcon)`
    color: var(--orange);
    font-size: 1.5rem;
`
const CalTitle = styled.div`
font-size: 1.2rem;
color: var(--darkGreen); 
font-weight: 600; 
display: inline-block;
margin-left: 10px;
`
const IconStyle = styled(FontAwesomeIcon)`
    font-size: 2rem;
    text-align: center;
`

const ImageContainer = styled.div`
position:relative; 
width: 100%;
height: 250px;
`
const ColumnTitleStyle = styled(ColumnTitle)`
    margin: 10px 0;
`
