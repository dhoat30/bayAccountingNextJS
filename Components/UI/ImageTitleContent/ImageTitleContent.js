import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import SectionTitle from '../Titles/Titles/SectionTitle'
import Paragraph from '../Titles/Paragraph/Paragraph'
function ImageTitleContent({ image, title, content }) {
    return (
        <Container>
            <ImageContainer>
                <ImageStyle src={image}
                    alt={title}
                    layout="fill" />
            </ImageContainer>
            <Content>
                <SectionTitleStyle fontWeight="600">{title} </SectionTitleStyle>
                <Paragraph>{content} </Paragraph>
            </Content>
        </Container>
    )
}

export default ImageTitleContent
const Container = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap-reverse;
`
const ImageContainer = styled.div`
position: relative;
width: 100%;
height: 500px;
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