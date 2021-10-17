import React from 'react'
import ContactSection from '../../ContactSection/ContactSection'
import OurTechnologyPartners from '../../OurTechnologyPartners/OurTechnologyPartners'
import Testimonials from '../../Testimonials/Testimonials'
import HeroImage from '../../UI/Hero/HeroImage'
import ServicesSection from './ServicesSection/ServicesSection'
import TeamMembers from './TeamMembers/TeamMembers'

function Home({ imageData, servicesData, teamMembersData, technologyPartnersData, testimonialsData }) {
    return (
        <div>
            <HeroImage images={imageData} subtitle="Bay Accounting" />
            <ServicesSection servicesData={servicesData} />
            <TeamMembers teamMembersData={teamMembersData} />
            <OurTechnologyPartners technologyPartnersData={technologyPartnersData} />
            <Testimonials testimonialsData={testimonialsData} />
            <ContactSection />
        </div>
    )
}

export default Home
