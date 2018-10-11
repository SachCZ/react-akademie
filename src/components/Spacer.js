import React from "react";
import styled from "styled-components"

const Spacer = styled.div`
    flex: ${props => props.flex}
`;


export default ({flex}) => {
  return <Spacer flex={flex}/>
};