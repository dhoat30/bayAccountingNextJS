import React from 'react'

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
                            <IconStyle width="30" height="25" viewBox="0 0 23.505 23.503">
                                <path id="Icon_ionic-ios-call" data-name="Icon ionic-ios-call" d="M27.316,22.906a19.743,19.743,0,0,0-4.124-2.76c-1.236-.594-1.689-.581-2.564.049-.728.526-1.2,1.016-2.038.832S16.1,19.6,14.5,18s-2.851-3.255-3.029-4.094.312-1.309.832-2.038c.63-.875.649-1.328.049-2.564A19.353,19.353,0,0,0,9.59,5.18c-.9-.9-1.1-.7-1.6-.526A9.088,9.088,0,0,0,6.53,5.43,4.412,4.412,0,0,0,4.774,7.284c-.349.753-.753,2.154,1.3,5.813a32.436,32.436,0,0,0,5.7,7.606h0l.006.006.006.006h0a32.563,32.563,0,0,0,7.606,5.7c3.659,2.056,5.06,1.652,5.813,1.3a4.336,4.336,0,0,0,1.854-1.756,9.088,9.088,0,0,0,.777-1.462C28.02,24.008,28.222,23.806,27.316,22.906Z" transform="translate(-4.49 -4.502)" fill="#039f20" />
                            </IconStyle>

                        </IconContainer>
                        {phoneNumber}
                    </Anchor>
                </Link>
                <Link>
                    <Anchor href={`mailto: ${email}`} target="_blank">
                        <IconContainer>
                            <IconStyle id="Icon_ionic-ios-mail" data-name="Icon ionic-ios-mail" width="30" height="25" viewBox="0 0 20 13.846">
                                <path id="Path_20854" data-name="Path 20854" d="M23.212,10.343l-5.173,5.269a.093.093,0,0,0,0,.135l3.62,3.856a.624.624,0,0,1,0,.885.627.627,0,0,1-.885,0l-3.606-3.841a.1.1,0,0,0-.139,0l-.88.894a3.871,3.871,0,0,1-2.76,1.163,3.949,3.949,0,0,1-2.817-1.2l-.846-.861a.1.1,0,0,0-.139,0L5.981,20.488a.627.627,0,0,1-.885,0,.624.624,0,0,1,0-.885l3.62-3.856a.1.1,0,0,0,0-.135L3.538,10.343a.1.1,0,0,0-.163.067V20.954a1.543,1.543,0,0,0,1.538,1.538H21.837a1.543,1.543,0,0,0,1.538-1.538V10.411A.1.1,0,0,0,23.212,10.343Z" transform="translate(-3.375 -8.646)" fill="#039f20" />
                                <path id="Path_20855" data-name="Path 20855" d="M13.644,16.678a2.614,2.614,0,0,0,1.88-.788l7.543-7.678a1.511,1.511,0,0,0-.952-.337H5.178a1.5,1.5,0,0,0-.952.337l7.543,7.678A2.614,2.614,0,0,0,13.644,16.678Z" transform="translate(-3.644 -7.875)" fill="#039f20" />
                            </IconStyle>

                        </IconContainer>
                        {email}
                    </Anchor>
                </Link>
                <Link>
                    <Anchor href="" onClick={(e) => e.preventDefault()}>
                        <IconContainer>
                            <IconStyle width="30" height="25" viewBox="0 0 13.865 18.487">
                                <path id="Icon_awesome-map-marker-alt" data-name="Icon awesome-map-marker-alt" d="M6.22,18.114C.974,10.508,0,9.728,0,6.933a6.933,6.933,0,0,1,13.865,0c0,2.8-.974,3.576-6.22,11.181a.867.867,0,0,1-1.425,0Zm.712-8.293A2.889,2.889,0,1,0,4.044,6.933,2.889,2.889,0,0,0,6.933,9.821Z" transform="translate(0)" fill="#039f20" />
                            </IconStyle>
                        </IconContainer>
                        {streetAddress} <br />
                        {city}
                    </Anchor>
                </Link>
                <Link>
                    <Anchor href="" onClick={(e) => e.preventDefault()}>
                        <IconContainer>
                            <IconStyle width="30" height="25" viewBox="0 0 21.55 21.548">
                                <path id="Icon_ionic-ios-clock" data-name="Icon ionic-ios-clock" d="M21.768,6.53a10.776,10.776,0,1,0,0,15.239A10.78,10.78,0,0,0,21.768,6.53ZM5.529,14.553a.414.414,0,1,1,.326-.326A.414.414,0,0,1,5.529,14.553Zm1.357,4.258a.413.413,0,1,1,.119-.44A.414.414,0,0,1,6.886,18.811Zm.119-8.884a.412.412,0,1,1-.119-.44A.414.414,0,0,1,7.005,9.928Zm3.186,11.888a.412.412,0,1,1-.119-.44A.414.414,0,0,1,10.191,21.816ZM10.072,6.923a.413.413,0,1,1,.119-.44A.414.414,0,0,1,10.072,6.923Zm1.834,3.952a.415.415,0,0,1,.71-.43l1.746,3.227a1.679,1.679,0,0,1,.2.787v6.32a.414.414,0,0,1-.829,0V14.46a.852.852,0,0,0-.1-.394Zm2.326,12.38a.414.414,0,1,1,.326-.326A.414.414,0,0,1,14.231,23.256Zm0-17.4a.414.414,0,1,1,.326-.326A.414.414,0,0,1,14.231,5.851ZM18.774,22a.413.413,0,1,1,.119-.44A.414.414,0,0,1,18.774,22Zm.119-15.255a.412.412,0,1,1-.119-.44A.414.414,0,0,1,18.893,6.742ZM22.079,18.63a.412.412,0,1,1-.119-.44A.414.414,0,0,1,22.079,18.63Zm-.119-8.521a.413.413,0,1,1,.119-.44A.414.414,0,0,1,21.96,10.109Zm.974,4.444a.414.414,0,1,1,.326-.326A.414.414,0,0,1,22.934,14.553Z" transform="translate(-3.372 -3.375)" fill="#039f20" />
                            </IconStyle>
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

const IconStyle = styled.svg`
    color: var(--lightGreen);

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