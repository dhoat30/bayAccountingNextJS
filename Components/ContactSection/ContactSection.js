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
    console.log("hello this is contact section")
    return (
        <Container>
            <MapContainer>
            </MapContainer>
            <ContactContainer>

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
margin: 150px auto 100px auto;
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
const ImageDiv = styled.div`

margin: 10px 0;
`