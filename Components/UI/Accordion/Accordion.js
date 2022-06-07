import React, { useState } from 'react'
import Paragraph from '../Titles/Paragraph/Paragraph'
import ColumnTitle from '../Titles/Titles/ColumnTitle'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/pro-light-svg-icons'

function Accordion({ title, content, setDangerHtml }) {
    const [showContent, setShowContent] = useState(false)
    return (
        <Container>
            <FlexBox >
                <ColumnTitleStyle >{title}</ColumnTitleStyle>

            </FlexBox>

            <ParagraphStyle setDangerHtml={setDangerHtml} color="var(--white)">{content}</ParagraphStyle>
        </Container>
    )
}

export default Accordion

const Container = styled.div`
    background: var(--darkGreen);
    cursor: pointer; 
    margin: 20px 0;
    padding: 10px;
`
const IconStyle = styled(FontAwesomeIcon)`
    font-size: 2rem;

`
const ParagraphStyle = styled(Paragraph)`
    margin-top: 5px;
    a{ 
        text-decoration: underline; 
        color: var(--white);
    }
   
`
const ColumnTitleStyle = styled(ColumnTitle)`
color: white;
 @media (max-width: 500px){ 
        font-size: 1.2rem;
    }
`

const FlexBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

&:hover{ 
    background: var(--darkGreen);
    
}
&:hover ${IconStyle}{ 
    color: var(--white); 
}
&:hover ${ColumnTitleStyle}{ 
    color: var(--white);
}
`
