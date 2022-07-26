import React, { useContext } from 'react'
import BackGround from '../../UI/BackGround/BackGround'
import HeroImage from '../../UI/Hero/HeroImage'
import SectionTitle from '../../UI/Titles/Titles/SectionTitle'
import styled from 'styled-components'
import ServiceCard from '../../UI/Cards/ServiceCard'
import Image from 'next/image'
import ColumnTitle from '../../UI/Titles/Titles/ColumnTitle'
import Paragraph from '../../UI/Titles/Paragraph/Paragraph'
import GalleryComponent from './GalleryComponent'
function OurCommunityWork({ heroImageData, communityWorkData, }) {

    const serviceCard = communityWorkData.map(item => {
        return (
            // <Card
            //     key={item.id}
            //     image={item.acf.archive_page_image.url}
            //     title={item.title.rendered}
            //     excerpt={item.excerpt.rendered}
            //     slug={item.slug}
            // />
            <Card key={item.id}>

                {/* <ImageContainer>
                    <ImageStyle src={item.acf.archive_page_image.url } layout="fill" alt={item.title.rendered} />
                </ImageContainer> */}
                <Content>
                    <ColumnTitle fontWeight={700}>{item.title.rendered}</ColumnTitle>
                    <ParagraphStyle setDangerHtml={true}>{item.content.rendered}</ParagraphStyle>

                </Content>
                <GalleryComponent galleryData={item.acf.gallery} />
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
    flex-direction: column;
    margin: 0px 0 50px 0;
  
    background: white;
    padding: 20px;
    box-shadow: var(--boxShadow);
    @media (max-width: 400px ){ 
            padding: 10px 10px;
            width:100% ;
        }
    ul{ 
        list-style: disc;  
        margin-left: 30px;
        font-size: 1rem;  
        margin-top:-10px; 
    }
    p{ 
        font-size: 1rem; 
    }
`
// const ImageContainer = styled.div`
//     width: 100%; 
//     position: relative;
//     max-width: 400px; 
//     height: auto;
//     min-width: 300px;
//     min-height: 300px;
// `
// const ImageStyle = styled(Image)`
//     object-fit: cover; 
// `
const Content = styled.div`
margin: 0 20px;
`


const ListContainer = styled.div`
margin-top: 50px;
`

const SectionTitleStyle = styled(SectionTitle)`
font-size: 2rem; 
@media(max-width: 1000px){ 
    font-size: 1.5rem; 
}
`

const ParagraphStyle = styled(Paragraph)`
margin-top: 10px;
`