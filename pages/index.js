import cookie from 'cookie'
import Head from 'next/head'
import React from 'react'

export default function Home() {

  return (

    < React.Fragment >
      <Head>
        <title>Inspiry | Live an Inspired Life | Find Trade Professionals and Projects</title>
      </Head>
      <h1>home page</h1>
    </React.Fragment >

  )
}

export async function getServerSideProps(context) {
  let headerCookie = context.req.headers.cookie

  if (typeof headerCookie !== 'string') {
    headerCookie = '';
  }
  // check if user is login 
  const cookies = cookie.parse(headerCookie)



  return {
    props: {
      typewriterData: 4,
    }
  }
}