import React from "react";
import { injectGlobal } from "styled-components";
import styled from "styled-components";
import Modal from "react-modal";
import { Link, Route, Switch } from "react-router-dom";
import TransactionsPage from "./pages/TransactionsPage";
import constants from "./Constants";
import PageLayout from "./layoutComponents/PageLayout";
import OuterLayout from "./layoutComponents/OuterLayout";
import InnerLayout from "./layoutComponents/InnerLayout";
import OverviewPage from "./pages/OverviewPage";
import MainImageSrc from "./images/main_image.jpg";
import LogoFontSrc from "./fonts/WorkSans-ExtraLight.ttf";
import ButtonsFontSrc from "./fonts/WorkSans-Regular.ttf";
import axios from 'axios';

//TODO add close button to modal
//TODO make inputs more clickable
//TODO make swicth based on select - for few items its better than select dropdown
//TODO make buttons shaddow to be a little bit lifted and more clickable

Modal.setAppElement("#root");

injectGlobal`
  * {
    font-family: Helvetica;
    font-size: 1em;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    background-color: #EEEEEE;
  }
  @font-face {
    font-family: 'LogoFont';
    src: url(${LogoFontSrc});
  }
  @font-face {
    font-family: 'ButtonFont';
    src: url(${ButtonsFontSrc});
  }
`;

const MainBar = styled.nav`
    background-color: ${constants.primaryColor};
    width: 100%;
    height: 100%;
    ${constants.darkerShadow};
    border-bottom: 1px solid ${constants.darkGrey};
    z-index: 2;
`;

const MainBarLink = styled(Link)`
    display: block;
    border: 0;
    border-right: 1px solid ${constants.darkGrey};
    text-align: center;
    height: 100%;
    width: 100%;
    line-height: 50px;
    text-decoration: none;
    color: white;
    font-family: ButtonFont;
`;

const FooterLayout = styled(InnerLayout)`
  background-color: ${constants.darkGrey};
`;

const MainImageContainer = styled(InnerLayout)`
  ${constants.darkerShadow};
  border-bottom: 1px solid ${constants.darkGrey};
  font-family: LogoFont, sans-serif;
  font-size: 3.5vw;
  color: white;
  line-height: 15vw;
  padding-left: 10%;
  position: relative;
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
  &:after {
    content: "";
    background-image: url(${MainImageSrc});
    background-position: center;
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
   }
`;

const App = () => (
  <PageLayout header={(
    <OuterLayout direction="column" align="stretch">
      <InnerLayout flex="0 0 50px;">
        <MainBar>
          <OuterLayout>
            <InnerLayout flex="0 0 200px"><MainBarLink to="/">Všechny transakce</MainBarLink></InnerLayout>
            <InnerLayout flex="0 0 200px"><MainBarLink to="/Overview">Přehled</MainBarLink></InnerLayout>
          </OuterLayout>
        </MainBar>
      </InnerLayout>
      <MainImageContainer flex="0 0 15vw;">
        VŠECHNY TRANSAKCE
      </MainImageContainer>
    </OuterLayout>
  )} content={(
    <Switch>
      <Route path="/Overview" component={OverviewPage}/>
      <Route path="/" exact component={TransactionsPage}/>
      <Route render={() => <p>Not found</p>}/>
    </Switch>
  )} footer={(
    <OuterLayout direction="column" align="stretch">
      <FooterLayout flex="0 0 300px;"></FooterLayout>
    </OuterLayout>
  )}/>
);

export default App;
