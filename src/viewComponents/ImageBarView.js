import React from "react";
import styled from "styled-components";
import OuterLayout from "../layoutComponents/OuterLayout";
import constants from "../Constants";
import MainImageSrc from "../images/main_image.jpg";

const Bar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${constants.darkerShadow};
  border-bottom: 1px solid ${constants.darkGrey};
  height: ${constants.mainImageHeight};
  min-height: ${constants.mainImageMinHeight}
  padding-left: 10%;
  position: relative;
  background-color: ${constants.secondaryColor}
  z-index: -1;
`;

/*
&:before {
    background-color: ${constants.primaryColor};
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -2;
    opacity: 1;
  }
  @media (min-width: 800px) {
    &:after {
      content: "";
      background: url(${MainImageSrc}) center;
      opacity: 0.5;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: -1;
     }
   }
 */

const MainText = styled.span`
  font-family: LogoFont, sans-serif;
  font-size: 3.5vw;
  @media (max-width: 800px) {
    font-size: 27px;
  }
  color: white;
`;

const ImageBarView = ({text}) => {
  return (
    <Bar>
      <MainText>{text}</MainText>
    </Bar>
  );
};

export default ImageBarView;
