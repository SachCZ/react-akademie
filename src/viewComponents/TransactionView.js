import React from "react";
import styled from "styled-components";
import constants from "../Constants";
import moment from "moment";
import { MdModeEdit, MdDelete } from "react-icons/md";
import ExpanderView from "./ExpanderView";

const TransactionWrapper = styled.div`
    display: flex;
    background-color: ${({isFocused}) => isFocused ? "#EEEEEE" : "white"}
    align-items: stretch;
    height: 65px;
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
`;
const DateDisplay = styled.span`
    color: #767676;
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
    color:#767676;
    cursor: pointer;
`;

const DeleteButton = styled(MdDelete)`
    width: ${buttonSize}px;
    height: ${buttonSize}px;
    color: #767676;
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
        <Name>{name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}</Name>
        {date.isValid() && <DateDisplay>{date.format("DD. MM. YYYY")}</DateDisplay>}
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
