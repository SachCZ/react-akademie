import React from "react";
import styled from "styled-components";
import OuterLayout from "./OuterLayout";
import constants from "../Constants";

const InnerLayout = styled.div`
  flex: ${({flex}) => flex};
  display: flex;
  flex-direction: ${({direction}) => direction};
  min-width: ${({minWidth}) => minWidth}px;
  max-width: ${({maxWidth}) => maxWidth + "px" ? maxWidth : "none"};
  min-height: ${({minHeight}) => minHeight}px;
  max-height: ${({maxHeight}) => maxHeight + "px" ? maxHeight : "none"};
  ${constants.debugLayout ? "border: 1px solid black" : ""}
`;


export default InnerLayout;

InnerLayout.defaultProps = {
  flex: "1",
  minWidth: 0,
  minHeight: 0,
  direction: "row"
};