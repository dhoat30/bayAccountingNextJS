import React, { useContext, useEffect, useState } from 'react'
import Header from './Header/Header'
import axios from 'axios'
import styled from 'styled-components'
import ContactInfoContext from '../store/contact-info-context'
import FooterSection from './FooterSection/FooterSection'
import LoadingOverlay from './UI/LoadingOverlay/LoadingOverlay'
import LoadingContext from '../store/loading-context'

function Layout(props) {
    const contactInfoCtx = useContext(ContactInfoContext)
    const loadingCtx = useContext(LoadingContext)

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
    }, [])
    console.log(contactInfoCtx)
    return (
        <div>
            <Header></Header>
            <Main>{props.children}
                <LoadingOverlay show={loadingCtx.loadingOverlay} />
            </Main>

            <FooterSection />
        </div>
    )
}

export default Layout
const Main = styled.section`
min-height: 90vh;
position: relative;
`