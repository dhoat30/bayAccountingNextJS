import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

function Logo({ className }) {

    return (
        <Container className={className}>
            <Image
                src="/logo.svg"
                width="100"
                height="100"
                layout="responsive"
                alt="Bay Accounting Logo"
            />
        </Container>
    )
}

export default Logo

const Container = styled.div`
margin-top: 20px;
display: block;
width: 100px;
`
