import React, { useContext } from 'react'
import styled from 'styled-components'
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/pro-solid-svg-icons'
import { faSignIn } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
                    <IconStyle icon={faPhoneAlt} />
                    <Link
                        href={`tel: ${tePunaData && tePunaData[0].acf.phone_number}`}>
                        {tePunaData && tePunaData[0].acf.phone_number}
                    </Link>
                </Item>
                <Item>
                    <IconStyle icon={faEnvelope} />
                    <Link
                        target="_blank"
                        href={`mailto: ${tePunaData && tePunaData[0].acf.email}`}>
                        {tePunaData && tePunaData[0].acf.email}
                    </Link>
                </Item>
                <Item>
                    <IconStyle icon={faMapMarkerAlt} />
                    <Link href="#">Te Puna</Link>
                </Item>
                <Item>
                    <IconStyle icon={faMapMarkerAlt} />
                    <Link href="#">Te Puke</Link>
                </Item>
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
const IconStyle = styled(FontAwesomeIcon)`
font-size: 1.2rem;
position: relative;
top: 4px;
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