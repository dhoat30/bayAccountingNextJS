import Head from 'next/head'
import React from 'react'
import getHeroImageData from '../../../util/get-hero-image-data'
import getServices from '../../../util/get-services'
import getTechnologyPartners from '../../../util/get-technology-parnters'
import BuyingSettingUpNewBusiness from '../../../Components/Pages/Services/ServicePages/BuyingSettingUpNewBusiness'

export default function BuyingNewBusiness(props) {

    return (
        < React.Fragment >
            <Head>
            </Head>
            <BuyingSettingUpNewBusiness
                heroImageData={props.heroImageData}
                servicesData={props.servicesData}
                technologyPartnersData={props.technologyPartnersData}
            />

        </React.Fragment >
    )
}

export async function getStaticProps(context) {
    // get home page data using category from hero images 
    const heroImageData = await getHeroImageData('buying-setting-up-new-business')
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