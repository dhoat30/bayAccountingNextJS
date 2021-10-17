import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import HomePage from '../../Components/Pages/Home/Home'
import AllServices from '../../Components/Pages/Services/AllServices'
import getHeroImageData from '../../util/get-hero-image-data'
import getServices from '../../util/get-services'
import getTeamMembers from '../../util/get-team-members'
import getTechnologyPartners from '../../util/get-technology-parnters'
import getTestimonials from '../../util/get-testimonials'

export default function Home(props) {
    console.log(props)
    return (
        < React.Fragment >
            <Head>
                <title>Inspiry | Live an Inspired Life | Find Trade Professionals and Projects</title>
            </Head>
            <AllServices
                heroImageData={props.heroImageData}
                servicesData={props.servicesData}
            />
        </React.Fragment >
    )
}

export async function getStaticProps(context) {
    // get home page data using category from hero images 
    const heroImageData = await getHeroImageData('all-services')
    const servicesData = await getServices()

    return {
        props: {
            heroImageData: {
                images: {
                    desktopImage: heroImageData[0].image,
                    mobileImage: heroImageData[0].acf.mobileImage,
                },
                title: heroImageData[0].title,
            },
            servicesData: servicesData
        },
        revalidate: 86400
    }


}