import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/pro-solid-svg-icons'
import styled from 'styled-components'
import ColumnTitle from '../Titles/Titles/ColumnTitle'

function ContactBar({ title, phoneNumber, email, streetAddress, city, openingHours, daysOpen }) {
    return (
        <Container>
            <ColumnTitle color="white">{title}</ColumnTitle>
            <Links>
                <Link>
                    <Anchor href={`tel: ${phoneNumber}`}>
                        <IconContainer>
                            <IconStyle icon={faPhoneAlt} />
                        </IconContainer>
                        {phoneNumber}
                    </Anchor>
                </Link>
                <Link>
                    <Anchor href={`mailto: ${email}`} target="_blank">
                        <IconContainer>
                            <IconStyle icon={faEnvelope} />
                        </IconContainer>
                        {email}
                    </Anchor>
                </Link>
                <Link>
                    <Anchor href="" onClick={(e) => e.preventDefault()}>
                        <IconContainer>
                            <IconStyle icon={faMapMarkerAlt} size="2x" />
                        </IconContainer>
                        {streetAddress} <br />
                        {city}
                    </Anchor>
                </Link>
                <Link>
                    <Anchor href="" onClick={(e) => e.preventDefault()}>
                        <IconContainer>
                            <IconStyle icon={faClock} />
                        </IconContainer>
                        Opening Hours <br></br>
                        {daysOpen}<br></br>
                        {openingHours}
                    </Anchor>
                </Link>
            </Links>
        </Container >
    )
}

export default ContactBar
const Container = styled.div``

const Links = styled.ul`
list-style: none ;
margin: 0;
padding: 0; 
`
const Link = styled.li`
margin: 15px 0 0 0; 
`

const IconStyle = styled(FontAwesomeIcon)`
    color: var(--lightGreen);
    font-size: 1.8rem;
    padding-right: 7px;
`
const Anchor = styled.a`
line-height: 1.5rem;
display: flex; 
text-decoration: none ;
color: var(--lightBlue);
font-size: 1.2rem;
&:hover{ 
    color: var(--white); 
}
&:hover ${IconStyle}{ 
    color: var(--white);
}
`
const IconContainer = styled.span`
display: block;
width: 30px;
`