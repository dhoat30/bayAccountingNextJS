import React from 'react'
import OurTechnologyPartners from '../../OurTechnologyPartners/OurTechnologyPartners'
import BackGround from '../../UI/BackGround/BackGround'
import HeroImage from '../../UI/Hero/HeroImage'
import TeamMembers from '../Home/TeamMembers/TeamMembers'
import styled from 'styled-components'
function MeetOurTeam({ heroImageData, teamMembersData, technologyPartnersData }) {
    console.log(heroImageData)
    return (
        <div>
            <HeroImage images={heroImageData} />
            <BackGround>
                {/* <TeamMembers teamMembersData={teamMembersData} /> */}
            </BackGround>

            <TechnologyContainer>
                <OurTechnologyPartners technologyPartnersData={technologyPartnersData} />
            </TechnologyContainer>
        </div>
    )
}

export default MeetOurTeam
const TechnologyContainer = styled.div`
margin: 100px auto;
max-width: 1500px;
`

