import React from 'react'
import OurTechnologyPartners from '../../OurTechnologyPartners/OurTechnologyPartners'
import styled from 'styled-components'
import HeroImage from '../../UI/Hero/HeroImage'
import ImageTitleContent from '../../UI/ImageTitleContent/ImageTitleContent'
import TeamMembers from '../Home/TeamMembers/TeamMembers'
function AboutUs({ heroImageData, pageData, technologyPartnersData, teamMembersData }) {
    console.log(teamMembersData)
    return (
        <div>
            <HeroImage images={heroImageData} smallHeight={true} />
            <MainContent>
                <ImageTitleContent
                    title={pageData[0].title.rendered}
                    content={pageData[0].acf.content}
                    listItems={pageData[0].acf.list_items}
                />
            </MainContent>
            {/* <TeamMembers teamMembersData={teamMembersData} /> */}
            <TechnologyContainer>
                <OurTechnologyPartners technologyPartnersData={technologyPartnersData} />
            </TechnologyContainer>
        </div>
    )
}

export default AboutUs
const MainContent = styled.section`
margin: 50px auto;
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
