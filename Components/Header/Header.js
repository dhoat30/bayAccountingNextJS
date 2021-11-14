import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from '../UI/Logo/Logo'
import Navbar from './Navbar/Navbar'
import Link from 'next/link'
import TopNavbar from './TopNavbar/TopNavbar'
function Header() {
    return (
        <Section>
            <TopNavbar />
            <Container>
                {/* <Link href="/" passHref>
                    <a> <LogoStyle /></a>
                </Link> */}

                <Navbar />
            </Container>

        </Section>
    )
}

export default Header
const Section = styled.section`
    border-bottom: 2px solid var(--darkGreen);
`
const Container = styled.section`
    max-width: 1500px; 
    margin: 0 auto;
    padding: 0 10px;
`
