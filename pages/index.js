import cookie from 'cookie'
import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import HomePage from '../Components/Pages/Home/Home'
import getHeroImageData from '../util/get-hero-image-data'
import getServices from '../util/get-services'
import getTeamMembers from '../util/get-team-members'
import getTechnologyPartners from '../util/get-technology-parnters'
import getTestimonials from '../util/get-testimonials'

export default function Home(props) {
  console.log(props)
  return (
    < React.Fragment >
      <Head>
        <title>Inspiry | Live an Inspired Life | Find Trade Professionals and Projects</title>
      </Head>
      <HomePage
        imageData={props.heroImageData}
        servicesData={props.servicesData}
        teamMembersData={props.teamMembersData}
        technologyPartnersData={props.technologyPartnersData}
        testimonialsData={props.testimonialsData}
      />
    </React.Fragment >
  )
}

export async function getStaticProps(context) {
  // get home page data using category from hero images 
  const data = await getHeroImageData('home-page')
  const servicesData = await getServices()
  const teamMembersData = await getTeamMembers()
  const technologyPartnersData = await getTechnologyPartners()
  const testimonialsData = await getTestimonials()
  return {
    props: {
      heroImageData: {
        images: {
          desktopImage: data[0].image,
          mobileImage: data[0].acf.mobileImage,
        },
        title: data[0].title,
      },
      servicesData: servicesData,
      teamMembersData: teamMembersData,
      technologyPartnersData: technologyPartnersData,
      testimonialsData: testimonialsData

    },
    revalidate: 10
  }


}