import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import SectionTitle from '../Titles/Titles/SectionTitle'
import Paragraph from '../Titles/Paragraph/Paragraph'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/pro-solid-svg-icons'

function ImageTitleContent({ image, title, content, listItems }) {
    const listItemsCard = listItems ? listItems.map((item, index) => {
        return (
            <List key={index}>
                <IconStyle icon={faCheck} />
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
`
const IconStyle = styled(FontAwesomeIcon)`
margin-right: 15px;
color: var(--orange); 
`