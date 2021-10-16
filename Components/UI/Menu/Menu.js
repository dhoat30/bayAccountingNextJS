import React from 'react'
import MenuItems from './MenuItems/MenuItems'
import styled from 'styled-components'

function Menu({ menuItems }) {

    const menuItem = menuItems.map(item => {
        return (<MenuItems
            key={item.title}
            title={item.title}
            link={item.url}
            linkType={item.linkType}
        />)
    })
    return (
        <Container>
            {menuItem}
        </Container>
    )
}

export default Menu

const Container = styled.ul`
display: flex;
flex-direction: row;
justify-content: flex-end;
border: solid red;
width: 100%;
padding: 0;
background: white;
margin: 0;
@media(max-width: 1000px){ 
    flex-direction: column ;
    width: 250px;
    display: none;
}
`