import styled from "styled-components";
import constants from "../Constants";
import { Link } from "react-router-dom";
import { MdEqualizer, MdFormatLineSpacing } from "react-icons/md";
import React from "react";

const Bar = styled.div`
  display: flex;
  background-color: ${constants.primaryColor};
  width: 100%;
  height: ${constants.navHeight};
  ${constants.darkerShadow};
  border-bottom: 1px solid ${constants.darkGrey};
  z-index: 2;
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
  font-family: ButtonFont;
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

const NavBarView = () => {
  return (
    <Bar>
      <BarLink to="/"><TransactionsIcon/><BarLinkText>Transakce</BarLinkText></BarLink>
      <BarLink to="/Overview"><OverviewIcon/><BarLinkText>Přehled</BarLinkText></BarLink>
    </Bar>
  );
};

export default NavBarView;
