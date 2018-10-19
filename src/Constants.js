const lightGrey = "#DDDDDD";

export default {
  primaryColor: "#755681",
  secondaryColor: "#378a9c",
  lightGrey: lightGrey,
  darkGrey: "#444444",
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
  debugLayout: false
};