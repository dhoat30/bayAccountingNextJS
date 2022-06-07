import React from 'react'
import SectionTitle from '../../../UI/Titles/Titles/SectionTitle'
import styled from 'styled-components'
import TeamCards from '../../../UI/Cards/TeamCards'
function TeamMembers({ teamMembersData }) {
    console.log(teamMembersData)
    const teamMembersCard = teamMembersData.map(item => {
        return (
            <TeamCards
                key={item.id}
                name={item.title.rendered}
                jobTitle={item.acf.job_title}
                email={item.acf.email}
                image={item._embedded['wp:featuredmedia']['0'].source_url}
                teamBody={item.acf.about_team_member}
            />
        )
    })
    return (
        <Container>
            <SectionTitle align="center" subtitle="Meet Our Team">Team Members</SectionTitle>
            <CardsContainer>
                {teamMembersCard}
            </CardsContainer>

        </Container>
    )
}

export default TeamMembers
const Container = styled.section`
max-width: 1500px;
margin: 0 auto;
padding: 100px 10px;
`
const CardsContainer = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
`