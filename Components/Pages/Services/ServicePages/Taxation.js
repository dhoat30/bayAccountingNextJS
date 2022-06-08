import React from 'react'
import HeroImage from '../../../UI/Hero/HeroImage'
import styled from 'styled-components'
import OurTechnologyPartners from '../../../OurTechnologyPartners/OurTechnologyPartners'
import SectionTitle from '../../../UI/Titles/Titles/SectionTitle'
import Paragraph from '../../../UI/Titles/Paragraph/Paragraph'
import Accordion from '../../../UI/Accordion/Accordion'
import Sidebar from '../../../UI/Sidebar/Sidebar'
import ListItems from '../../../UI/ListItems/ListItems'
function Taxation({ heroImageData, servicesData, technologyPartnersData }) {
    // getting the current page service 
    const singleServiceData = servicesData.filter(item => {
        return item.slug.includes("taxation")
    })

    // service list data
    const servicesListData = servicesData.map(item => {
        return {
            title: item.title.rendered,
            slug: item.slug,
            id: item.id
        }
    })
    // list items cards 
    const firstList = singleServiceData[0].acf.flexible_content[1].list_items.map((item, index) => {
        return (
            <ListItems listContent={item.list_item} key={index} />
        )
    })

    return (
        <div>
            <HeroImage images={heroImageData} smallHeight={true} />
            <FlexBox>
                <Content>
                    <TaxationContainer>
                        <SectionTitle fontWeight="600"> {singleServiceData[0].acf.flexible_content[0].title}</SectionTitle>
                        <Paragraph setDangerHtml={true}>{singleServiceData[0].acf.flexible_content[0].content}</Paragraph>
                    </TaxationContainer>

                    <TaxAuditContainer>
                        <SectionTitleStyle fontWeight="600">{singleServiceData[0].acf.flexible_content[1].title}</SectionTitleStyle>
                        {firstList}
                    </TaxAuditContainer>


                    <AuditShieldContainer>
                        <SectionTitle fontWeight="600"> {singleServiceData[0].acf.flexible_content[2].title}</SectionTitle>
                        <SectionTitleStyle fontWeight="600">{singleServiceData[0].acf.flexible_content[3].title}</SectionTitleStyle>
                        <Paragraph setDangerHtml={true}>{singleServiceData[0].acf.flexible_content[3].content}</Paragraph>

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
padding: 0 20px ;
margin: 0 auto;
display:flex; 
@media (max-width: 400px ){ 
        padding: 0 10px;
    }

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
    @media (max-width: 1000px ){ 
        display: none;
    }
`
const TaxationContainer = styled.div`
margin-top: 100px;
`

const TaxAuditContainer = styled.div`
`


const AuditShieldContainer = styled.div`
margin-top: 50px;
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