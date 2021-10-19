import React from 'react'
import BackGround from '../../UI/BackGround/BackGround'
import HeroImage from '../../UI/Hero/HeroImage'
import SectionTitle from '../../UI/Titles/Titles/SectionTitle'
import ServicesSection from '../Home/ServicesSection/ServicesSection'

function OurCommunityWork({ heroImageData, communityWorkData, }) {
    const image = communityWorkData.map(item => {
        console.log(item.acf.archive_page_image)
    })
    return (
        <div>
            <HeroImage images={heroImageData} />
            <BackGround>
                <SectionTitle align="center" subtitle="Our Community">Work</SectionTitle>
                <ServicesSection servicesData={communityWorkData} />
            </BackGround>
        </div>
    )
}

export default OurCommunityWork
