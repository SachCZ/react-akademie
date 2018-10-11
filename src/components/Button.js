import React from "react";
import styled from "styled-components"
import constants from "../Constants"

const Button = styled.button`
    cursor: pointer;
    font-weight: bold;
    color: white;
    background-color: ${props => props.secondary ? constants.secondaryColor : constants.primaryColor};
    border: 0;
    padding: ${
      props => {
        if (props.small) return "5px";
        if (props.large) return "15px";
        return "10px";
      }
    }
`;

export default ({flex, children, className, onClick, primary, secondary, large, medium, small}) => {
  return <Button className={className} primary={primary} secondary={secondary} large={large} medium={medium} small={small} onClick={onClick}>{children}</Button>
};