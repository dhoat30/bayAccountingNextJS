import React from 'react'
import ColumnTitle from '../../Titles/Titles/ColumnTitle'
import styled from 'styled-components'

import Link from 'next/link'
function ServiceList({ servicesListData }) {
    const listCards = servicesListData.map(item => {
        return (
            <List key={item.id}>
                <Link href={`/services/${item.slug}`} passHref>
                    <Anchor>
                        <Span dangerouslySetInnerHTML={{ __html: item.title }}></Span>
                        <IconStyle id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" width="8.503" height="14.616" viewBox="0 0 8.503 14.616">
                            <path id="Icon_ionic-ios-arrow-forward-2" data-name="Icon ionic-ios-arrow-forward" d="M17.186,13.5,11.559,7.975a1.028,1.028,0,0,1,0-1.475,1.085,1.085,0,0,1,1.505,0l6.376,6.262a1.03,1.03,0,0,1,.031,1.44l-6.4,6.306a1.082,1.082,0,0,1-1.505,0,1.028,1.028,0,0,1,0-1.475Z" transform="translate(-11.246 -6.196)" fill="#616161" />
                        </IconStyle>

                    </Anchor>
                </Link>
            </List >
        )
    })
    return (
        <Container>
            <ColumnTitle>All Services</ColumnTitle>
            <ListContainer>
                {listCards}
            </ListContainer>
        </Container>
    )
}

export default ServiceList
const Container = styled.div`
border: 3px solid var(--offWhite);
padding:  30px;
`
const ListContainer = styled.ul`
margin-top: 20px;
`
const List = styled.li`

`

const Anchor = styled.a`
border-top: 2px solid var(--offWhite);
color:#616161; 
padding: 20px 0;
display: flex; 
justify-content: space-between;
align-items: center;

`
const Span = styled.span`
font-weight: 600;
font-size: 1.1rem;
`
const IconStyle = styled.svg`
fill:#616161; 
`