import React from 'react'
import HeroImage from '../../../UI/Hero/HeroImage'
import styled from 'styled-components'
import OurTechnologyPartners from '../../../OurTechnologyPartners/OurTechnologyPartners'
import SectionTitle from '../../../UI/Titles/Titles/SectionTitle'
import Paragraph from '../../../UI/Titles/Paragraph/Paragraph'
import Sidebar from '../../../UI/Sidebar/Sidebar'
import ListItems from '../../../UI/ListItems/ListItems'
import Image from 'next/image'
import MediumTitle from '../../../UI/Titles/Titles/MediumTitle'
function BusinessAdvisory({ heroImageData, servicesData, technologyPartnersData }) {
    // getting the current page service 
    const singleServiceData = servicesData.filter(item => {
        return item.slug.includes("accounting-services")
    })
    console.log(singleServiceData)
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
    const coreServices = singleServiceData[0].acf.flexible_content[0].list_items.map((item, index) => {
        return (
            <ListItems listContent={item.list_item} key={index} />
        )
    })

    const reportingCards = singleServiceData[0].acf.flexible_content[1].list_items.map((item, index) => {
        return (
            <ListItems listContent={item.list_item} key={index} />
        )
    })

    // list items cards 
    // skip the first two array indexes 
    const specializeCards = singleServiceData[0].acf.flexible_content.map((item, index) => {
        if (index === 0 || index === 1 || index === 2) {
            return null
        }
        console.log(item)
        return (
            <ImageCard key={index}>
                <ImageStyle src={item.image} layout="fixed" width={250} height={200} />
                <MediumTitle align="center">{item.title}</MediumTitle>
            </ImageCard>
        )
    })
    return (
        <div>
            <HeroImage images={heroImageData} smallHeight={true} />
            <FlexBox>
                <Content>
                    <ListContainer>
                        <SectionTitle fontWeight="600"> {singleServiceData[0].acf.flexible_content[0].title}</SectionTitle>
                        {coreServices}
                    </ListContainer>

                    <ListContainer>
                        <SectionTitle fontWeight="600"> {singleServiceData[0].acf.flexible_content[1].title}</SectionTitle>
                        {reportingCards}
                    </ListContainer>

                    <PayrollContainer>
                        <SectionTitle fontWeight="600"> {singleServiceData[0].acf.flexible_content[2].title}</SectionTitle>
                        <Paragraph setDangerHtml={true}>{singleServiceData[0].acf.flexible_content[2].content}</Paragraph>
                    </PayrollContainer>
                    <SpecializeContainer>
                        <SectionTitle fontWeight="600">We specialise in:</SectionTitle>
                        <SpecialFlex>
                            {specializeCards}
                        </SpecialFlex>
                    </SpecializeContainer>
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

export default BusinessAdvisory

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


const SpecializeContainer = styled.section`
margin-top: 100px;
`
const SpecialFlex = styled.div`
display: flex;
flex-wrap: wrap;
`
const ImageCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
max-width: 250px;
background: var(--offWhite);
margin: 20px 50px 20px 0;
`
const ImageStyle = styled(Image)`
object-fit: cover;
`