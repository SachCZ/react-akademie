import data from "../data.json";
import React, { Component, Fragment } from "react";
import TransactionModalContainer from "./TransactionModalContainer";
import moment from "moment";
import TransactionsView from "../viewComponents/TransactionsView";

const emptyModalTransaction = {
  name: "",
  value: "",
  type: "income",
  created: moment()
};

class TransactionsContainer extends Component {

  state = {
    transactions: [],
    data: data,
    modalAddTransactionIsOpen: false,
    modalEditTransactionIsOpen: false,
    pageNum: 1,
    pageSize: 25,
    modalTransaction: emptyModalTransaction
  };

  componentDidMount() {
    this.setState({ transactions: data.map(transaction => ({ ...transaction, isFocused: false })) });
  }

  openModalAddTransaction = () => (this.setState({ modalAddTransactionIsOpen: true }));
  closeModalAddTransaction = () => (this.setState({ modalAddTransactionIsOpen: false }));

  openModalEditTransaction = (transaction) => {
    const newTransaction = { ...transaction };

    this.setState({ modalTransaction: newTransaction });
    this.setState({ modalEditTransactionIsOpen: true });
  };
  closeModalEditTransaction = () => (this.setState({ modalEditTransactionIsOpen: false }));

  handleFilterChange = (filtredTransactions) => {
    this.setState({ transactions: filtredTransactions, pageNum: 1 });
  };

  addTransaction = (transaction) => {
    const transactionCopy = {
      name: transaction.name,
      value: transaction.value,
      type: transaction.type,
      id: moment().valueOf(),
      created: moment().valueOf()
    };

    this.setState((prevState) => ({
      data: [transactionCopy, ...prevState.data],
      transactions: [transactionCopy, ...prevState.data],
      modalTransaction: emptyModalTransaction
    }), this.closeModalAddTransaction);
  };

  deleteTransaction = (transaction) => {
    this.setState((prevState => ({ transactions: prevState.transactions.filter(item => item.id !== transaction.id) })));
  };

  editTransaction = (transaction) => {
    const newData = this.state.data.map(item => item.id === transaction.id ? {
      name: transaction.name,
      value: transaction.value,
      type: transaction.type,
      id: transaction.id
    } : item);
    this.setState((prevState) => ({
      data: newData,
      transactions: newData,
      modalTransaction: emptyModalTransaction
    }), this.closeModalEditTransaction);
  };

  focusTransaction = (id) => {
    this.setState((prevState) => ({
      transactions: prevState.transactions.map(transaction => ({
        ...transaction,
        isFocused: id === transaction.id
      }))
    }));
  };

  render() {
    const { transactions, data } = this.state;

    return (
      <Fragment>
        <TransactionsView
          transactions={transactions}
          transactionsRaw={data}
          onFiltersChange={this.handleFilterChange}
          onDeleteTransactionClick={this.deleteTransaction}
          onEditTransactionClick={this.openModalEditTransaction}
          onFocusTransactionClick={this.focusTransaction}
          onNewTransactionClick={this.openModalAddTransaction}
        />
        <TransactionModalContainer
          isOpen={this.state.modalAddTransactionIsOpen}
          onRequestClose={this.closeModalAddTransaction}
          onSubmit={this.addTransaction}
          transaction={this.state.modalTransaction}
          onChange={(trans) => {
            this.setState({ modalTransaction: { ...trans } });
          }}
          buttonText="Přidat transakci"
          label="Nová transakce"
        />
        <TransactionModalContainer
          isOpen={this.state.modalEditTransactionIsOpen}
          onRequestClose={this.closeModalEditTransaction}
          onSubmit={this.editTransaction}
          transaction={this.state.modalTransaction}
          onChange={(trans) => {
            this.setState({ modalTransaction: { ...trans } });
          }}
          buttonText="Uložit"
          label="Upravit transakci"
        />
      </Fragment>
    );
  }
}

export default TransactionsContainer;
