import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../../UI/Titles/Titles/SectionTitle'

function PolicyPage({ policyData }) {
    console.log(policyData[0])
    return (
        <Container className="policy-page">
            <SectionTitle fontWeight={600} align="center">{policyData[0].title.rendered}</SectionTitle>
            <div dangerouslySetInnerHTML={{ __html: policyData[0].content.rendered }}></div>
        </Container>
    )
}

export default PolicyPage
const Container = styled.section`
margin: 50px auto;
max-width: 1500px;
padding: 0 20px;
@media (max-width: 400px ){ 
        padding: 0 10px;
    }

`