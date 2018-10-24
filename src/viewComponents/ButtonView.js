import styled from "styled-components"
import constants from "../Constants"

const ButtonView = styled.button`
    cursor: pointer;
    color: white;
    width: 100%;
    border: 0;
    ${constants.darkerShadow}
    ${props => {
      if (props.secondary){
        return constants.secondaryStyling;
      }else{
        return constants.primaryStyling;
      }
    }}
    padding: ${
      props => {
        if (props.small) return "5px";
        if (props.large) return "15px";
        return "10px";
      }
    }
`;

export default ButtonView;