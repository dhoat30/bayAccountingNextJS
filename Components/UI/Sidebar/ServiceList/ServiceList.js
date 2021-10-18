import React from 'react'
import ColumnTitle from '../../Titles/Titles/ColumnTitle'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/pro-light-svg-icons'
import Link from 'next/link'
function ServiceList({ servicesListData }) {
    console.log(servicesListData)
    const listCards = servicesListData.map(item => {
        return (
            <List key={item.id}>
                <Link href={`/services/${item.slug}`} passHref>
                    <Anchor>
                        <Span dangerouslySetInnerHTML={{ __html: item.title }}></Span>
                        <IconStyle icon={faChevronRight} />
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
const IconStyle = styled(FontAwesomeIcon)`
color:#616161; 
`