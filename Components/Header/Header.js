import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from '../UI/Logo/Logo'
import Navbar from './Navbar/Navbar'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/pro-light-svg-icons'
import TopNavbar from './TopNavbar/TopNavbar'
function Header() {
    return (
        <React.Fragment>
            <TopNavbar />
            <Container>
                <Link href="/" passHref>
                    <a> <LogoStyle /></a>
                </Link>

                <Navbar />
            </Container>

        </React.Fragment>
    )
}

export default Header

const Container = styled.section`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 0 20px;
height: 50px;
position: relative;
`

const LogoStyle = styled(Logo)`
@media (max-width: 450px){ 
    width: 200px;
    position: absolute;
    top: 8px;
    z-index: -1;
}
`


const IconStyle = styled(FontAwesomeIcon)`
font-size: 30px;
display: none;
cursor: pointer;
@media(max-width: 600px) {
    display: block;
}
@media (max-width: 450px){ 
    font-size: 20px;
}

`