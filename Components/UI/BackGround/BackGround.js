import React from 'react'
import styled from 'styled-components'
function BackGround({ children }) {
    return (
        <Container style={{ backgroundImage: 'url("/lightBG.jpg")' }}>
            <GreenTriangle />
            <GreenTransparentTriangle />
            {children}
        </Container>
    )
}

export default BackGround
const Container = styled.div`
position: relative;
width: 100%; 
padding: 50px 0;
background-repeat: no-repeat;
background-size: cover;
z-index: 0;
`
const GreenTriangle = styled.div`
background-color: var(--darkGreen);
width: 300px;
height: 300px;
transform: rotate(45deg);
position: absolute;
z-index: -1;
left: -150px;
 top: -150px;
`
const GreenTransparentTriangle = styled(GreenTriangle)`
    width: 400px;
    height: 400px; 
    left: -200px;
    top: -200px;
    background: rgba(46,94,55,.5);
    z-index:-2;
`