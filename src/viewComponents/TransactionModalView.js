import React from "react";
import ButtonView from "./ButtonView";
import Modal from "react-modal";
import styled from "styled-components";
import InputField from "./InputFieldView";
import constants from "../Constants";
import InlineSelectView from "./InlineSelectView";
import { MdClose } from "react-icons/md";

const modalAddTransactionCustomStyles = {
  overlay: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "999"
  },
  content: {
    position: "static",
    flex: "0 1 350px",
    padding: "0",
    borderRadius: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch"
  }
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
`;

const Header = styled.h2`
  text-align: center;
  margin: 0;
  ${constants.secondaryStyling};
  display: flex;
  justify-content: center;
  padding: 5px;
  position: relative;
`;

const HeaderLabel = styled.span`
  line-height: 30px;
`;

const HeaderClose = styled(MdClose)`
  height: 30px;
  font-size: 30px;
  flex: 0 0 auto;
  position: absolute;
  right: 0;
  cursor: pointer;
`;

const Select = styled(InlineSelectView)`
  
`;

const LabelRow = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;
const Label = styled.label`
  padding-left: 5px;
`;

const Error = styled.span`
  color: red;
  font-style: italic;
`;
const Input = styled(InputField)`


`;
const SubmitButton = styled(ButtonView)`
  margin-top: 20px;
`;

const TransactionModal = (props) => {
  const { transaction, onSubmit, onChange, onTypeChange, buttonText, label, typeOptions, onRequestClose, valueError, nameError } = props;
  const { name, value } = transaction;

  return (
    <Modal
      {...props}
      style={modalAddTransactionCustomStyles}
      contentLabel={label}
    >
      <Header><HeaderLabel>{label}</HeaderLabel><HeaderClose onClick={onRequestClose}/></Header>
      <Wrapper onSubmit={onSubmit} autoComplete="off">
        <Select
          buttonStyle="flex: 0 0 100px; margin: 0;"
          selectedOption={transaction.type}
          onChange={onTypeChange}
          options={typeOptions}
        />
        <LabelRow>
          <Label>Název</Label>
          {nameError && <Error>{nameError}</Error>}
        </LabelRow>
        <Input onChange={onChange}
               value={name} name="name"
               placeholder={transaction.type.value === "income" ? "např. Výplata" : "např. Nové boty"}
               isValid={nameError === ""}
        />
        <LabelRow>
          <Label>Hodnota</Label>
          {valueError && <Error>{valueError}</Error>}
        </LabelRow>
        <Input onChange={onChange}
               value={value} name="value"
               placeholder={transaction.type.value === "income" ? "např. 25000" : "1400"}
               isValid={valueError === ""}
        />
        <SubmitButton large type="submit">{buttonText}</SubmitButton>
      </Wrapper>
    </Modal>
  );
};

export default TransactionModal;
