import React from 'react'
import styled from 'styled-components'
function Button(props) {
  return (
    <Container bkColor={props.bkColor}>
      <ButtonStyle className={props.className} bkColor={props.bkColor} onClick={props.onClick}>
        {props.children}
      </ButtonStyle>
      <Blob bkColor={props.bkColor} />
    </Container>
  )
}

export default Button

const ButtonStyle = styled.button`
position: relative;
z-index: 1; 
 background: none;
 cursor: pointer;
 border: none;
 color: ${props => props.bkColor === "var(--white)" ? "rgba(0,0,0,1)" : "white"}; 
`
const Blob = styled.div`
position: absolute;
padding: 25px 40px;
background: ${props => props.bkColor === "var(--white)" ? "var(--lightGreen)" : "var(--darkGrey)"}; 
border-radius: 30px;
top: 50%;
right: 20px;
transform: translate(0%,-50%);
z-index: 0;
@media(max-width: 600px){ 
    padding: 20px 25px;

}
`
const Container = styled.div`
  position: relative;
  display: inline; 
  background: ${props => props.bkColor === "var(--white)" ? "var(--white)" : "var(--lightGreen)"}; 
  padding: 15px 50px;
  border: ${props => props.bkColor === "var(--white)" ? "2px solid var(--lightGreen)" : "2px solid rgba(0,0,0,0)"};
border-radius: 50px;
font-size: 1.2rem;
cursor: pointer;
transition: 300ms ease-in-out;
@media(max-width: 600px){ 
      padding: 10px 20px;
  }
  &:hover{
  background: ${props => props.bkColor === "var(--white)" ? "var(--lightGreen)" : "var(--white)"}; 
  border: 2px solid var(--lightGreen);
}
  &:hover ${Blob} {
    background: ${props => props.bkColor === "var(--white)" ? "var(--darkGrey)" : "var(--lightGreen)"}; 
}
  &:hover ${ButtonStyle} {
    color: ${props => props.bkColor === "var(--white)" ? "var(--white)" : "rgba(0,0,0,1)"}; 
}
`