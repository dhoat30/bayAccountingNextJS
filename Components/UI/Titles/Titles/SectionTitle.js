import React from 'react'
import styled from 'styled-components'
function SectionTitle(props) {
    return (
        <React.Fragment>
            {props.subtitle && <Subtitle>{props.subtitle}</Subtitle>}

            {props.dangerouslySetInnerHTML ?
                <Container
                    fontWeight={props.fontWeight}
                    backGround={props.bk}
                    dangerouslySetInnerHTML={props.dangerouslySetInnerHTML}
                    showUnderline={props.showUnderline}
                    className={props.className}>
                </Container>
                : <Container
                    fontWeight={props.fontWeight}
                    backGround={props.bk}
                    align={props.align}
                    showUnderline={props.showUnderline}
                    className={props.className}>
                    {props.children}
                </Container>
            }
        </React.Fragment>
    )
}

export default SectionTitle
const Container = styled.h2`
font-size: 3rem;
margin: 10px 0;
font-weight: ${props => props.fontWeight ? props.fontWeight : "800"};
text-align: ${props => props.align ? props.align : "left"};
color: ${props => props.backGround === "dark" ? "var(--white)" : "var(--darkGrey)"}; 
`
const Subtitle = styled.h3`
    text-align: center;
    display: inline-block !important;
    position: relative;
    margin: 0 auto;
    font-weight: 600;
    color: var(--darkGreen);
    font-size: 2rem;
    z-index: 2;
    left: 50%;
    transform: translate(-50%, 0);
    &::after{
        position: absolute;
        right: -40px;
        top: 50%;
        transform: translate(0, -50%);
        content: "";
        width: 30px;
        height: 3px;
        background: var(--darkGreen);
        z-index: -1;
    }
    &::before{
        position: absolute;
        left: -40px;
        top: 50%;
        transform: translate(0, -50%);
        content: "";
        width: 30px;
        height: 3px;
        background: var(--darkGreen);
        z-index: -1;
    }
`
