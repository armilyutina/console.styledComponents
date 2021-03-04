import React from 'react';
import styled, { css, keyframes } from 'styled-components'



const rotateButton = keyframes`

    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }

`



const StyledButton = styled.button`
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 18px;
    border-radius: 5px;
    align-self: ${props => props.align || "flex-start" };

    &:focus {
        outline: none;
    }

    &:hover {
        animation: ${rotateButton} 1s infinite linear;
    }


    ${props => props.primary && css`
            color: ${props => props.color || props.theme.colors.primary};
            backgroud: ${props => props.background || "transparent"}
    `};
    
    ${props => props.outlined && css`
            color: ${props => props.color || "white"};
            background: transparent;
            border: 1px solid ${props => props.color || "white"}
    `};


`


const LargeButton = styled(StyledButton)`
    font-size: 32px;
`

const Button = props => {
    return <LargeButton {...props} />
}



export default Button;