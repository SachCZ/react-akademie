import React from "react";
import CashFlow from "../components/CashFlow"
import {injectGlobal} from "styled-components"

injectGlobal`
  * {
    font-family: Helvetica;
  }
`;

const App = () => (

  <div id="wrapper">
    <CashFlow/>
  </div>
);

export default App;
