import React from 'react'
import BackGround from '../../../UI/BackGround/BackGround'
import Button from '../../../UI/Button/Button'
import styled from 'styled-components'
import SectionTitle from '../../../UI/Titles/Titles/SectionTitle'
import ServiceCard from '../../../UI/Cards/ServiceCard'
function ServicesSection({ servicesData }) {
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
        <BackGround>
            {/* <ButtonContainer>
                <Button >Consult Now</Button>
                <Button bkColor="var(--white)">Our Services</Button>
            </ButtonContainer> */}

            <Container>
                <SectionTitle subtitle="Our Services" align="center">We Provide Most Exclusive Services For Business</SectionTitle>
                <CardsContainer>
                    {serviceCard}
                </CardsContainer>
            </Container>
        </BackGround>

    )
}

export default ServicesSection
const ButtonContainer = styled.div`
width: 470px;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
align-items: center;
margin: 0 auto;
padding: 0 10px;
@media (max-width: 600px){ 
    flex-direction: column;
    height: 140px;
    width: 100%;
}
`

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