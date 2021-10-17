import React from 'react'
import Testimonial from '../UI/Carousel/Testimonial'
import styled from 'styled-components'
function Testimonials({ testimonialsData }) {
    return (
        <Container style={{ backgroundImage: 'url("/blue-background.jpg")' }}>
            <Testimonial testimonialsData={testimonialsData} />
        </Container>
    )
}

export default Testimonials
const Container = styled.section`
 padding: 100px 0 300px 0;
 margin: 50px 0;
background-repeat: no-repeat;
background-size: cover;

`