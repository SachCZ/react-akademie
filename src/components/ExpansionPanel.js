import React from "react";
import styled from "styled-components"
import constants from "../Constants"
import Spacer from "./Spacer"
import { MdExpandMore } from "react-icons/md"; //https://react-icons.netlify.com/#/icons/md

const ExpansionPanel = styled.div`
  display: flex;
  flex-direction: column;
  flex-align: stretch;
`;
const ToggleButton = styled.button`
  display: flex;
  flex: 0 0 32px;
  border: 0;
  background-color: transparent;
  ${constants.thinBottomBorder}
  padding: 0 15px 0 6%;
  line-height: 32px;
  color: #555555;
  cursor: pointer;
`;

const Content = styled.section`
  flex: 1;
`;

export default ({children, className, title}) => (
  <ExpansionPanel className={className}>
    <ToggleButton>
      <span>{title}</span><Spacer flex="auto" /><span><MdExpandMore style={{ verticalAlign: 'middle' }} size="1.5em"/></span>
    </ToggleButton>
    <Content>
      {children}
    </Content>
  </ExpansionPanel>
);
