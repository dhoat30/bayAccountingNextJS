import React, { useState } from 'react'
import Paragraph from '../Titles/Paragraph/Paragraph'
import ColumnTitle from '../Titles/Titles/ColumnTitle'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/pro-light-svg-icons'

function Accordion({ title, content, setDangerHtml }) {
    const [showContent, setShowContent] = useState(false)
    return (
        <Container bkColor={showContent}>
            <FlexBox bkColor={showContent} onClick={() => setShowContent(showContent ? false : true)}>
                <ColumnTitleStyle titlecolor={showContent}>{title}</ColumnTitleStyle>
                {!showContent ?
                    <IconStyle icon={showContent ? faMinus : faPlus} color="#2e5e37" /> :
                    <IconStyle icon={showContent ? faMinus : faPlus} color="#ffffff" />
                }
            </FlexBox>
            {showContent &&
                <ParagraphStyle setDangerHtml={setDangerHtml} color="var(--white)">{content}</ParagraphStyle>}
        </Container>
    )
}

export default Accordion

const Container = styled.div`
    background: ${props => props.bkColor ? "var(--darkGreen)" : " var(--offWhite)"};
    cursor: pointer; 
    padding: ${props => props.bkColor ? "15px 20px" : "0"};
    margin: 20px 0;
`
const IconStyle = styled(FontAwesomeIcon)`
    font-size: 2rem;

`
const ParagraphStyle = styled(Paragraph)`
    margin-top: 5px;
   
`
const ColumnTitleStyle = styled(ColumnTitle)`
 @media (max-width: 500px){ 
        font-size: 1.2rem;
    }
color: ${props => props.titlecolor ? "var(--white)" : "var(--darkGrey) "};
`

const FlexBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

padding: ${props => props.bkColor ? "0" : "15px 20px"};
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
