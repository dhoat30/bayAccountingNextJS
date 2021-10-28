import Head from 'next/head'
import React from 'react'
import Questionnaire from '../../Components/Pages/Home/ClientResources/Questionnaire'
import getHeroImageData from '../../util/get-hero-image-data'
import getTechnologyPartners from '../../util/get-technology-parnters'
import getQuestionnaireData from '../../util/get-questionnaire-data'
import getPage from '../../util/get-page'
import News from '../../Components/Pages/News/News'
import getNews from '../../util/get-news'
export default function NewsPage(props) {
    return (
        < React.Fragment >
            <Head>
                <title>Bay Accounting | Accounting Services</title>
            </Head>
            <News
                heroImageData={props.heroImageData}
                newsData={props.newsData}
            />



        </React.Fragment >
    )
}

export async function getStaticProps(context) {
    // get home page data using category from hero images 
    const heroImageData = await getHeroImageData("news")
    const newsData = await getNews()

    return {
        props: {
            heroImageData: {
                images: {
                    desktopImage: heroImageData[0].image,
                    mobileImage: heroImageData[0].acf.mobileImage,
                },
                title: heroImageData[0].title,
            },
            newsData: newsData,
        },
        revalidate: 86400
    }


}