import React from 'react'
import OurTechnologyPartners from '../../OurTechnologyPartners/OurTechnologyPartners'
import styled from 'styled-components'
import HeroImage from '../../UI/Hero/HeroImage'
import ImageTitleContent from '../../UI/ImageTitleContent/ImageTitleContent'
function AboutUs({ heroImageData, pageData, technologyPartnersData }) {
    console.log(pageData[0].acf.image)
    return (
        <div>
            <HeroImage images={heroImageData} smallHeight={true} />
            <MainContent>
                <ImageTitleContent
                    image={pageData[0].acf.image}
                    title={pageData[0].title.rendered}
                    content={pageData[0].acf.content}
                    listItems={pageData[0].acf.list_items}
                />
            </MainContent>
            <TechnologyContainer>
                <OurTechnologyPartners technologyPartnersData={technologyPartnersData} />
            </TechnologyContainer>
        </div>
    )
}

export default AboutUs
const MainContent = styled.section`
margin: 100px auto;
max-width: 1500px;
padding: 0 20px;
@media (max-width: 400px ){ 
        padding: 0 10px;
    }
`
const TechnologyContainer = styled.div`
margin: 100px auto;
max-width: 1500px;
`
