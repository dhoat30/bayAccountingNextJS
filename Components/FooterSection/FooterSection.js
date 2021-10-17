import React, { useContext } from 'react'
import styled from 'styled-components'
import ContactBar from '../UI/Footer/ContactBar'
import ContactInfoContext from '../../store/contact-info-context'
import SectionTitle from '../UI/Titles/Titles/SectionTitle'

function Footer() {
    const contactInfoCtx = useContext(ContactInfoContext)
    let tePunaContact, tePukeContact
    if (contactInfoCtx.contactData) {
        tePunaContact = contactInfoCtx.contactData.filter(item => item.slug.includes("te-puna"))
        tePukeContact = contactInfoCtx.contactData.filter(item => item.slug.includes("te-puke"))
    }

    return (
        <Container>

            <Content>
                <SectionTitleStyle bk="dark">Bay Accounting</SectionTitleStyle>
                <FlexBox>
                    <ContactBar
                        title={tePunaContact[0].title.rendered}
                        phoneNumber={tePunaContact[0].acf.phone_number}
                        email={tePunaContact[0].acf.email}
                        streetAddress={tePunaContact[0].acf.street_address}
                        city={tePunaContact[0].acf.towncity}
                        openingHours={tePunaContact[0].acf.opening_hours}
                    />
                    <ContactBar
                        title={tePukeContact[0].title.rendered}
                        phoneNumber={tePukeContact[0].acf.phone_number}
                        email={tePukeContact[0].acf.email}
                        streetAddress={tePukeContact[0].acf.street_address}
                        city={tePukeContact[0].acf.towncity}
                        openingHours={tePukeContact[0].acf.opening_hours}
                    />
                </FlexBox>
            </Content>
        </Container>
    )
}

export default Footer

const Container = styled.section`
background: var(--darkBlue);
padding: 50px 0;

`
const Content = styled.div`
max-width: 1500px; 
margin: 0 auto;
padding: 0 10px;

`
const FlexBox = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
margin-top: 30px;
`

const SectionTitleStyle = styled(SectionTitle)`
position: relative;
border-bottom: 2px solid var(--lightGreen);
padding: 0 0 10px 0;
`