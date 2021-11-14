import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faChevronDown, faChevronUp } from '@fortawesome/pro-light-svg-icons'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Logo from '../../UI/Logo/Logo'
import Link from 'next/link'

function NavbarComponent() {

    return (
        <React.Fragment>
            <NavbarStyle
                expand="xl"
                collapseOnSelect
            >

                <Link href="/" passHref>
                    <Navbar.Brand ><Logo /></Navbar.Brand>
                </Link>

                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end navbar">
                    <Nav >
                        <Link href="/" passHref>
                            <Nav.Link >Home</Nav.Link>
                        </Link>

                        <NavDropdown title="About Us" >
                            <Link href="/about-us" passHref >
                                <NavDropdown.Item >Our History</NavDropdown.Item>
                            </Link>
                            <Link href="/meet-our-team" passHref>
                                <NavDropdown.Item >Meat Our Team</NavDropdown.Item>
                            </Link>

                        </NavDropdown>
                        <NavDropdown title="Our Services" >
                            <Link href="/services" passHref>
                                <NavDropdown.Item >All Services</NavDropdown.Item>
                            </Link>
                            <Link href="/services/accounting-services" passHref>
                                <NavDropdown.Item >Accounting Services</NavDropdown.Item>
                            </Link>
                            <Link href="/services/taxation" passHref>
                                <NavDropdown.Item >Taxation</NavDropdown.Item>
                            </Link>
                            <Link href="/services/gst-payroll-services-including-software-training" passHref>
                                <NavDropdown.Item >GST Payroll</NavDropdown.Item>
                            </Link>
                            <Link href="/services/budget-cashflow-forecast" passHref>
                                <NavDropdown.Item >Budget/Cashflow Forecast</NavDropdown.Item>
                            </Link>
                            <Link href="/services/buying-setting-up-new-business" passHref>
                                <NavDropdown.Item >Buying Setting Up Of New Business</NavDropdown.Item>
                            </Link>
                            <Link href="/services/property-investment-development" passHref>
                                <NavDropdown.Item >Property Investment & Development</NavDropdown.Item>
                            </Link>
                        </NavDropdown>

                        <NavDropdown title="Client Resources" >
                            <Link href="/client-resources/questionnaire" passHref>
                                <NavDropdown.Item >Questionnaire</NavDropdown.Item>
                            </Link>

                        </NavDropdown>

                        <Link href="/news" passHref>
                            <Nav.Link >News</Nav.Link>
                        </Link>
                        <Link href="/contact" passHref>
                            <Nav.Link >Contact</Nav.Link>
                        </Link>

                        <Link href="/our-community-work" passHref>
                            <Nav.Link >Our Community Work</Nav.Link>
                        </Link>
                        <Link href="/pay-now" passHref>
                            <Nav.Link >Pay Now</Nav.Link>
                        </Link>
                        {/* <Link href="#" passHref>
                            <Nav.Link >Log in</Nav.Link>
                        </Link> */}

                    </Nav>
                </Navbar.Collapse>
            </NavbarStyle>
        </React.Fragment>
    )
}

export default NavbarComponent
const NavbarStyle = styled(Navbar)`
height: 50px;
`