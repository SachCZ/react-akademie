import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const Layout = styled.div`
  display: flex;
  flex-direction: ${({direction}) => direction};
  flex: 1;
  align-items: ${({align}) => align};
  justify-content: ${({justify}) => justify};

  
  ${({wrap, marginBetween, direction}) => {
    if (wrap){
      return `
        padding: ${marginBetween/2}px;
        > * {
          margin:  ${marginBetween / 2}px;
        }
       `;
    } else {
      if (direction==="column"){
        return `
          > * {
            margin:  ${marginBetween / 2}px 0 ${marginBetween / 2}px 0;
          }
          > *:first-child {
            margin-top: 0;
          }
          > *:last-child {
            margin-bottom: 0;
          }
        `;
      } else {
        return `
          > * {
            margin: 0 ${marginBetween / 2}px 0 ${marginBetween / 2}px;
          }
          > *:first-child {
            margin-left: 0;
          }
          > *:last-child {
            margin-right: 0;
          }
        `;
      }      
    }
  }}
  padding: ${({padding}) => padding && padding};
  flex-wrap: ${({wrap}) => wrap ? "wrap" : "nowrap"};
`;

const OuterLayout = (props) => {

  //TODO validate children using prop types



  return (<Layout { ...props} >{props.children}</Layout>);


};

OuterLayout.defaultProps = {
  marginBetween: 0,
  direction: "row",
  align: "flex-start",
  justify: "flex-start",
};

export default OuterLayout;
