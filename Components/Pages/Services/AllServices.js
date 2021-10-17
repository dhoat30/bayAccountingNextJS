import React from 'react'
import BackGround from '../../UI/BackGround/BackGround'
import HeroImage from '../../UI/Hero/HeroImage'
function AllServices({ heroImageData, servicesData }) {
    console.log(heroImageData)
    return (
        <div>
            <HeroImage images={heroImageData} />
            <BackGround />
        </div>
    )
}

export default AllServices
