import Head from 'next/head'
import React, { useContext } from 'react'
import getHeroImageData from '../../util/get-hero-image-data'
import getTechnologyPartners from '../../util/get-technology-parnters'
import AboutUs from '../../Components/Pages/AboutUs/AboutUs'
import getPage from '../../util/get-page'
import getTeamMembers from '../../util/get-team-members'

export default function AboutUsPage(props) {
    console.log(props)
    return (
        < React.Fragment >
            <Head>
                <title>Bay Accounting | Accounting Services</title>
            </Head>
            <AboutUs
                heroImageData={props.heroImageData}
                pageData={props.pageData}
                teamMembersData={props.teamMembersData}
                technologyPartnersData={props.technologyPartnersData}
            />
        </React.Fragment >
    )
}

export async function getStaticProps(context) {
    // get home page data using category from hero images 
    const heroImageData = await getHeroImageData('about-us')
    const pageData = await getPage("about-us")
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
            pageData: pageData,
            technologyPartnersData: technologyPartnersData,
            teamMembersData: teamMembersData,
        },
        revalidate: 10
    }


}