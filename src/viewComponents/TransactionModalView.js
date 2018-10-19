import React from "react";
import Button from "./ButtonView";
import Modal from "react-modal";
import styled from "styled-components";
import SlideToggle from "./SlideToggleView";
import InputField from "./InputFieldView";

const modalAddTransactionCustomStyles = {
  overlay: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    position: "static",
    flex: "0 1 550px",
    padding: "0",
    borderRadius: "0",
    display: "flex",
    alignItems: "stretch"
  }
};

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
  border-bottom: 1px solid rgb(204, 204, 204);
  color: #666666;
`;

const ModalContent = styled.form`
  display: flex;
  flex-direction: row;
  padding: 30px;
`;

const ModalColumn = styled.div`
  flex: 0.5;
  flex-direction: column;
  display: flex;
  flex: 0.45;
`;

const ModalColumnLeft = styled(ModalColumn)`

`;


const ModalColumnRight = styled(ModalColumn)`
    align-items: flex-end;
`;
const ModalSlideToggle = styled(SlideToggle)`
    margin-top: 10px;
    margin-bottom: 20px;
`;
const ModalNameInput = styled(InputField)`
    margin-bottom: 20px;
`;
const ModalValueInput = styled(InputField)`
    margin-bottom: 48px;
    text-align: right;
    font-size: 2.5em;
    margin-top: auto;
`;

const TransactionModal = (props)=> {
  const {transaction, onSubmit, onChange, buttonText, label} = props;
  const {name, type, created, value} = transaction;

  return (
    <Modal
      {...props}
      style={modalAddTransactionCustomStyles}
      contentLabel={label}
    >
      <ModalWrapper>
        <ModalHeader>{label}</ModalHeader>
        <ModalContent onSubmit={onSubmit}>
          <ModalColumnLeft>
            <ModalSlideToggle checked={type === "income"} onChange={onChange} name="type">
              <span>Příjem</span>
              <span>Výdaj</span>
            </ModalSlideToggle>
            <ModalNameInput onChange={onChange} value={name} name="name" placeholder="Název"/>
          </ModalColumnLeft>
          <ModalColumnRight>
            <ModalValueInput onChange={onChange} value={value} name="value" placeholder="Hodnota"/>
            <Button large primary type="submit">{buttonText}</Button>
          </ModalColumnRight>
        </ModalContent>
      </ModalWrapper>
    </Modal>
  )
};

export default TransactionModal;
