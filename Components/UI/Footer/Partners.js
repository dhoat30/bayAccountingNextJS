import React from 'react'
import styled from 'styled-components'
import ColumnTitle from '../Titles/Titles/ColumnTitle'
import Image from 'next/image'
function Partners({ tmnzPartners }) {
    const partnerImageCard = tmnzPartners.map((item, index) => {
        return (
            <ImageContainer key={index}>
                <ImageStyle

                    src={item.image}
                    alt="tmnz Partners"
                    layout="responsive"
                    width="100"
                    height="80"
                />
            </ImageContainer>

        )
    })
    return (
        <Container>
            <ColumnTitle color="white">Our Tax Partners</ColumnTitle>
            <div>
                {partnerImageCard}
            </div>

        </Container >
    )
}

export default Partners
const Container = styled.div``

const ImageContainer = styled.div`
display: block;
`
const ImageStyle = styled(Image)`
object-fit: scale-down;
`