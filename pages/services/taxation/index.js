import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import HomePage from '../../../Components/Pages/Home/Home'
import AllServices from '../../../Components/Pages/Services/AllServices'
import Taxation from '../../../Components/Pages/Services/ServicePages/Taxation'
import getHeroImageData from '../../../util/get-hero-image-data'
import getServices from '../../../util/get-services'
import getTeamMembers from '../../../util/get-team-members'
import getTechnologyPartners from '../../../util/get-technology-parnters'
import getTestimonials from '../../../util/get-testimonials'

export default function TaxationPage(props) {
    console.log(props)
    return (
        < React.Fragment >
            <Head>
                <title>Inspiry | Live an Inspired Life | Find Trade Professionals and Projects</title>
            </Head>
            <Taxation
                heroImageData={props.heroImageData}
                servicesData={props.servicesData}
                technologyPartnersData={props.technologyPartnersData}
            />

        </React.Fragment >
    )
}

export async function getStaticProps(context) {
    // get home page data using category from hero images 
    const heroImageData = await getHeroImageData('taxation')
    const servicesData = await getServices()
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
            servicesData: servicesData,
            technologyPartnersData: technologyPartnersData,

        },
        revalidate: 86400
    }


}