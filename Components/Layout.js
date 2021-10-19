import React, { useContext, useEffect } from 'react'
import Header from './Header/Header'
import axios from 'axios'
import styled from 'styled-components'
import ContactInfoContext from '../store/contact-info-context'
import FooterSection from './FooterSection/FooterSection'
function Layout(props) {
    const contactInfoCtx = useContext(ContactInfoContext)
    useEffect(() => {
        axios(`/api/contact-info`)
            .then(res => {
                if (res.status === 200) {
                    contactInfoCtx.getContactData(res.data.data)
                }
                else {
                    console.log("something went wrong while fetching the contact info")
                }
            })
            .catch(err => console.log(err))
    })
    return (
        <div>
            <Header></Header>
            <Main>{props.children}</Main>
            <FooterSection />
        </div>
    )
}

export default Layout
const Main = styled.section`
min-height: 90vh;
`