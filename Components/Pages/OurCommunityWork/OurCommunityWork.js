import React from 'react'
import BackGround from '../../UI/BackGround/BackGround'
import HeroImage from '../../UI/Hero/HeroImage'
import SectionTitle from '../../UI/Titles/Titles/SectionTitle'
import styled from 'styled-components'
import ServiceCard from '../../UI/Cards/ServiceCard'
function OurCommunityWork({ heroImageData, communityWorkData, }) {

    const serviceCard = communityWorkData.map(item => {
        return (
            <ServiceCard
                key={item.id}
                image={item.acf.archive_page_image.url}
                title={item.title.rendered}
                excerpt={item.excerpt.rendered}
                slug={item.slug}
            />
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
    margin: 70px auto 0 auto ; 
    max-width: 1500px;
    padding: 0 10px;
`
const CardsContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
margin-top: 30px;

`