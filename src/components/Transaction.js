import React from "react";
import styled from "styled-components";
import constants from "../Constants";

const TransactionWrapper = styled.div`
    display: flex;
    min-width: 500px;
    background-color: white;
    align-items: stretch;
    height: 65px;
    ${constants.thinBottomBorder}    
`;

const TransactionInfo = styled.section`
    padding-left: 9%;
    flex: 80;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

const Name = styled.span`
    margin-bottom: 5px;
`;
const Date = styled.span`
  
`;

const TransactionValue = styled.section`
    flex: 15;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
`;
const Value = styled.span`
    color: ${({type}) => type === "income" ? "black" : "red"};
`;
const TransactionMenu = styled.div`
    flex: 10;
`;


export default ({ transaction: { name, type, value, created, id } }) => (
    <TransactionWrapper key={id}>
      <TransactionInfo>
        <Name>{name}</Name>
        <Date>{created}</Date>
      </TransactionInfo>
      <TransactionValue>
        <Value type={type}>{ (type === "income" ? "+" : "-") + value} Kč</Value>
      </TransactionValue>
      <TransactionMenu>

      </TransactionMenu>
    </TransactionWrapper>
)