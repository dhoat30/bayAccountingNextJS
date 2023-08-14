import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import LargeTitle from '../Titles/Titles/LargeTitle'

function HeroImage({ images, subtitle, smallHeight }) {
    const isMobile = useMediaQuery({
        query: '(max-width: 700px)'
    })

    return (
        <Container smallHeight={smallHeight}>
            {isMobile ?
                <ImageStyle src={images.images.mobileImage} layout="responsive" />
                : <ImageStyle src={images.images.desktopImage} layout="responsive" />
            }
            <Content>
                <Subtitle>{subtitle}</Subtitle>
                <LargeTitle align="center" color="var(--white)">{images.title}</LargeTitle>
            </Content>
            <BackDrop />
        </Container>
    )
}

export default HeroImage
const Container = styled.div`
position: relative;
width: 100%;
padding-bottom: ${props => props.smallHeight ? "30%" : "43.75%"};
@media (min-width:1700px ){
    padding-bottom: 37%;
    padding-bottom: ${props => props.smallHeight ? "20%" : "37%"};

}
@media (max-width: 700px){ 
    padding-bottom: 100%;
}
@media (max-width: 400px){ 
    padding-bottom: 120%;
}
`
const ImageStyle = styled(Image)`
object-fit: cover;
`
const Content = styled.div`
    position: absolute;
    z-index: 10;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 1200px;
    text-transform: capitalize;
`
const Subtitle = styled.h2`
text-align: center;
color: var(--white);
text-transform: uppercase;
letter-spacing: 1rem;
margin-bottom: -10px;
`
const BackDrop = styled.div`
background: rgba(0,0,0,0.3); 
position: absolute;
z-index: 1;
width: 100%;
height: 100%;
`