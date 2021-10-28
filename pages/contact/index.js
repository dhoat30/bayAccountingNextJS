import Head from 'next/head'
import React from 'react'
import Contact from '../../Components/Pages/Contact/Contact'

export default function AboutUsPage(props) {
    console.log(props)
    return (
        < React.Fragment >
            <Head>
                <title>Bay Accounting | Accounting Services</title>
            </Head>
            <Contact />
        </React.Fragment >
    )
}
