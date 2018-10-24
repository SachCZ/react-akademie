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
import { MdFormatLineSpacing, MdEqualizer } from "react-icons/md";
import moment from "moment";
import "moment/locale/cs";

moment.locale('cs');


//TODO add close button to modal

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
    overflow: hidden; 
`;
//TODO this is broken, should not be overflow hidden
const MainBarLink = styled(Link)`
    display: block;
    border: 0;
    border-right: 1px solid ${constants.darkGrey};
    text-align: center;
    height: 100%;
    flex: 0 0 220px;
    @media (max-width: 500px) {
      flex: 0 0 70px;
    }
    line-height: 50px;
    text-decoration: none;
    color: white;
    font-family: ButtonFont;
`;

const MainImageContainer = styled(OuterLayout)`
  ${constants.darkerShadow};
  border-bottom: 1px solid ${constants.darkGrey};
  flex: 0 0 15vw;
  min-height: 80px;
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
  @media (min-width: 800px) {
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
   }
`;

const MainText = styled.span`
  font-family: LogoFont, sans-serif;
  font-size: 3.5vw;
  @media (max-width: 800px) {
    font-size: 27px;
  }
  color: white;
`;

const MainBarLinkText = styled.span`
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

const App = () => (
  <PageLayout header={(
    <OuterLayout direction="column" align="stretch">
      <InnerLayout flex="0 0 50px;">
        <MainBar>
          <OuterLayout>
            <MainBarLink to="/"><TransactionsIcon/><MainBarLinkText>Transakce</MainBarLinkText></MainBarLink>
            <MainBarLink to="/Overview"><OverviewIcon/><MainBarLinkText>Přehled</MainBarLinkText></MainBarLink>
          </OuterLayout>
        </MainBar>
      </InnerLayout>
      <MainImageContainer direction="column" justify="center">
        <MainText>VŠECHNY TRANSAKCE</MainText>
      </MainImageContainer>
    </OuterLayout>
  )} content={(
    <Switch>
      <Route path="/Overview" component={OverviewPage}/>
      <Route path="/" exact component={TransactionsPage}/>
      <Route render={() => <p>Not found</p>}/>
    </Switch>
  )}
  />
);

export default App;
