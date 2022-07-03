import React from 'react'
import ContactSection from '../../ContactSection/ContactSection'
import OurTechnologyPartners from '../../OurTechnologyPartners/OurTechnologyPartners'
// import Testimonials from '../../Testimonials/Testimonials'
import HeroImage from '../../UI/Hero/HeroImage'
import ServicesSection from './ServicesSection/ServicesSection'
import TeamMembers from './TeamMembers/TeamMembers'
import Image from 'next/image'
import styled from 'styled-components'
import LargeTitle from '../../UI/Titles/Titles/LargeTitle'
import SectionTitle from '../../UI/Titles/Titles/SectionTitle'
import Button from '../../UI/Button/Button'
import Link from 'next/link'
import PhoneIcon from '../../UI/SVG/PhoneIcon'
import LocationIcon from '../../UI/SVG/LocationIcon'
function Home({ imageData, servicesData, teamMembersData, technologyPartnersData, testimonialsData }) {
    return (
        <section>
            <HeroContainer>
                <Content>
                    <Subtitle>Bay Accounting </Subtitle>
                    <SectionTitle fontWeight="600" align="center">
                        {imageData.title}
                    </SectionTitle>
                    <CTA>
                        <ButtonContainer bkColor={true}>
                            <ButtonStyle bkColor={true} href="tel:075793830" passHref>
                                <Anchor>
                                    <PhoneIconStyle />
                                    07 579 3830
                                </Anchor>
                            </ButtonStyle>
                            <Blob bkColor={true} />
                        </ButtonContainer>
                        <ButtonContainer bkColor={true}>
                            <ButtonStyle bkColor={true} href="/contact" passHref>
                                <Anchor>
                                    <LocationIconStyle />
                                    Contact Us
                                </Anchor>
                            </ButtonStyle>
                            <Blob bkColor={true} />
                        </ButtonContainer>
                    </CTA>

                </Content>
                <ImageContainer>
                    <ImageStyle
                        src={imageData.images.desktopImage}
                        layout="fill"
                    />
                </ImageContainer>
            </HeroContainer>
            {/* <HeroImage images={imageData} subtitle="Bay Accounting" /> */}
            <ServicesSection servicesData={servicesData} />
            {/* <TeamMembers teamMembersData={teamMembersData} /> */}
            <OurTechnologyPartners technologyPartnersData={technologyPartnersData} />
            {/* <Testimonials testimonialsData={testimonialsData} /> */}
            <ContactSection />
        </section>
    )
}

export default Home
const HeroContainer = styled.div`
height:600px;
width: 100%;
position: relative;
    /* @media(max-width: 1000px){ 
    flex-wrap: wrap-reverse; 
    height:auto;
    align-items: flex-end; 
    padding: 0 0 0 0 ;
} */

`
const Content = styled.div`
position:absolute;
width: 95%; 
max-width: 700px; 
 
z-index: 10; 
background: rgba(255,255,255, 1);
padding: 40px 40px;
top: 50%; 
left: 50%;
transform: translate(-50%, -50%);
@media(max-width: 600px){ 
    padding: 30px 10px; 
}
`
const Subtitle = styled.h2`
text-align: center; 

text-transform: uppercase;
letter-spacing: 1rem;
margin-bottom: -10px;
@media(max-width: 500px){ 
    letter-spacing: 0.5rem; 
}
`
const ButtonStyle = styled(Link)`
position: relative;
z-index: 1; 
 background: none;
 cursor: pointer;
 border: none;
 color: ${props => props.bkColor === "var(--white)" ? "rgba(0,0,0,1)" : "white"}; 
`

const CTA = styled.div`
margin: 10px 0 0 0;
display: flex ;
flex-wrap: wrap; 
justify-content: center; 
`
const Blob = styled.div`
position: absolute;
padding: 25px 40px;
background: ${props => props.bkColor === "var(--white)" ? "var(--lightGreen)" : "var(--darkGrey)"}; 
border-radius: 30px;
top: 50%;
right: 20px;
transform: translate(0%,-50%);
z-index: 0;
`
const Anchor = styled.a`
color:  white;
position: relative ;
z-index: 10;
`
const ButtonContainer = styled.div`
margin: 10px 10px 0 0;
  position: relative;
  display: inline; 
  background: ${props => props.bkColor === "var(--white)" ? "var(--white)" : "var(--lightGreen)"}; 
  padding: 15px 50px;
  border: ${props => props.bkColor === "var(--white)" ? "2px solid var(--lightGreen)" : "2px solid rgba(0,0,0,0)"};
border-radius: 50px;
font-size: 1.2rem;
cursor: pointer;
transition: 300ms ease-in-out;
  &:hover{
  background: ${props => props.bkColor === "var(--white)" ? "var(--lightGreen)" : "var(--white)"}; 
  border: 2px solid var(--lightGreen);
}
  &:hover ${Blob} {
    background: ${props => props.bkColor === "var(--white)" ? "var(--darkGrey)" : "var(--lightGreen)"}; 
}
  &:hover ${ButtonStyle} {
    color: ${props => props.bkColor === "var(--white)" ? "var(--white)" : "rgba(0,0,0,1)"}; 
}
&:hover ${Anchor} {
    color: rgba(0,0,0,1);
}
`
const PhoneIconStyle = styled(PhoneIcon)`
position: relative ;
top: -2px;
right: 3px;
width: 15px;

`
const LocationIconStyle = styled(LocationIcon)`
position: relative ;
top: -2px;
right: 3px;
width: 12px;
fill: white;

`

const ImageStyle = styled(Image)`
object-fit: cover; 
object-position: bottom;
`
const ImageContainer = styled.div`
/* clip-path: polygon(10% 0, 100% 0%, 100% 100%, 0% 100%); */
position: absolute;
width: 100%;
height: 100%;
top: 0;
`