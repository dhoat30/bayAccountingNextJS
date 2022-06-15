import React from 'react'
import ColumnTitle from '../Titles/Titles/ColumnTitle'
import styled from 'styled-components'
import Image from 'next/image'
import Paragraph from '../Titles/Paragraph/Paragraph'

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
                            <CalIcon width="14.535" height="15.504" viewBox="0 0 14.535 15.504">
                                <g id="Icon_metro-calendar" data-name="Icon metro-calendar" transform="translate(0)">
                                    <path id="Icon_metro-calendar-2" data-name="Icon metro-calendar" d="M7.416,7.742H9.354V9.68H7.416Zm2.907,0h1.938V9.68H10.323Zm2.907,0h1.938V9.68H13.23ZM4.509,13.556H6.447v1.938H4.509Zm2.907,0H9.354v1.938H7.416Zm2.907,0h1.938v1.938H10.323ZM7.416,10.649H9.354v1.938H7.416Zm2.907,0h1.938v1.938H10.323Zm2.907,0h1.938v1.938H13.23Zm-8.721,0H6.447v1.938H4.509ZM15.168,1.928V2.9H13.23V1.928H6.447V2.9H4.509V1.928H2.571v15.5H17.105V1.928H15.167Zm.969,14.535H3.54V5.8h12.6Z" transform="translate(-2.571 -1.928)" fill="#fc4a17" />
                                </g>
                            </CalIcon>

                            <CalTitle>{date} </CalTitle>
                        </div>
                        <ColumnTitleStyle >{title}</ColumnTitleStyle>
                        <Paragraph  >{excerptProcessed}...</Paragraph>
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
const CalIcon = styled.svg`
  
`
const CalTitle = styled.div`
font-size: 1.2rem;
color: var(--darkGreen); 
font-weight: 600; 
display: inline-block;
margin-left: 10px;
`
const IconStyle = styled.svg`
    font-size: 2rem;
    text-align: center;
      color: var(--orange);
`

const ImageContainer = styled.div`
position:relative; 
width: 100%;
height: 250px;
`
const ColumnTitleStyle = styled(ColumnTitle)`
    margin: 10px 0;
`
