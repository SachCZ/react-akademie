import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import OverviewPage from "./OverviewPage";
import TransactionsPage from "./TransactionsPage";
import constants from "../Constants";
import NavBarView from "../viewComponents/NavBarView";

const Layout = styled.div`
  width: 100%;
  min-width: ${constants.pageMinWidth};
`;

const Content = styled.div`
  width: 100%;
`;

const BasePage = () => {
  return (
    <Layout>
      <NavBarView />
      <Content>
        <Switch>
          <Route path="/Overview" component={OverviewPage}/>
          <Route path="/" exact component={TransactionsPage}/>
          <Route render={() => <p>Not found</p>}/>
        </Switch>
      </Content>
    </Layout>
  );
};

export default BasePage;
