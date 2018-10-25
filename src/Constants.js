const lightGrey = "#DDDDDD";
const darkGrey = "#444444";
const baseColor = "white";
const secondaryColor = "#336B87";
const secondaryColorLight = "#3ca9ca";
const primaryColor = "#2c5c74";
const primaryColorLight = "#4693b9";

export default {
  primaryColor: primaryColor,
  secondaryColor: secondaryColor,
  lightGrey: lightGrey,
  darkGrey: darkGrey,
  grey: "#767676",
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
    background:rgba(255,255,255,0.85);
  `,
  primaryStyling: `
    background: ${primaryColorLight};
    background: -moz-linear-gradient(top, ${primaryColorLight} 0%, ${primaryColor} 100%);
    background: -webkit-linear-gradient(top, ${primaryColorLight} 0%,${primaryColor} 100%);
    background: linear-gradient(to bottom, ${primaryColorLight} 0%,${primaryColor} 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${primaryColorLight}', endColorstr='${primaryColor}',GradientType=0 );
    font-family: ButtonFont;
    border-bottom: 1px solid ${darkGrey};
    color: ${baseColor};
    `,
  secondaryStyling: `
    background: ${secondaryColorLight};
    background: -moz-linear-gradient(top, ${secondaryColorLight} 0%, ${secondaryColor} 100%);
    background: -webkit-linear-gradient(top, ${secondaryColorLight} 0%,${secondaryColor} 100%);
    background: linear-gradient(to bottom, ${secondaryColorLight} 0%,${secondaryColor} 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${secondaryColorLight}', endColorstr='${secondaryColor}',GradientType=0 );
    font-family: ButtonFont;
    border-bottom: 1px solid ${darkGrey};
    color: ${baseColor};
    `,
  navHeight: "50px",
  mainImageHeight: "13vw",
  mainImageMinHeight: "80px",
  pageMinWidth: "350px",
  baseColor: baseColor,
  incomeColor: "green",
  expenseColor: "red",
  incomeColorLight: "#96ffb8",
  expenseColorLight: "#ff979c"
};