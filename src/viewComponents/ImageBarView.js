import React from "react";
import styled from "styled-components";
import constants from "../Constants";
import { withRouter } from "react-router-dom";

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

const MainText = styled.span`
  font-family: LogoFont, sans-serif;
  font-size: 3.5vw;
  @media (max-width: 800px) {
    font-size: 27px;
  }
  color: white;
`;

const ImageBarView = ({ location }) => {
  return (
    <Bar>
      <MainText>
        {
          {
            "/": "VŠECHNY TRANSAKCE",
            "/Overview": "CELKOVÝ PŘEHLED"
          }[location.pathname]
        }
      </MainText>
    </Bar>
  );
};

export default withRouter(ImageBarView);
