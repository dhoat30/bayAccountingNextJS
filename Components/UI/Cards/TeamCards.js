import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import ColumnTitle from '../Titles/Titles/ColumnTitle'
import Paragraph from '../Titles/Paragraph/Paragraph'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/pro-solid-svg-icons'
function TeamCards({ name, jobTitle, image, email }) {
    return (
        <Container>
            <ImageStyle src={image} alt={name} layout="fixed" width={280} height={330} />
            <ColumnTitle align="center">{name}</ColumnTitle>
            <Paragraph align="center">{jobTitle}</Paragraph>
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
`

const ImageStyle = styled(Image)`
object-fit: cover;
`
const EmailContainer = styled.div`
position: absolute; 
top: 0; 
`
const IconStyle = styled(FontAwesomeIcon)`
color: white;
font-size: 1.5rem;
position: absolute;
top: 15px; 
left: 15px;
`