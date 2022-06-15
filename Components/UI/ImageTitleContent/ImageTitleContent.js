import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import SectionTitle from '../Titles/Titles/SectionTitle'
import Paragraph from '../Titles/Paragraph/Paragraph'


function ImageTitleContent({ image, title, content, listItems }) {
    const listItemsCard = listItems ? listItems.map((item, index) => {
        return (
            <List key={index}>
                <IconStyle width="50" height="50" viewBox="0 0 50 50">
                    <g id="icon" transform="translate(-376 -1783)">
                        <g id="border" transform="translate(376 1783)" fill="none" stroke="#2e5e37" strokeWidth="2">
                            <circle cx="25" cy="25" r="25" stroke="none" />
                            <circle cx="25" cy="25" r="24" fill="none" />
                        </g>
                        <path id="Icon_feather-check" data-name="Icon feather-check" d="M23.8,9,11.563,21.239,6,15.676" transform="translate(386.1 1792.881)" fill="none" stroke="#2e5e37" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    </g>
                </IconStyle>
                {item.list_item} </List>
        )
    }) : null
    return (
        <Container image={image}>
            {image &&
                <ImageContainer>
                    <ImageStyle src={image}
                        alt={title}
                        layout="fill" />
                </ImageContainer>
            }
            <Content >
                <SectionTitleStyle fontWeight="600">{title} </SectionTitleStyle>
                <Paragraph setDangerHtml={true}>{content}</Paragraph>
                <ListContainer>
                    {listItemsCard}
                </ListContainer>
            </Content>
        </Container>
    )
}

export default ImageTitleContent
const Container = styled.div`
display: flex;
justify-content: ${props => props.image ? "space-between" : "center"} ;
flex-wrap: wrap-reverse;
`
const ImageContainer = styled.div`
position: relative;
width: 100%;
height: 400px;
width: 48%;
@media (max-width: 1300px){ 
    height: 350px;
}
@media (max-width: 1150px){ 
   width: 100%;
   margin-top: 30px;
}
`
const ImageStyle = styled(Image)`
object-fit: cover;

`
const Content = styled.div`
width: 48%;
@media (max-width: 1150px){ 
   width: 100%;
}
`
const SectionTitleStyle = styled(SectionTitle)`
margin-top: 0;
`
const ListContainer = styled.ul`
margin: 20px 0 0 0; 
`
const List = styled.li`
font-size: 1.3rem; 
margin: 0 0 10px 0; 
`
const IconStyle = styled.svg`
margin-right: 15px;
color: var(--orange); 
`