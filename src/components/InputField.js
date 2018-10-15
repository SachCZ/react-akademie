import React from "react";
import styled from "styled-components"
import constants from "../Constants"

const Input = styled.input`
  border: 0;
  border-bottom: 2px solid ${constants.secondaryColor};
  width: 220px;
  :focus {
    outline: none;
    border-bottom: 2px solid ${constants.primaryColor};
  }
`;

const InputField = ({className, placeholder}) => {
  return (
    <Input placeholder={placeholder} className={className}/>
  );
};

export default InputField;
