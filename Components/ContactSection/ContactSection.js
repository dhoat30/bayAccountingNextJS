import React, { useContext } from 'react'
import ContactForm from '../UI/Forms/ContactForm'
import styled from 'styled-components'
import SectionTitle from '../UI/Titles/Titles/SectionTitle'
import ContactInfoContext from '../../store/contact-info-context'
import Image from 'next/image'

function ContactSection() {
    const contactInfoCtx = useContext(ContactInfoContext)
    if (!contactInfoCtx.contactData) {
        return null
    }

    const siteImageCard = contactInfoCtx.contactData.map(item => {
        return (
            <ImageStyle
                key={item.id}
                src={item.acf.map}
                alt={item.title.rendered}
                width="100%"
                height="60"
                layout="responsive"
            />
        )
    })

    return (
        <Container>
            <MapContainer>
                {siteImageCard}
            </MapContainer>
            <ContactContainer>
                <Subtitle>Drop A Message</Subtitle>
                <SectionTitle >Contact Us</SectionTitle>
                <ContactForm emailRouteUrl={`${process.env.url}/wp-json/inspiry/v1/contact-email`} emailTo="dhoat30@gmail.com"></ContactForm>
            </ContactContainer>
        </Container>
    )
}

export default ContactSection
const Container = styled.section`
background: var(--offWhite);
padding: 30px;
max-width: 1000px;
margin: -200px auto 100px auto;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap-reverse;
`
const ContactContainer = styled.div`
width: 48%;
@media (max-width: 850px ){ 
    width: 100%;
}
`
const MapContainer = styled.div`
    width: 48%;
    display: flex;
    flex-direction: column;
    @media (max-width: 850px ){ 
    width: 100%;
    display: none; 
}
`
const Subtitle = styled.h3`
    text-align: center;
    display: inline-block !important;
    position: relative;
    margin: 0 auto;
    color: var(--darkGreen);
    font-size: 1.5rem;
    z-index: 2;
    left: 0%;
    &::after{
        position: absolute;
        right: -40px;
        top: 50%;
        transform: translate(0, -50%);
        content: "";
        width: 30px;
        height: 2px;
        background: var(--darkGreen);
        z-index: -1;
    }
`

const ImageStyle = styled(Image)`
    margin: 10px 0 !important; 
    display: block;
    object-fit: cover;
`