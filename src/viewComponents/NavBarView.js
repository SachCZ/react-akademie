import styled from "styled-components";
import constants from "../Constants";
import { Link, withRouter } from "react-router-dom";
import { MdEqualizer, MdFormatLineSpacing } from "react-icons/md";
import React from "react";

const Bar = styled.div`
  display: flex;
  background-color: ${constants.secondaryColor};
  width: 100%;
  height: ${constants.navHeight};
  ${constants.darkerShadow};
  border-bottom: 1px solid ${constants.darkGrey};
  z-index: 2;
  ${constants.primaryStyling}
`;

const BarLink = styled(Link)`
  display: block;
  border: 0;
  border-right: 1px solid ${constants.darkGrey};
  text-align: center;
  height: 100%;
  width: 220px;
  @media (max-width: 500px) {
    flex: 0 0 70px;
  }
  line-height: ${constants.navHeight};
  text-decoration: none;
  color: white;
  position: relative;
  
  font-family: ButtonFont;
  
  ${({selected}) => (selected && `
    background: none;
    background-color: ${constants.secondaryColor};
  
    :after {
    content: "";
    position: absolute;
    top: calc(${constants.navHeight} - 1px);
    background-color: ${constants.secondaryColor};
    left: 0;
    z-index: 4;
    width: 100%;
    height: 15px;
    }`)
  }
`;

const BarLinkText = styled.span`
  @media (max-width: 500px) {
    display: none;
  }
`;

const TransactionsIcon = styled(MdFormatLineSpacing)`
  vertical-align: middle;
  padding-bottom: 2px;
  font-size: 25px;
  margin-right: 5px;
`;

const OverviewIcon = styled(MdEqualizer)`
  vertical-align: middle;
  padding-bottom: 4px;
  font-size: 25px;
  margin-right: 5px;
`;

const NavBarView = ({location}) => {
  return (
    <Bar>
      <BarLink selected={location.pathname==="/"} to="/"><TransactionsIcon/><BarLinkText>Transakce</BarLinkText></BarLink>
      <BarLink selected={location.pathname==="/Overview"} to="/Overview"><OverviewIcon/><BarLinkText>Přehled</BarLinkText></BarLink>
    </Bar>
  );
};

export default withRouter(NavBarView);
