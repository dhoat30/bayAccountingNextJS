import Head from 'next/head'
import React from 'react'
import getHeroImageData from '../../util/get-hero-image-data'
import getTechnologyPartners from '../../util/get-technology-parnters'
import AboutUs from '../../Components/Pages/AboutUs/AboutUs'
import getPage from '../../util/get-page'

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
                technologyPartnersData={props.technologyPartnersData}
            />
        </React.Fragment >
    )
}

export async function getStaticProps(context) {
    // get home page data using category from hero images 
    const heroImageData = await getHeroImageData('about-us')
    const pageData = await getPage("about-us")
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

        },
        revalidate: 10
    }


}