import React, {Component} from "react";
import styled from "styled-components"
import constants from "../Constants"

const Switch = styled.div`
  width: 150px;
  display: flex;
  appearance: none;
`;

const SliderContainer = styled.div`
  display: flex;
  flex: 1;
  background-color: #DDDDDD;
  cursor: pointer;
  
  & > * {
    flex: 1 1 0;
    padding: 10px 15px 10px 15px;
    text-align: center;
  }
  & > *:first-child {
    background-color: ${props => props.checked === true ? constants.secondaryColor : "transparent"};
    color: ${props => props.checked === true ? "white" : "#999999"};
    font-weight: ${props => props.checked === true ? "bold" : "normal"};

  }
  & > *:last-child {
    background-color: ${props => props.checked === false ? constants.secondaryColor : "transparent"};
    color: ${props => props.checked === false ? "white" : "#999999"};
    font-weight: ${props => props.checked === false ? "bold" : "normal"};
  }
`;


const SlideToggleView = ({children, checked, onChange, className, name}) => {
  const handleClick = () => {
    onChange({
      target: {
        type: 'checkbox',
        name: name,
        checked: !checked
      }
    });
  };


  return (
    <Switch className={className} onClick={handleClick}>
      <SliderContainer checked={checked}>
        {children}
      </SliderContainer>
    </Switch>
  );
};

export default SlideToggleView;
