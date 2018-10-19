import styled from "styled-components"
import constants from "../Constants"

const ButtonView = styled.button`
    cursor: pointer;
    font-weight: bold;
    color: white;
    width: 100%;
    height: 100%;
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

export default ButtonView;