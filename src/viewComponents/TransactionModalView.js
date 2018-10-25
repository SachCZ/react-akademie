import React from "react";
import Button from "./ButtonView";
import Modal from "react-modal";
import styled from "styled-components";
import InputField from "./InputFieldView";
import OuterLayout from "../layoutComponents/OuterLayout";
import InnerLayout from "../layoutComponents/InnerLayout";
import constants from "../Constants"
import InlineSelectView from "./InlineSelectView";

//TODO refactor this

const modalAddTransactionCustomStyles = {
  overlay: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    position: "static",
    flex: "0 1 350px",
    padding: "0",
    borderRadius: "0",
    display: "flex",
    alignItems: "stretch"
  }
};

const Label = styled.label`
  padding-left: 5px;
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1;
`;

const ModalHeader = styled.h2`
  text-align: center;
  margin: 0;
  padding: 10px;
  ${constants.secondaryStyling};
`;





const TransactionModal = (props)=> {
  const {transaction, onSubmit, onChange, onTypeChange, buttonText, label, typeOptions} = props;
  const {name, value} = transaction;

  return (
    <Modal
      {...props}
      style={modalAddTransactionCustomStyles}
      contentLabel={label}
    >
      <ModalWrapper>
        <ModalHeader>{label}</ModalHeader>
        <form onSubmit={onSubmit}>
          <OuterLayout direction="column" align="stretch" padding="30px" marginBetween={15}>
            <InnerLayout>
              <InlineSelectView
                buttonStyle="width: 100px; margin: 0;"
                selectedOption={transaction.type}
                onChange={onTypeChange}
                options={typeOptions}
              />
            </InnerLayout>
            <InnerLayout>
              <OuterLayout direction="column" marginBetween={5} align="stretch">
                <InnerLayout flex="0 0 1em"><Label>Název</Label></InnerLayout>
                <InnerLayout><InputField onChange={onChange} value={name} name="name" placeholder='např. "Nové boty"'/></InnerLayout>
              </OuterLayout>
            </InnerLayout>
            <InnerLayout>
              <OuterLayout direction="column"  marginBetween={5} align="stretch">
                <InnerLayout flex="0 0 1em"><Label>Hodnota</Label></InnerLayout>
                <InnerLayout><InputField onChange={onChange} value={value} name="value" placeholder='např. "1400"'/></InnerLayout>
              </OuterLayout>
            </InnerLayout>
            <InnerLayout>
              <Button large primary type="submit">{buttonText}</Button>
            </InnerLayout>
          </OuterLayout>
        </form>
      </ModalWrapper>
    </Modal>
  )
};

export default TransactionModal;
