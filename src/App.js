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
import MainImageSrc from "./images/main_image.jpg"

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
    font-weight: bold;
    text-decoration: none;
    color: white;
`;

const MainImageContainer = styled(InnerLayout)`
  ${constants.darkerShadow};
  border-bottom: 1px solid ${constants.darkGrey};
  position: relative;
  &:after {
    content: "";
    background-image: url(${MainImageSrc});
    background-position: center;
    opacity: 0.9;
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
            <InnerLayout flex="0 0 200px"><MainBarLink to="/">Včechny transakce</MainBarLink></InnerLayout>
            <InnerLayout flex="0 0 200px"><MainBarLink to="/Overview">Přehled</MainBarLink></InnerLayout>
          </OuterLayout>
        </MainBar>
      </InnerLayout>
      <MainImageContainer flex="0 0 300px;">
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
      <InnerLayout flex="0 0 200px;"></InnerLayout>
    </OuterLayout>
  )}/>
);

export default App;
