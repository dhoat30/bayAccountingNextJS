import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import ColumnTitle from '../Titles/Titles/ColumnTitle'
import Paragraph from '../Titles/Paragraph/Paragraph'

function TeamCards({ name, jobTitle, image, email, teamBody }) {
    return (
        <Container>
            <ImageStyle src={image} alt={name} layout="fixed" width={280} height={330} />
            <ColumnTitle align="center">{name}</ColumnTitle>
            <Paragraph align="center">{jobTitle}</Paragraph>
            <ParagraphStyle align="center">{teamBody}</ParagraphStyle>
            <EmailContainer>
                <Image src="/triangle.png" alt="UI Triangle" layout="fixed" width={120} height={120} />

                <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
                    <IconStyle icon={faEnvelope} />
                </a>

            </EmailContainer>
        </Container>
    )
}

export default TeamCards
const Container = styled.div`
    margin: 20px;
    position: relative;
    width: 300px;
`

const ImageStyle = styled(Image)`
object-fit: cover;
`
const EmailContainer = styled.div`
position: absolute; 
top: 0; 
`
const IconStyle = styled.svg`
color: white;
font-size: 1.5rem;
position: absolute;
top: 15px; 
left: 15px;
`

const ParagraphStyle = styled(Paragraph)`
font-size: 0.9rem;
color: grey;
`