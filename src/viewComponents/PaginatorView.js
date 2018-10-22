import React, { Fragment } from "react";
import styled from "styled-components";
import constants from "../Constants";
import { MdMoreHoriz } from "react-icons/md"; //https://react-icons.netlify.com/#/icons/md

const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  align-items: stretch;
  justify-content: center;
`;
const PageTick = styled.div`
   flex: 0 0 40px;
   ${({selected}) => {
     if (selected){
       return constants.primaryStyling;
     } else {
       return constants.secondaryStyling;
     }
   }};
   color: white;
   font-weight: bold;
   line-height: 40px;
   text-align: center;
   margin: 0px 4px 0px 4px;
   cursor: pointer;
`;
const Dots = styled(MdMoreHoriz)`
    font-size: 20px;
    height: 40px;
    padding-top: 10px;    
    color: ${constants.secondaryColor};
    cursor: pointer;
`;

const PaginatorView = ({numOfPages, className, onPageNumChange, pageNum, pagesAround}) => {
  const pageNumbers = Array.from({length: numOfPages}, (x, i) => i+1);

  let displayFirst = true;
  let displayLast = true;
  let pagesFrom = 0;
  let pagesTo = numOfPages;

  if (numOfPages <= 2*pagesAround + 2){
    displayFirst = false;
    displayLast = false;
  } else if (pageNum - pagesAround  <= 1) {
    pagesTo = 2 * pagesAround + 1;
    displayFirst = false;
  }
   else if (pagesAround + pageNum >= numOfPages) {
    pagesFrom = numOfPages - 2 * pagesAround - 1;
    displayLast = false;
  } else {
    pagesTo = pageNum + pagesAround;
    pagesFrom = pageNum - pagesAround - 1;
  }

  const relevantPageNumbers = pageNumbers.slice(pagesFrom, pagesTo);

  return (

    <PaginationWrapper className={className}>
      {displayFirst &&
      <Fragment>
        <PageTick selected={pageNum===1} key={1} onClick={() => {onPageNumChange(1)}}>{1}</PageTick>
        <Dots onClick={() => {onPageNumChange(pageNum - pagesAround - 1)}}/>
      </Fragment>}
      {relevantPageNumbers.map(number => <PageTick selected={pageNum===number} key={number} onClick={() => {onPageNumChange(number)}}>{number}</PageTick>)}
      {displayLast &&
      <Fragment>
        <Dots onClick={() => {onPageNumChange(pageNum + pagesAround + 1)}}/>
        <PageTick selected={pageNum===numOfPages} key={numOfPages} onClick={() => {onPageNumChange(numOfPages)}}>{numOfPages}</PageTick>
      </Fragment>}
    </PaginationWrapper>

  );
};

export default PaginatorView;
