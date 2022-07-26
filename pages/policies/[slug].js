import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import PolicyPage from '../../Components/Pages/PolicyPage/PolicyPage'
import getPage from '../../util/get-page'

export default function Home(props) {
    return (
        < React.Fragment >
            <Head>
                <title>Bay Accounting | Accounting Services</title>
            </Head>
            <PolicyPage policyData={props.data} />
        </React.Fragment >
    )
}

export async function getServerSideProps(context) {
    // get home page data using category from hero images 
    const pageData = await getPage(context.query.slug)
    return {
        props: {
            data: pageData
        }
    }
}