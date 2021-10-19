import React from 'react'
import HeroImage from '../../../UI/Hero/HeroImage'
import styled from 'styled-components'
import OurTechnologyPartners from '../../../OurTechnologyPartners/OurTechnologyPartners'
import SectionTitle from '../../../UI/Titles/Titles/SectionTitle'
import Sidebar from '../../../UI/Sidebar/Sidebar'
import ListItems from '../../../UI/ListItems/ListItems'
function BuyingSettingUpNewBusiness({ heroImageData, servicesData, technologyPartnersData }) {
    // getting the current page service 
    const singleServiceData = servicesData.filter(item => {
        return item.slug.includes("new-business")
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
    // // list items cards 
    const helpCards = singleServiceData[0].acf.flexible_content[0].list_items.map((item, index) => {
        return (
            <ListItems listContent={item.list_item} key={index} />
        )
    })


    return (
        <div>
            <HeroImage images={heroImageData} smallHeight={true} />
            <FlexBox>
                <Content>
                    <FirstContainer>
                        <SectionTitle fontWeight="600"> {singleServiceData[0].acf.flexible_content[0].title}</SectionTitle>
                        {helpCards}
                    </FirstContainer>

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

export default BuyingSettingUpNewBusiness

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
const FirstContainer = styled.div`
margin-top: 100px;
`
const TechnologyContainer = styled.div`
margin: 100px auto;
max-width: 1500px;
`
