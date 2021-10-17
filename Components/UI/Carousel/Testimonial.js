import React from 'react'
import Slider from "react-slick";
import styled from 'styled-components';
import SectionTitle from '../Titles/Titles/SectionTitle';
import MediumTitle from '../Titles/Titles/MediumTitle'
import ColumnTitle from '../Titles/Titles/ColumnTitle';
import Paragraph from '../Titles/Paragraph/Paragraph';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/pro-duotone-svg-icons'
import { useMediaQuery } from 'react-responsive'

function Testimonial({ testimonialsData }) {
    const isTablet = useMediaQuery({
        query: '(max-width: 1050px)'
    })

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        arrows: !isTablet && true
    };

    const testimonialCards = testimonialsData.map(item => {
        return (
            <CardContainer key={item.id}>
                <IconStyleFirst icon={faQuoteLeft} />
                <ColumnTitleStyle align="center" color="var(--white)" fontWeight="500">
                    {item.acf.testimonial}
                </ColumnTitleStyle>
                <IconStyleSecond icon={faQuoteRight} />

                <MediumTitleStyle align="center" color="var(--white)">{item.title.rendered}</MediumTitleStyle>
                <Paragraph align="center" color="var(--white)">{item.acf.job_title}</Paragraph>
            </CardContainer>
        )
    })
    return (
        <Container >
            <SectionTitle bk="dark" align="center">Testimonials</SectionTitle>
            <Slider {...settings}>
                {testimonialCards}
            </Slider>
        </Container>
    )
}

export default Testimonial
const Container = styled.section`
    padding: 0 10px;
    max-width: 950px;
    margin: 0 auto;
`
const MediumTitleStyle = styled(MediumTitle)`
margin: 20px 0 0 0;
`
const ColumnTitleStyle = styled(ColumnTitle)`
max-width: 700px; 
margin: 0 auto;
`
const IconStyleFirst = styled(FontAwesomeIcon)`
font-size: 3rem ;
color: var(--lightGreen);
`
const IconStyleSecond = styled(FontAwesomeIcon)`
font-size: 3rem ;
color: var(--lightGreen);
display: block;
margin: 0 0 0 auto;
`
const CardContainer = styled.div`
padding: 20px 50px;
@media(max-width: 1000px){ 
    padding: 20px 0;
}
`