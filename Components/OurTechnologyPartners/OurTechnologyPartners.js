import React from 'react'
import SectionTitle from '../UI/Titles/Titles/SectionTitle'
import styled from 'styled-components'
import Image from 'next/image'
function OurTechnologyPartners({ technologyPartnersData }) {
    const imageCards = technologyPartnersData.map(item => {
        return (
            <ImageContainer key={item.id}>
                <ImageStyle src={item._embedded['wp:featuredmedia']['0'].source_url} alt={item.title.rendered} layout="fixed" width={200} height={100} />
            </ImageContainer>
        )
    })
    return (
        <Container>
            <SectionTitle subtitle="tools" align="center">Our Technology Partners</SectionTitle>
            <CardsContainer>
                {imageCards}
            </CardsContainer>
        </Container>
    )
}

export default OurTechnologyPartners
const Container = styled.div`
max-width: 1500px ;
padding: 0 10px;
margin: 0 auto;
`
const CardsContainer = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
margin-top: 30px;
`
const ImageContainer = styled.div`
margin: 0 20px;
`
const ImageStyle = styled(Image)`
object-fit: scale-down;
`