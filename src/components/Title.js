import React from 'react';
import styled from 'styled-components'



const StyledTitle = styled.div`
    color: ${props => props.color || props.theme.colors.primary};
    font-size: ${props => props.size}
`


const Title = props => {
    return <StyledTitle {...props} />
}



export default Title;