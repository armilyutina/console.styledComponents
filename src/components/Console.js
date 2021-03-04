import React, { useState } from 'react';
import styled from 'styled-components'

import Flex from './Flex';
import Line from './Line';



const StyledConsole = styled.textarea`
    width: 100%;
    height: 70vh;
    font-size: 24px;
    color: green;
    border: none; 
    resize: none;

    &:focus {
        outline: none;
    }


    @media ${props => props.theme.media.phone} {
        border: 1px solid #fe465c; 
    }

    @media ${props => props.theme.media.tablet} {
        border: 1px solid #fe465c; 
    }
`


const Console = ({color, ...props}) => {

    const [lines, setLines] = useState(['C:/users/armilyutina/desktop> '])

    const onPress = e => {
        if(e.charCode === 13){
            setLines([...lines, 'C:/users/armilyutina/desktop> '])
        }
    } 



    return (
        <Flex >
            <Flex direction = "column" margin = " 0 10px">
                {
                    lines.map(line => <Line color = {color} >{ line + "  " }</Line>)
                }
            </Flex>

            <StyledConsole onKeyPress = {onPress} color = {color} {...props} />
        </Flex>
    )
}



export default Console;