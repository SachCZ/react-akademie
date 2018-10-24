import React from "react";
import { injectGlobal } from "styled-components";
import Modal from "react-modal";
import LogoFontSrc from "./fonts/WorkSans-ExtraLight.ttf";
import ButtonsFontSrc from "./fonts/WorkSans-Regular.ttf";
import moment from "moment";
import "moment/locale/cs";
import BasePage from "./pages/BasePage";

//TODO readme a aby to fungovalo, konzole čistá, errory hlavne npm install a npm start a server start
//TODO tlacitko na zavirani
//TODO when done remove todos :-D
//TODO reset transaction modal when closed
//TODO resolve images and use macro

moment.locale('cs');

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

const App = () => (
  <BasePage/>
);

export default App;
