import React from "react";
import styled from "styled-components";
import constants from "../Constants";
import { MdExpandMore } from "react-icons/md";
import OuterLayout from "../layoutComponents/OuterLayout";
import InnerLayout from "../layoutComponents/InnerLayout"; //https://react-icons.netlify.com/#/icons/md

const buttonHeight = "25px";

const ButtonLayout = styled(InnerLayout)`
  border: 0;
  background-color: transparent;
  ${constants.thinBottomBorder}
  line-height: ${buttonHeight};
  color: ${constants.darkGrey};
  cursor: pointer;
`;

const Icon = styled(MdExpandMore)`
  width: ${buttonHeight}
  height: ${buttonHeight}
`;


export default ({ children, className, title }) => (
  <OuterLayout className={className} direction="column" align="stretch">
    <ButtonLayout flex={"0 0 " + buttonHeight}>
      <OuterLayout padding="0 0 0 6%">
        <InnerLayout>{title}</InnerLayout>
        <InnerLayout flex={"0 0 " + buttonHeight}><Icon/></InnerLayout>
      </OuterLayout>
    </ButtonLayout>
    <InnerLayout flex="1">
      {children}
    </InnerLayout>
  </OuterLayout>
);
