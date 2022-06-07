import Head from 'next/head'
import React from 'react'
import getHeroImageData from '../../../util/get-hero-image-data'
import getServices from '../../../util/get-services'
import getTechnologyPartners from '../../../util/get-technology-parnters'
import GSTPayroll from '../../../Components/Pages/Services/ServicePages/GSTPayroll'

export default function GSTPayrollServices(props) {

    return (
        < React.Fragment >
            <Head>
            </Head>

            <GSTPayroll
                heroImageData={props.heroImageData}
                servicesData={props.servicesData.reverse()}
                technologyPartnersData={props.technologyPartnersData}
            />

        </React.Fragment >
    )
}

export async function getStaticProps(context) {
    // get home page data using category from hero images 
    const heroImageData = await getHeroImageData('gst-payroll')
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