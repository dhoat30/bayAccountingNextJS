import cookie from 'cookie'
import Head from 'next/head'
import React from 'react'
import Questionnaire from '../../Components/Pages/Home/ClientResources/Questionnaire'
import getHeroImageData from '../../util/get-hero-image-data'
import getTechnologyPartners from '../../util/get-technology-parnters'
import getQuestionnaireData from '../../util/get-questionnaire-data'
import getPage from '../../util/get-page'
export default function QuestionnairePage(props) {
    console.log(props)
    return (
        < React.Fragment >
            <Head>
                <title>Bay Accounting | Accounting Services</title>
            </Head>
            <Questionnaire
                heroImageData={props.heroImageData}
                questionnaireData={props.questionnaireData}
                technologyPartnersData={props.technologyPartnersData}
                pageData={props.pageData}
            />


        </React.Fragment >
    )
}

export async function getStaticProps(context) {
    // get home page data using category from hero images 
    const heroImageData = await getHeroImageData("questionnaire")
    const questionnaireData = await getQuestionnaireData()
    const technologyPartnersData = await getTechnologyPartners()
    const pageData = await getPage("questionnaire")
    return {
        props: {
            heroImageData: {
                images: {
                    desktopImage: heroImageData[0].image,
                    mobileImage: heroImageData[0].acf.mobileImage,
                },
                title: heroImageData[0].title,
            },
            questionnaireData: questionnaireData,
            technologyPartnersData: technologyPartnersData,
            pageData: pageData
        },
        revalidate: 86400
    }


}