import React from "react";
import styled from "styled-components";
import constants from "../Constants";
import moment from "moment";
import { MdModeEdit, MdDelete } from "react-icons/md";
import ExpanderView from "./ExpanderView";

const TransactionWrapper = styled.div`
    min-width: ${constants.pageMinWidth};
    display: flex;
    background-color: ${({isFocused}) => isFocused ? "rgba(117, 86, 129, 0.1)" : "transparent"};
    align-items: stretch;
    height: 65px;
    width: 100%;
    ${constants.thinBottomBorder}
    cursor: ${({isFocused}) => isFocused ? "default" : "pointer"}
`;

const TransactionInfo = styled.section`
    padding-left: 9%;
    flex: 55;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

const Name = styled.span`
    margin-bottom: 5px;
    text-decoration: ${({isFocused}) => isFocused ? "underline" : "none"};
    text-decoration-color: ${constants.secondaryColor};
`;
const DateDisplay = styled.span`
    color: ${constants.grey};
`;

const TransactionValue = styled.section`
    flex: 35;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
`;
const Value = styled.span`
    color: ${({type}) => type === "income" ? "black" : "red"};
`;
const TransactionMenu = styled(ExpanderView)`
    flex: 10;
    display: flex;
`;
const MenuExpander = styled(ExpanderView)`
    flex: 1;
    justify-content: flex-end;
    align-items: center;
`;
const buttonSize = 25;
const EditButton = styled(MdModeEdit)`
    width: ${buttonSize}px;
    height: ${buttonSize}px;
    margin: 0 10px 0 35px;
    color: ${constants.secondaryColor};
    cursor: pointer;
`;

const DeleteButton = styled(MdDelete)`
    width: ${buttonSize}px;
    height: ${buttonSize}px;
    color: ${constants.secondaryColor};
    margin: 0 15px 0 10px;
    cursor: pointer;
`;

const TransactionView = (props) => {
  const { transaction, onRequestEdit, onRequestDelete, onRequestFocus} = props;
  const { name, type, value, created, id, isFocused} = transaction;

  const date = moment(created);

  return (
    <TransactionWrapper isFocused={isFocused} key={id} onClick={() => isFocused || onRequestFocus(id)}>
      <TransactionInfo>
        <Name isFocused={isFocused}>{name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}</Name>
        {date.isValid() && <DateDisplay>{date.format("DD. MM. YYYY HH:MM")}</DateDisplay>}
      </TransactionInfo>
      <TransactionValue>
        <Value type={type}>{(type === "income" ? "+" : "-") + value} Kč</Value>
      </TransactionValue>
      <TransactionMenu>
        <MenuExpander isOpen={isFocused}>
          <EditButton onClick={() => onRequestEdit(transaction)}/>
          <DeleteButton onClick={() => onRequestDelete(transaction)}/>
        </MenuExpander>
      </TransactionMenu>
    </TransactionWrapper>
  )
};


export default TransactionView;
