import Head from 'next/head'
import React from 'react'
import getHeroImageData from '../../../util/get-hero-image-data'
import getServices from '../../../util/get-services'
import getTechnologyPartners from '../../../util/get-technology-parnters'
import GSTPayroll from '../../../Components/Pages/Services/ServicePages/GSTPayroll'
import BusinessAdvisory from '../../../Components/Pages/Services/ServicePages/BusinessAdvisory'

export default function AccountingServicesPage(props) {

    return (
        < React.Fragment >
            <Head>
            </Head>
            <BusinessAdvisory
                heroImageData={props.heroImageData}
                servicesData={props.servicesData}
                technologyPartnersData={props.technologyPartnersData}
            />
        </React.Fragment >
    )
}

export async function getStaticProps(context) {
    // get home page data using category from hero images 
    const heroImageData = await getHeroImageData('accounting-services')
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
        revalidate: 10
    }


}