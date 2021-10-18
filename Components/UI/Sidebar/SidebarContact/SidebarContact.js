import React from 'react'
import styled from 'styled-components'
import ColumnTitle from '../../Titles/Titles/ColumnTitle'
import SidebarContactForm from '../../Forms/SidebarContactForm'
function SidebarContact() {
    return (
        <Container>
            <ColumnTitle>Contact Us</ColumnTitle>
            <SidebarContactFormStyle emailRouteUrl={`${process.env.url}/wp-json/inspiry/v1/sidebar-contact-email`} emailTo="dhoat30@gmail.com" />
        </Container>
    )
}

export default SidebarContact
const Container = styled.div`
border: 3px solid var(--offWhite);
padding:  30px;
margin: 30px 0;
`

const SidebarContactFormStyle = styled(SidebarContactForm)`
border-top: 2px solid var(--offWhite);
margin-top: 20px;
padding-top: 10px;
`