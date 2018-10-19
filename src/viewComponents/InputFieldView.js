import styled from "styled-components"
import constants from "../Constants"

const InputFieldView = styled.input`
  border: 0;
  border-bottom: 2px solid ${constants.secondaryColor};
  width: 220px;
  :focus {
    outline: none;
    border-bottom: 2px solid ${constants.primaryColor};
  }
`;

export default InputFieldView;
