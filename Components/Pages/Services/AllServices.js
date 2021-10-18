import React from 'react'
import BackGround from '../../UI/BackGround/BackGround'
import HeroImage from '../../UI/Hero/HeroImage'
import styled from 'styled-components'
import ServiceCard from '../../UI/Cards/ServiceCard'
import SectionTitle from '../../UI/Titles/Titles/SectionTitle'
import OurTechnologyPartners from '../../OurTechnologyPartners/OurTechnologyPartners'
function AllServices({ heroImageData, servicesData, technologyPartnersData }) {
    const serviceCard = servicesData.map(item => {
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
            <HeroImage images={heroImageData} smallHeight={true} />
            <BackGround>
                <Container>
                    <SectionTitle subtitle="Our Services" align="center">We Provide Most Exclusive Services For Business</SectionTitle>
                    <CardsContainer>
                        {serviceCard}
                    </CardsContainer>
                </Container>
            </BackGround>
            <TechnologyContainer>
                <OurTechnologyPartners technologyPartnersData={technologyPartnersData} />
            </TechnologyContainer>
        </div>
    )
}

export default AllServices
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

const TechnologyContainer = styled.div`
margin: 100px auto;
max-width: 1500px;
`