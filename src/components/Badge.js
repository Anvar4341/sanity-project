import React from 'react'
import styled from "styled-components"


function Badge({content}){
    return <Div>{content}</Div>
}



const Div = styled.div`
    padding: 0.8rem;
    border-radius: 26px;
    font-weight: 500;
    color: white;
    background-color: blue;
    cursor: pointer;
`

export default Badge;