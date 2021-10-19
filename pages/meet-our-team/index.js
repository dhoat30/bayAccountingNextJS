import cookie from 'cookie'
import Head from 'next/head'
import React from 'react'
import MeetOurTeam from '../../Components/Pages/MeetOurTeam/MeetOurTeam'
import getHeroImageData from '../../util/get-hero-image-data'
import getTeamMembers from '../../util/get-team-members'
import getTechnologyPartners from '../../util/get-technology-parnters'

export default function Home(props) {
  console.log(props)
  return (
    < React.Fragment >
      <Head>
        <title>Inspiry | Live an Inspired Life | Find Trade Professionals and Projects</title>
      </Head>
      <MeetOurTeam
        heroImageData={props.heroImageData}
        teamMembersData={props.teamMembersData}
        technologyPartnersData={props.technologyPartnersData}
      />

    </React.Fragment >
  )
}

export async function getStaticProps(context) {
  // get home page data using category from hero images 
  const heroImageData = await getHeroImageData("meet-our-team	")
  const teamMembersData = await getTeamMembers()
  const technologyPartnersData = await getTechnologyPartners()
  return {
    props: {
      heroImageData: {
        images: {
          desktopImage: heroImageData[0].image,
          mobileImage: heroImageData[0].acf.mobileImage,
        },
        title: heroImageData[0].title,
      },
      teamMembersData: teamMembersData,
      technologyPartnersData: technologyPartnersData,

    },
    revalidate: 10
  }


}