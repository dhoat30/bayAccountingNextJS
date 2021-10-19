import React from 'react'
import HeroImage from '../../../UI/Hero/HeroImage'
import styled from 'styled-components'
import OurTechnologyPartners from '../../../OurTechnologyPartners/OurTechnologyPartners'
import SectionTitle from '../../../UI/Titles/Titles/SectionTitle'
import Paragraph from '../../../UI/Titles/Paragraph/Paragraph'
import Sidebar from '../../../UI/Sidebar/Sidebar'
import ImageTitleContent from '../../../UI/ImageTitleContent/ImageTitleContent'
import Image from 'next/image'
import MediumTitle from '../../../UI/Titles/Titles/MediumTitle'

function BudgetCashFlow({ heroImageData, servicesData, technologyPartnersData }) {
    // getting the current page service 

    const singleServiceData = servicesData.filter(item => {
        return item.slug.includes("budgets-cashflow")
    })

    // service list data
    const servicesListData = servicesData.map(item => {
        return {
            title: item.title.rendered,
            slug: item.slug,
            id: item.id
        }
    })

    console.log(singleServiceData)
    // list items cards 
    // skip the first two array indexes 
    const specializeCards = singleServiceData[0].acf.flexible_content.map((item, index) => {
        if (index === 0 || index === 1) {
            return null
        }
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
                    <TitleContentContainer>
                        <SectionTitle fontWeight="600"> {singleServiceData[0].acf.flexible_content[0].title}</SectionTitle>
                        <Paragraph setDangerHtml={true}>{singleServiceData[0].acf.flexible_content[0].content}</Paragraph>
                    </TitleContentContainer>

                    <TitleContentImage>
                        <ImageTitleContent
                            image={singleServiceData[0].acf.flexible_content[1].image}
                            title={singleServiceData[0].acf.flexible_content[1].title}
                            content={singleServiceData[0].acf.flexible_content[1].content}
                        />
                    </TitleContentImage>

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

export default BudgetCashFlow

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
const TitleContentContainer = styled.section`
margin-top: 100px;
`
const TitleContentImage = styled.section`
    margin-top: 100px;
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
const TechnologyContainer = styled.div`
margin: 100px auto;
max-width: 1500px;
`
