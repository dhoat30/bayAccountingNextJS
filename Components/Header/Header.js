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
                {/* <Link href="/" passHref>
                    <a> <LogoStyle /></a>
                </Link> */}

                <Navbar />
            </Container>

        </React.Fragment>
    )
}

export default Header

const Container = styled.section`
    max-width: 1500px; 
    margin: 0 auto;
    padding: 0 10px;
  
`
