import React from 'react';
import styled from 'styled-components'



const StyledFlex = styled.div`
    display: flex;
    justify-content: ${props => props.justify || "stretch" };
    align-items: ${props => props.align || "stretch" };
    flex-direction: ${props => props.direction || "row" };
    margin: ${props => props.margin || "0" };
`


const Flex = props => {
    return <StyledFlex {...props} />
}



export default Flex;