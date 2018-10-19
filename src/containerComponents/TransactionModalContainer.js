import React from "react";
import TransactionModalView from "../viewComponents/TransactionModalView";

const TransactionModalForm = (props) => {
  const {transaction, onChange, onSubmit} = props;

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? (target.checked ? "income" : "expense") : target.value;
    const name = target.name;

    const newTransactionCopy = { ...transaction };
    newTransactionCopy[name] = value;
    onChange(newTransactionCopy);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(transaction);
  };

  return (
    <TransactionModalView {...props} transaction={transaction} onChange={handleInputChange} onSubmit={handleSubmit}/>
  );

};

export default TransactionModalForm;