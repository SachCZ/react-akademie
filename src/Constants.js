const lightGrey = "#DDDDDD";
const darkGrey = "#444444";

export default {
  primaryColor: "#3d5861",
  secondaryColor: "#755681",
  lightGrey: lightGrey,
  darkGrey: darkGrey,
  shadow: `
    -webkit-box-shadow: 10px 10px 29px 3px rgba(0,0,0,0.16);
    -moz-box-shadow: 10px 10px 29px 3px rgba(0,0,0,0.16);
    box-shadow: 10px 10px 29px 3px rgba(0,0,0,0.16);`,
  darkerShadow: `
    -webkit-box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
    -moz-box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);`,
  thinBottomBorder: `border-bottom: 1px solid ${lightGrey};`,
  minWidth: 550,
  debugLayout: false,
  semiTransparent: `
    background:rgba(255,255,255,0.9);
  `,
  primaryStyling: `
    background: #96a3a9;
    background: -moz-linear-gradient(top, #96a3a9 0%, #3d5861 100%);
    background: -webkit-linear-gradient(top, #96a3a9 0%,#3d5861 100%);
    background: linear-gradient(to bottom, #96a3a9 0%,#3d5861 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#96a3a9', endColorstr='#3d5861',GradientType=0 );
    font-family: ButtonFont;
    border-bottom: 1px solid ${darkGrey};
    `,
  secondaryStyling: `
    background: #aa8da1;
    background: -moz-linear-gradient(top, #aa8da1 0%, #7b617d 100%);
    background: -webkit-linear-gradient(top, #aa8da1 0%,#7b617d 100%);
    background: linear-gradient(to bottom, #aa8da1 0%,#7b617d 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#aa8da1', endColorstr='#7b617d',GradientType=0 );
    font-family: ButtonFont;
    border-bottom: 1px solid ${darkGrey};
    `
};