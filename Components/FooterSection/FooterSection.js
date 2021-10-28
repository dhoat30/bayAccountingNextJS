import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import ContactBar from '../UI/Footer/ContactBar'
import ContactInfoContext from '../../store/contact-info-context'
import SectionTitle from '../UI/Titles/Titles/SectionTitle'
import Partners from '../UI/Footer/Partners'
import getServices from '../../util/get-services'
import LinksBar from '../UI/Footer/LinksBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/pro-light-svg-icons'
import Copyright from '../UI/Footer/Copyright'


function Footer() {
    const [servicesSlugs, setServicesSlugs] = useState('')
    useEffect(() => {
        fetchData()
            .then(res => {
                const slugs = res.map(item => {
                    return {
                        slug: item.slug,
                        title: item.title.rendered
                    }
                })
                setServicesSlugs(slugs)
            })
            .catch(err => console.log(err))
    }, [])
    // fetch services 
    const fetchData = async () => {
        const data = await getServices()
        return data
    }
    const contactInfoCtx = useContext(ContactInfoContext)
    if (!contactInfoCtx.contactData || !servicesSlugs) {
        return null
    }

    let tePunaContact = contactInfoCtx.contactData.filter(item => item.slug.includes("te-puna"))
    let tePukeContact = contactInfoCtx.contactData.filter(item => item.slug.includes("te-puke"))
    return (
        <Container>
            <Content>
                <SectionTitleStyle bk="dark">Bay Accounting</SectionTitleStyle>
                <FlexBox>
                    <FlexItem>
                        <LinksBar slugs={servicesSlugs} title="Services" />
                    </FlexItem>

                    <FlexItem>
                        <ContactBar
                            title={tePunaContact[0].title.rendered}
                            phoneNumber={tePunaContact[0].acf.phone_number}
                            email={tePunaContact[0].acf.email}
                            streetAddress={tePunaContact[0].acf.street_address}
                            city={tePunaContact[0].acf.towncity}
                            openingHours={tePunaContact[0].acf.opening_hours}
                            daysOpen={tePunaContact[0].acf.days_open}
                        />
                    </FlexItem>

                    <FlexItem>
                        <ContactBar
                            title={tePukeContact[0].title.rendered}
                            phoneNumber={tePukeContact[0].acf.phone_number}
                            email={tePukeContact[0].acf.email}
                            streetAddress={tePukeContact[0].acf.street_address}
                            city={tePukeContact[0].acf.towncity}
                            openingHours={tePukeContact[0].acf.opening_hours}
                            daysOpen={tePukeContact[0].acf.days_open}
                        />
                    </FlexItem>

                    <FlexItem>
                        <Partners tmnzPartners={tePunaContact[0].acf.tmnz_partners} />
                    </FlexItem>
                </FlexBox>

                <Border>
                    <IconContainer href="#">
                        <IconStyle icon={faAngleUp} />
                    </IconContainer>
                </Border>
                <Copyright copyrightData={tePunaContact[0].acf.copyright_info} />
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
border-bottom: 2px solid var(--neonGreen);
padding: 0 0 10px 0;
`

const FlexItem = styled.div`
margin: 0 10px 40px 0;
`
const Border = styled.div`
    border-bottom: 2px solid #1D2D3A;
    position: relative;
   
`
const IconContainer = styled.a`
background: var(--darkBlue);
position: absolute;
left: 50%;
top: 50%; 
transform: translate(-50%, -50%);
 border: 2px solid #1D2D3A;
    border-radius: 50%;
    display: inline-block;
    padding: 0 15px;
    cursor: pointer;
    &:hover{ 
        border: 2px solid var(--neonGreen);
    }
`
const IconStyle = styled(FontAwesomeIcon)`
    color: var(--neonGreen); 
    font-size: 3rem; 
   
`