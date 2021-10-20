import cookie from 'cookie'
import Head from 'next/head'
import React from 'react'
import OurCommunityWork from '../../Components/Pages/OurCommunityWork/OurCommunityWork'
import getCommunityWork from '../../util/get-community-work'
import getHeroImageData from '../../util/get-hero-image-data'

export default function OurCommunityWorkPage(props) {
  return (
    < React.Fragment >
      <Head>
        <title>Bay Accounting | Accounting Services</title>
      </Head>
      <OurCommunityWork
        heroImageData={props.heroImageData}
        communityWorkData={props.communityWorkData}
      />

    </React.Fragment >
  )
}

export async function getStaticProps(context) {
  // get home page data using category from hero images 
  const heroImageData = await getHeroImageData("community-work")
  const communityWorkData = await getCommunityWork()
  return {
    props: {
      heroImageData: {
        images: {
          desktopImage: heroImageData[0].image,
          mobileImage: heroImageData[0].acf.mobileImage,
        },
        title: heroImageData[0].title,
      },
      communityWorkData: communityWorkData,

    },
    revalidate: 10
  }


}