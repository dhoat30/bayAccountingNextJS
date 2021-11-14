import React, { useContext } from 'react'
import BackGround from '../../UI/BackGround/BackGround'
import HeroImage from '../../UI/Hero/HeroImage'
import SectionTitle from '../../UI/Titles/Titles/SectionTitle'
import styled from 'styled-components'
import ServiceCard from '../../UI/Cards/ServiceCard'
import Image from 'next/image'
import ColumnTitle from '../../UI/Titles/Titles/ColumnTitle'
import Paragraph from '../../UI/Titles/Paragraph/Paragraph'
function OurCommunityWork({ heroImageData, communityWorkData, }) {

    const serviceCard = communityWorkData.map(item => {
        console.log(item)
        return (
            // <Card
            //     key={item.id}
            //     image={item.acf.archive_page_image.url}
            //     title={item.title.rendered}
            //     excerpt={item.excerpt.rendered}
            //     slug={item.slug}
            // />
            <Card key={item.id}>

                <ImageContainer>
                    <ImageStyle src={item.acf.archive_page_image.url} layout="fill" alt={item.title.rendered} />
                </ImageContainer>
                <Content>
                    <ColumnTitle fontWeight={700}>{item.title.rendered}</ColumnTitle>
                    <Paragraph setDangerHtml={true}>{item.content.rendered}</Paragraph>
                </Content>
            </Card>
        )
    })
    return (
        <div>
            <HeroImage images={heroImageData} />
            <BackGround>
                <SectionTitle align="center" subtitle="Our Community">Work</SectionTitle>
                <Container>
                    <CardsContainer>
                        {serviceCard}
                    </CardsContainer>
                </Container>
            </BackGround>
        </div>
    )
}

export default OurCommunityWork


const Container = styled.div`
    
        margin: 50px auto;
    max-width: 1500px;
    padding: 0 20px;
    @media (max-width: 400px ){ 
            padding: 0 10px;
        }
`
const CardsContainer = styled.div`
display:flex; 
flex-direction: column;
margin-top: 30px;
`
const Card = styled.div`
    display: flex;
    margin: 0px 0 50px 0;
    background: white;
    padding: 20px;
    box-shadow: var(--boxShadow);
`
const ImageContainer = styled.div`
    width: 100%; 
    position: relative;
    max-width: 400px; 
    height: auto;
    min-width: 300px;
    min-height: 300px;
`
const ImageStyle = styled(Image)`
    object-fit: cover; 
`
const Content = styled.div`
width: 100%; 
margin-left: 30px;
`