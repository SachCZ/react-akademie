import React from "react";
import CashFlow from "../components/CashFlow"
import {injectGlobal} from "styled-components"
import styled from "styled-components"

injectGlobal`
  * {
    font-family: Helvetica;
    font-size: 1em;
  }
  body {
    margin: 0;
  }
`;


const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-item: stretch;
`;
const MainBar = styled.nav``;
const MainImage = styled.img``;
const Header = styled.header`
    flex: 0 0 300px;
    background-color: #CCCCCC;
`;
const PageBody = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;
const Footer = styled.footer`
    flex: 0 0 300px;
    background-color: #999999;
`;

const App = () => (
  <Page>
    <Header>
      <MainBar/>
      <MainImage/>
    </Header>
    <PageBody>
      <CashFlow/>
    </PageBody>
    <Footer></Footer>
  </Page>
);

export default App;
