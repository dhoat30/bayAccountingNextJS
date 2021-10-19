import React from 'react'
import HeroImage from '../../../UI/Hero/HeroImage'
import styled from 'styled-components'
import SectionTitle from '../../../UI/Titles/Titles/SectionTitle'
import Paragraph from '../../../UI/Titles/Paragraph/Paragraph'
import Accordion from '../../../UI/Accordion/Accordion'
import OurTechnologyPartners from '../../../OurTechnologyPartners/OurTechnologyPartners'
function Questionnaire({ heroImageData, questionnaireData, technologyPartnersData, pageData }) {
    console.log(pageData)
    const accordionCards = questionnaireData.map(item => {
        console.log(item)
        return (
            <Accordion key={item.id}
                title={item.title.rendered}
                content={item.content.rendered}
                setDangerHtml={true}
            />
        )
    })
    return (
        <div>
            <HeroImage images={heroImageData} smallHeight={true} />
            <FlexBox>
                <TitleContainer>
                    <Subtitle>Drop A Message</Subtitle>
                    <SectionTitle >{pageData[0].title.rendered}</SectionTitle>
                </TitleContainer>
                <ParagraphStyle setDangerHtml={true}>{pageData[0].content.rendered}</ParagraphStyle>
            </FlexBox>

            <AccordionContainer>
                {accordionCards}
            </AccordionContainer>

            <TechnologyContainer>
                <OurTechnologyPartners technologyPartnersData={technologyPartnersData} />
            </TechnologyContainer>

        </div>
    )
}

export default Questionnaire
const FlexBox = styled.section`
display: flex;
justify-content: space-between;
max-width: 1000px;
margin: 100px auto;
padding: 0 20px;
flex-wrap: wrap;
@media (max-width){ 
    padding: 0 10px; 
}
`
const TitleContainer = styled.div`

`
const ParagraphStyle = styled(Paragraph)`
width: 50%;
@media (max-width: 700px){ 
    width: 100%;
}
`
const Subtitle = styled.h3`
    text-align: center;
    display: inline-block !important;
    position: relative;
    margin: 0 auto;
    color: var(--darkGreen);
    font-size: 1.5rem;
    z-index: 2;
    left: 0%;
    margin-left: 42px;
    &::before{
        position: absolute;
        left: -40px;
        top: 50%;
        transform: translate(0, -50%);
        content: "";
        width: 30px;
        height: 2px;
        background: var(--darkGreen);
        z-index: -1;
    }
`
const AccordionContainer = styled.div`
margin: 0 auto 100px auto;
max-width: 1000px;
padding: 0 20px;
@media (max-width){ 
    padding: 0 10px; 
}
`

const TechnologyContainer = styled.div`
margin: 100px auto;
max-width: 1500px;
`