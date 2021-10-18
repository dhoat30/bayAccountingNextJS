import React from 'react'
import HeroImage from '../../../UI/Hero/HeroImage'
import styled from 'styled-components'
import OurTechnologyPartners from '../../../OurTechnologyPartners/OurTechnologyPartners'
import SectionTitle from '../../../UI/Titles/Titles/SectionTitle'
import Paragraph from '../../../UI/Titles/Paragraph/Paragraph'
import Accordion from '../../../UI/Accordion/Accordion'
import Sidebar from '../../../UI/Sidebar/Sidebar'
function Taxation({ heroImageData, servicesData, technologyPartnersData }) {
    // getting the current page service 
    const singleServiceData = servicesData.filter(item => {
        return item.slug.includes("taxation")
    })
    // accordion
    const accordionCards = singleServiceData[0].acf.flexible_content[1].accordion.map((item, index) => {
        return (
            <Accordion
                key={index}
                title={item.title}
                content={item.content}
            />
        )
    })
    // accordion
    const taxShieldAccordion = singleServiceData[0].acf.flexible_content[2].accordion.map((item, index) => {
        return (
            <Accordion
                key={index}
                title={item.title}
                content={item.content}
            />
        )
    })

    // service list data
    const servicesListData = servicesData.map(item => {
        return {
            title: item.title.rendered,
            slug: item.slug,
            id: item.id
        }
    })
    return (
        <div>
            <HeroImage images={heroImageData} smallHeight={true} />
            <FlexBox>
                <Content>
                    <TaxationContainer>
                        <SectionTitle fontWeight="600"> {singleServiceData[0].acf.flexible_content[0].title}</SectionTitle>
                        <Paragraph>{singleServiceData[0].acf.flexible_content[0].content}</Paragraph>
                    </TaxationContainer>

                    <TaxAuditContainer>
                        <SectionTitle fontWeight="600"> {singleServiceData[0].acf.flexible_content[1].title}</SectionTitle>
                        <Paragraph>{singleServiceData[0].acf.flexible_content[1].content}</Paragraph>

                        <AccordionContainer>
                            {accordionCards}
                        </AccordionContainer>
                    </TaxAuditContainer>


                    <AuditShieldContainer>
                        <SectionTitle fontWeight="600"> {singleServiceData[0].acf.flexible_content[2].title}</SectionTitle>
                        <Paragraph>{singleServiceData[0].acf.flexible_content[2].content}</Paragraph>

                        <AccordionContainer>
                            {taxShieldAccordion}
                        </AccordionContainer>
                    </AuditShieldContainer>

                </Content>
                <SideBarContainer>
                    <Sidebar servicesListData={servicesListData} />
                </SideBarContainer>
            </FlexBox>

            <TechnologyContainer>
                <OurTechnologyPartners technologyPartnersData={technologyPartnersData} />
            </TechnologyContainer>
        </div>
    )
}

export default Taxation
const FlexBox = styled.section`
max-width: 1500px; 
padding: 0 10px ;
margin: 0 auto;
display:flex; 

justify-content: space-between;
`
const Content = styled.div`
width: 100%;

`
const SideBarContainer = styled.section`
    width: 100%;
    max-width: 350px;
    margin-top: 110px;
    margin-left: 50px;
`
const TaxationContainer = styled.div`
margin-top: 100px;
`

const TaxAuditContainer = styled.div`
margin-top: 100px;
`

const AccordionContainer = styled.div`
margin-top: 20px;
`
const AuditShieldContainer = styled.div`
margin-top: 100px;
`
const TechnologyContainer = styled.div`
margin: 100px auto;
max-width: 1500px;
`
