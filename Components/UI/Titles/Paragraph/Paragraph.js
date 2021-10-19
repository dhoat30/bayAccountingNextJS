import React from 'react'
import styled from 'styled-components'
function Paragraph(props) {
    return (
        <React.Fragment>
            {props.setDangerHtml ?
                <Container
                    color={props.color}
                    dangerouslySetInnerHTML={{ __html: props.children }}
                    fontWeight={props.fontWeight}
                    className={props.className}
                    onClick={props.onClick}
                    align={props.align}></Container>
                :
                <Container
                    color={props.color}
                    fontWeight={props.fontWeight}
                    className={props.className}
                    onClick={props.onClick}
                    align={props.align}>{props.children}</Container>
            }
        </React.Fragment>

    )
}

export default Paragraph

const Container = styled.div`
position: relative;
    margin: 0;
    font-weight: ${props => props.fontWeight ? props.fontWeight : "400"};
    font-size: 1.2rem;
    text-align: ${props => props.align ? props.align : "left"};
    color: ${props => props.color ? props.color : "var(--darkGrey)"}

`
