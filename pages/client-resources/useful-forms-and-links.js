import Head from 'next/head'
import React from 'react'
import Questionnaire from '../../Components/Pages/Home/ClientResources/Questionnaire'
import getHeroImageData from '../../util/get-hero-image-data'
import getTechnologyPartners from '../../util/get-technology-parnters'
import getQuestionnaireData from '../../util/get-questionnaire-data'
import getPage from '../../util/get-page'
import UsefulFormsLinks from '../../Components/Pages/Home/ClientResources/UsefulFormsLinks'
import getUsefulFormsLinks from '../../util/get-useful-forms-links'
export default function QuestionnairePage(props) {
    console.log(props)
    return (
        < React.Fragment >
            <Head>
                <title>Bay Accounting | Useful Forms & Links</title>
            </Head>

            <UsefulFormsLinks
                heroImageData={props.heroImageData}
                usefulFormsLinksData={props.usefulFormsLinksData}
                technologyPartnersData={props.technologyPartnersData}
                pageData={props.pageData}
            />
        </React.Fragment >
    )
}

export async function getStaticProps(context) {
    // get home page data using category from hero images 
    const heroImageData = await getHeroImageData("useful-forms-and-links")
    const usefulFormsLinksData = await getUsefulFormsLinks()
    const technologyPartnersData = await getTechnologyPartners()
    const pageData = await getPage("useful-forms-links")

    return {
        props: {
            heroImageData: {
                images: {
                    desktopImage: heroImageData[0].image,
                    mobileImage: heroImageData[0].acf.mobileImage,
                },
                title: heroImageData[0].title,
            },
            usefulFormsLinksData: usefulFormsLinksData,
            technologyPartnersData: technologyPartnersData,
            pageData: pageData
        },
        revalidate: 10
    }


}