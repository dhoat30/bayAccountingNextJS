import React, { useState, useContext } from 'react'
import Menu from '../../UI/Menu/Menu'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faChevronDown, faChevronUp } from '@fortawesome/pro-light-svg-icons'
import Image from 'next/image'

const menuItems = [
    {
        title: "Home",
        url: "/",
        linkType: "local"
    },
    {
        title: "About Us",
        url: "/about-us",
        linkType: "local"
    },
    {
        title: "Services",
        url: "/services",
        linkType: "local"
    },
    {
        title: "Client Resources",
        url: "/client-resources",
        linkType: "local"
    },
    {
        title: "News",
        url: "/news",
        linkType: "local"
    },
    {
        title: "Contact",
        url: "/contact",
        linkType: "local"
    },
    {
        title: "Our Community Work",
        url: "/our-community-work",
        linkType: "local"
    }
]

function Navbar() {

    return (
        <React.Fragment>
            <Menu menuItems={menuItems} />
        </React.Fragment>
    )
}

export default Navbar
