import React, { useContext } from 'react'
import LargeTitle from '../../UI/Titles/Titles/LargeTitle'
import styled from 'styled-components'
import ContactSection from '../../ContactSection/ContactSection'
import ContactInfoContext from '../../../store/contact-info-context'
import SectionTitle from '../../UI/Titles/Titles/SectionTitle'
import ColumnTitle from '../../UI/Titles/Titles/ColumnTitle'
import ContactPageForm from '../../UI/Forms/ContactPageForm'
import Image from 'next/image'
import MediumTitle from '../../UI/Titles/Titles/MediumTitle'

function Contact() {
    const contactInfoCtx = useContext(ContactInfoContext)
    if (!contactInfoCtx.contactData) {
        return null
    }
    const tePukeData = contactInfoCtx.contactData.filter(item => item.slug.includes('te-puke'))
    const tePunaData = contactInfoCtx.contactData.filter(item => item.slug.includes('te-puna'))

    console.log(tePukeData)
    console.log(tePukeData[0].acf)
    return (
        <Container>
            <LargeTitle align="center">Contact Us</LargeTitle>
            <FormContainer>
                <ColumnTitle align="center">Don’t Hesitate To Contact Us</ColumnTitle>
                <ContactPageForm emailRouteUrl={`${process.env.url}/wp-json/inspiry/v1/contact-page-email`} emailTo={contactInfoCtx.contactData[0].acf.email} />
            </FormContainer>
            {/* 
            <ImageSection>
                <ImageDiv>
                    <ImageStyle src={tePunaData[0].acf.site_image} layout="fill" />
                    <ColumnTitleStyle>{tePunaData[0].title.rendered}</ColumnTitleStyle>
                </ImageDiv>
                <ImageDiv>
                    <ImageStyle src={tePukeData[0].acf.site_image} layout="fill" />
                    <ColumnTitleStyleSecond>{tePukeData[0].title.rendered}</ColumnTitleStyleSecond>
                </ImageDiv>
            </ImageSection> */}

        </Container>
    )
}

export default Contact
const Container = styled.section`
margin: 50px 0 0 0;
`
const FormContainer = styled.div`
background: var(--offWhite);
padding: 30px;
max-width: 900px;
margin: 50px auto;
@media (max-width: 800px){ 
    flex-wrap: wrap;
    padding: 30px 10px;

}
`
const ImageSection = styled.section`
margin: 150px 0 0 0;
display: flex;
`
const ImageDiv = styled.div`
position: relative;
width: 50%;
height: 500px;
`
const ImageStyle = styled(Image)`
object-fit: cover;
`
const ColumnTitleStyle = styled(ColumnTitle)`
background: var(--lightGreen);
color: white;
position: absolute;
z-index: 2;
margin: 0;
top: 0;
padding: 20px 60px;
top: 50%;
right: 0 ;
transform: translate(0, 0);
`

const ColumnTitleStyleSecond = styled(ColumnTitle)`
background: var(--orange);
color: white;
position: absolute;
z-index: 2;
margin: 0;
top: 0;
padding: 20px 60px;
top: 50%;
left: 0 ;
transform: translate(0, 0);
`