import styled from "styled-components"
import constants from "../Constants"

const InputFieldView = styled.input`
  border: 0;
  border: 1px solid ${constants.lightGrey};
  padding: 20px 20px 15px 10px;
  border-bottom: 1px solid ${constants.darkerShadow};
  width: 100%;
  :focus {
    outline: none;
    border: 2px solid ${constants.primaryColor};
  }
  ::placeholder {
    font-style: italic;
  }
`;

export default InputFieldView;
