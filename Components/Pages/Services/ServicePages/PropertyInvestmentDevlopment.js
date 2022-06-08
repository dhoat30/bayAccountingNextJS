import React from 'react'
import HeroImage from '../../../UI/Hero/HeroImage'
import styled from 'styled-components'
import OurTechnologyPartners from '../../../OurTechnologyPartners/OurTechnologyPartners'
import SectionTitle from '../../../UI/Titles/Titles/SectionTitle'
import Paragraph from '../../../UI/Titles/Paragraph/Paragraph'
import Sidebar from '../../../UI/Sidebar/Sidebar'
import ListItems from '../../../UI/ListItems/ListItems'
import MediumTitle from '../../../UI/Titles/Titles/MediumTitle'
function PropertyInvestmentDevelopment({ heroImageData, servicesData, technologyPartnersData }) {
    // getting the current page service 
    const singleServiceData = servicesData.filter(item => {
        return item.slug.includes("investment")
    })

    // service list data
    const servicesListData = servicesData.map(item => {
        return {
            title: item.title.rendered,
            slug: item.slug,
            id: item.id
        }
    })
    console.log(singleServiceData[0].acf)
    // list items cards 
    const helpCards = singleServiceData[0].acf.flexible_content[1].list_items.map((item, index) => {
        return (
            <ListItems listContent={item.list_item} key={index} />
        )
    })

    // list items cards 
    const investerCards = singleServiceData[0].acf.flexible_content[2].list_items.map((item, index) => {
        return (
            <ListItems listContent={item.list_item} key={index} showDots={true} />
        )
    })

    // list items cards 
    const strategyCards = singleServiceData[0].acf.flexible_content[3].list_items.map((item, index) => {
        return (
            <ListItems listContent={item.list_item} key={index} showDots={true} />
        )
    })

    return (
        <div>
            <HeroImage images={heroImageData} smallHeight={true} />
            <FlexBox>
                <Content>

                    <ListContainer>

                        <SectionTitleStyle fontWeight="600"> {singleServiceData[0].acf.flexible_content[1].title}</SectionTitleStyle>
                        {helpCards}
                    </ListContainer>

                    <ListContainer>
                        <SectionTitleStyle fontWeight="600">{singleServiceData[0].acf.flexible_content[2].title}</SectionTitleStyle>
                        {investerCards}
                    </ListContainer>

                    <ListContainer>
                        <SectionTitleStyle fontWeight="600">{singleServiceData[0].acf.flexible_content[3].title}</SectionTitleStyle>
                        {strategyCards}
                    </ListContainer>
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

export default PropertyInvestmentDevelopment

const FlexBox = styled.section`
max-width: 1500px; 
padding: 0 20px ;
margin: 0 auto;
display:flex; 
justify-content: space-between;
@media (max-width: 400px ){ 
        padding: 0 10px;
    }
`
const Content = styled.div`
width: 100%;

`
const SideBarContainer = styled.section`
    width: 100%;
    max-width: 350px;
    margin-top: 110px;
    margin-left: 50px;
    @media (max-width: 1000px ){ 
        display: none;
    }
`
const PayrollContainer = styled.div`
margin-top: 100px;
`

const ListContainer = styled.div`
margin-top: 50px;
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

const SectionTitleStyle = styled(SectionTitle)`
font-size: 2rem; 
@media(max-width: 1000px){ 
    font-size: 1.5rem; 
}
`