import React from "react";
import TransactionModalView from "../viewComponents/TransactionModalView";

const typeOptions = [
  { value: 'income', label: 'Příjem' },
  { value: 'expense', label: 'Výdaj' }
];

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

  const handleTypeChange = (option) => {
    const newTransactionCopy = { ...transaction };
    newTransactionCopy.type = option;
    onChange(newTransactionCopy);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(transaction);
  };

  return (
    <TransactionModalView {...props} onTypeChange={handleTypeChange}  typeOptions={typeOptions} transaction={transaction} onChange={handleInputChange} onSubmit={handleSubmit}/>
  );

};

export default TransactionModalForm;