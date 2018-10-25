import React from "react";
import Button from "./ButtonView";
import Modal from "react-modal";
import styled from "styled-components";
import InputField from "./InputFieldView";
import OuterLayout from "../layoutComponents/OuterLayout";
import InnerLayout from "../layoutComponents/InnerLayout";
import constants from "../Constants";
import InlineSelectView from "./InlineSelectView";
import { MdClose } from "react-icons/md";


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
  ${constants.secondaryStyling};
  display: flex;
  justify-content: center;
  padding: 5px;
  position: relative;
`;

const HeaderLabel = styled.span`
  line-height: 30px;
  flex: 0 0 50%;
`;

const HeaderClose = styled(MdClose)`
  height: 30px;
  font-size: 30px;
  flex: 0 0 auto;
  position: absolute;
  right: 0;
  cursor: pointer;
`;

const TransactionModal = (props) => {
  const { transaction, onSubmit, onChange, onTypeChange, buttonText, label, typeOptions, onRequestClose } = props;
  const { name, value } = transaction;

  return (
    <Modal
      {...props}
      style={modalAddTransactionCustomStyles}
      contentLabel={label}
    >
      <ModalWrapper>
        <ModalHeader><HeaderLabel>{label}</HeaderLabel><HeaderClose onClick={onRequestClose}/></ModalHeader>
        <form onSubmit={onSubmit} autoComplete="off">
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
                <InnerLayout><InputField onChange={onChange} value={name} name="name"
                                         placeholder={transaction.type.value === "income" ? "např. \"Výplata\"" : "např. \"Nové boty\""}/></InnerLayout>
              </OuterLayout>
            </InnerLayout>
            <InnerLayout>
              <OuterLayout direction="column" marginBetween={5} align="stretch">
                <InnerLayout flex="0 0 1em"><Label>Hodnota</Label></InnerLayout>
                <InnerLayout>
                  <InputField
                    onChange={onChange}
                    value={value} name="value"
                    placeholder={transaction.type.value === "income" ? "např. \"25000\"" : "např. \"1400\""}
                    style={{color: transaction.type.value === "income" ? constants.incomeColor : constants.expenseColor}}
                  />
                </InnerLayout>
              </OuterLayout>
            </InnerLayout>
            <InnerLayout>
              <Button large primary type="submit">{buttonText}</Button>
            </InnerLayout>
          </OuterLayout>
        </form>
      </ModalWrapper>
    </Modal>
  );
};

export default TransactionModal;
