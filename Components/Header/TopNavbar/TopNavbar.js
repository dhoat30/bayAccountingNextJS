import React, { useContext } from 'react'
import styled from 'styled-components'

import ContactInfoContext from '../../../store/contact-info-context'

function TopNavbar() {
    const contactInfoCtx = useContext(ContactInfoContext)

    // only fetch the te puna data
    let tePunaData
    if (contactInfoCtx.contactData) {
        tePunaData = contactInfoCtx.contactData.filter(item => {
            if (item.slug.includes("te-puna")) {
                return item
            }
        })
    }

    return (
        <Container>
            <Items>
                {/* <Item>
                    <IconStyle icon={faSignIn} />
                    <Link href="#">Log in</Link>
                </Item> */}
                <Item>
                    <IconStyle width="25px" height="20px" viewBox="0 0 16.505 16.503">
                        <path id="Icon_ionic-ios-call" data-name="Icon ionic-ios-call" d="M20.518,17.425a13.863,13.863,0,0,0-2.9-1.938c-.868-.417-1.186-.408-1.8.034-.511.37-.842.713-1.431.584a8.535,8.535,0,0,1-2.874-2.127A8.474,8.474,0,0,1,9.39,11.1c-.125-.593.219-.919.584-1.431.443-.614.455-.932.034-1.8a13.589,13.589,0,0,0-1.938-2.9c-.632-.632-.773-.494-1.121-.37a6.381,6.381,0,0,0-1.027.546,3.1,3.1,0,0,0-1.233,1.3c-.245.528-.528,1.512.915,4.082a22.776,22.776,0,0,0,4,5.341h0l0,0,0,0h0a22.865,22.865,0,0,0,5.341,4c2.569,1.444,3.553,1.16,4.082.915a3.045,3.045,0,0,0,1.3-1.233,6.381,6.381,0,0,0,.546-1.027C21.012,18.2,21.154,18.057,20.518,17.425Z" transform="translate(-4.49 -4.502)" fill="#fff" />
                    </IconStyle>

                    <Link
                        href={`tel: ${tePunaData && tePunaData[0].acf.phone_number}`}>
                        {tePunaData && tePunaData[0].acf.phone_number}
                    </Link>
                </Item>
                <Item>
                    <IconStyle width="25px" height="20px" viewBox="0 0 23.838 16.503">
                        <g id="Icon_ionic-ios-mail" data-name="Icon ionic-ios-mail" transform="translate(-3.375 -7.875)">
                            <path id="Path_20856" data-name="Path 20856" d="M27.018,10.349l-6.166,6.28a.111.111,0,0,0,0,.16l4.315,4.6a.744.744,0,0,1,0,1.054.747.747,0,0,1-1.054,0l-4.3-4.578a.118.118,0,0,0-.166,0L18.6,18.927a4.614,4.614,0,0,1-3.289,1.387,4.706,4.706,0,0,1-3.358-1.427l-1.009-1.026a.118.118,0,0,0-.166,0l-4.3,4.578a.747.747,0,0,1-1.054,0,.744.744,0,0,1,0-1.054l4.315-4.6a.122.122,0,0,0,0-.16L3.57,10.349a.113.113,0,0,0-.195.08V23a1.839,1.839,0,0,0,1.834,1.834h20.17A1.839,1.839,0,0,0,27.213,23V10.429A.115.115,0,0,0,27.018,10.349Z" transform="translate(0 -0.451)" fill="#fff" />
                            <path id="Path_20857" data-name="Path 20857" d="M15.451,18.367a3.115,3.115,0,0,0,2.241-.94l8.991-9.151a1.8,1.8,0,0,0-1.135-.4H5.36a1.789,1.789,0,0,0-1.135.4l8.991,9.151A3.116,3.116,0,0,0,15.451,18.367Z" transform="translate(-0.157 0)" fill="#fff" />
                        </g>
                    </IconStyle>

                    <Link
                        target="_blank"
                        href={`mailto: ${tePunaData && tePunaData[0].acf.email}`}>
                        {tePunaData && tePunaData[0].acf.email}
                    </Link>
                </Item>
                <Item>
                    <IconStyle width="20px" height="20px" viewBox="0 0 16.002 21.336">
                        <path id="Icon_awesome-map-marker-alt" data-name="Icon awesome-map-marker-alt" d="M7.179,20.905C1.124,12.128,0,11.227,0,8A8,8,0,0,1,16,8c0,3.226-1.124,4.127-7.179,12.9a1,1,0,0,1-1.645,0ZM8,11.335A3.334,3.334,0,1,0,4.667,8,3.334,3.334,0,0,0,8,11.335Z" fill="#fff" />
                    </IconStyle>

                    <Link href="#">Te Puna</Link>
                </Item>
                {/* <Item>
                    <IconStyle icon={faMapMarkerAlt} />
                    <Link href="#">Te Puke</Link>
                </Item> */}
            </Items>
        </Container>
    )
}

export default TopNavbar
const Container = styled.section`
    background: var(--darkGreen);
`
const Items = styled.ul`
 color: var(--white);
 list-style: none; 
 padding: 10px 20px;
 max-width: 1500px;
 margin: 0 auto;
 display: flex;
 justify-content: flex-end;
 flex-wrap: wrap;
@media(max-width: 750px){ 
    padding: 10px 10px;
    justify-content: center;
}
`

const Item = styled.li`
position: relative; 
cursor: pointer;
display: flex;
&::after{ 
    content: ""; 
    border-right: 2px solid var(--white);
    margin: 0 15px;
}
&:last-child::after{ 
    content: "";
    border-right: none;
    margin: 0 0;
}

&:hover{ 
    color: var(--beige); 
}
@media(max-width: 750px){ 
    &:last-child{ 
    display: none;
    }
    &:nth-child(4){ 
    display: none;
    }
    &:nth-child(3){ 
    display: none;
    }
    &:nth-child(2)::after{ 
    border-right: none;
    margin: 0 0;
    }
}
`
const IconStyle = styled.svg`
font-size: 1.2rem;
position: relative;
top: 6px;
`
const Link = styled.a`
 color: white;
 text-decoration: none;
 font-weight: 500 !important;
 padding-left: 5px;
 font-size: 1.2rem;
 &:hover{ 
    color: var(--beige); 
}
`