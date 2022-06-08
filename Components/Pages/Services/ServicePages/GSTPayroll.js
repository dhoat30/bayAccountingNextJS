import React from 'react'
import HeroImage from '../../../UI/Hero/HeroImage'
import styled from 'styled-components'
import OurTechnologyPartners from '../../../OurTechnologyPartners/OurTechnologyPartners'
import SectionTitle from '../../../UI/Titles/Titles/SectionTitle'
import Paragraph from '../../../UI/Titles/Paragraph/Paragraph'
import Sidebar from '../../../UI/Sidebar/Sidebar'
import ListItems from '../../../UI/ListItems/ListItems'
import LargeTitle from '../../../UI/Titles/Titles/LargeTitle'
function GSTPayroll({ heroImageData, servicesData, technologyPartnersData }) {
    // getting the current page service 
    const singleServiceData = servicesData.filter(item => {
        return item.slug.includes("gst")
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

    const gstCards = singleServiceData[0].acf.flexible_content[3].list_items.map((item, index) => {
        return (
            <ListItems listContent={item.list_item} key={index} />
        )
    })


    return (
        <div>
            <HeroImage images={heroImageData} smallHeight={true} />
            <FlexBox>
                <Content>
                    <PayrollContainer>
                        <LargeTitle fontWeight="600">{singleServiceData[0].acf.flexible_content[0].title}</LargeTitle>
                        <Paragraph setDangerHtml={true}>{singleServiceData[0].acf.flexible_content[0].content}</Paragraph>
                    </PayrollContainer>

                    <ListContainer>
                        <SectionTitle fontWeight="600"> {singleServiceData[0].acf.flexible_content[1].title}</SectionTitle>
                        {helpCards}
                    </ListContainer>

                    <PayrollContainer>
                        <LargeTitle fontWeight="600">{singleServiceData[0].acf.flexible_content[2].title}</LargeTitle>

                        <Paragraph setDangerHtml={true}>{singleServiceData[0].acf.flexible_content[2].content}</Paragraph>
                    </PayrollContainer>

                    <ListContainer>
                        <SectionTitle fontWeight="600"> {singleServiceData[0].acf.flexible_content[3].title}</SectionTitle>
                        {gstCards}
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

export default GSTPayroll

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
margin-top: 20px;
`

const TechnologyContainer = styled.div`
margin: 100px auto;
max-width: 1500px;
`
