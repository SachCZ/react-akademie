import React, {Component} from "react";
import TransactionModalView from "../viewComponents/TransactionModalView";

const typeOptions = [
  { value: 'income', label: 'Příjem' },
  { value: 'expense', label: 'Výdaj' }
];

class TransactionModalForm extends Component {

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? (target.checked ? "income" : "expense") : target.value;
    const name = target.name;
    const newTransactionCopy = { ...this.props.transaction };
    newTransactionCopy[name] = value;

    this.props.onChange(newTransactionCopy);
  };

  handleTypeChange = (option) => {
    const newTransactionCopy = { ...this.props.transaction };
    newTransactionCopy.type = option;
    this.props.onChange(newTransactionCopy);
  };

  handleSubmit = (event) => {
    event.preventDefault();


    const newTransactionCopy = { ...this.props.transaction };
    newTransactionCopy.type = this.props.transaction.type.value;

    this.props.onSubmit(newTransactionCopy);
  };

  render() {
    const {transaction, onRequestClose, nameError, valueError} = this.props;

    return (
      <TransactionModalView {...this.props} onTypeChange={this.handleTypeChange} onRequestClose={onRequestClose}
                            typeOptions={typeOptions} transaction={transaction} onChange={this.handleInputChange}
                            onSubmit={this.handleSubmit} valueError={valueError} nameError={nameError}/>
    );
  }
}

export default TransactionModalForm;