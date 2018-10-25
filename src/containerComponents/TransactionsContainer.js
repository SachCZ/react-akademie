import React, { Component, Fragment } from "react";
import TransactionModalContainer from "./TransactionModalContainer";
import moment from "moment";
import TransactionsView from "../viewComponents/TransactionsView";
import axios from '../util/axios';
import withTransactions from "../hoc/withTransactions";

const emptyModalTransaction = {
  name: "",
  value: "",
  type: { value: 'income', label: 'Příjem' },
};

class TransactionsContainer extends Component {

  state = {
    modalAddTransactionIsOpen: false,
    modalEditTransactionIsOpen: false,
    pageNum: 1,
    pageSize: 25,
    modalTransaction: emptyModalTransaction,
    filters: {
      type: { value: "all", label: "Vše" }
    },
    displayNum: 25,
    displayNumBase: 25
  };

  openModalAddTransaction = () => (this.setState({ modalAddTransactionIsOpen: true }));
  closeModalAddTransaction = () => (this.setState({ modalAddTransactionIsOpen: false }));

  openModalEditTransaction = (transaction) => {
    const type = transaction.type === "income" ? { value: 'income', label: 'Příjem' } : { value: 'expense', label: 'Výdaj' };

    const newTransaction = { ...transaction, type: type };

    this.setState({ modalTransaction: newTransaction });
    this.setState({ modalEditTransactionIsOpen: true });
  };
  closeModalEditTransaction = () => (this.setState({ modalEditTransactionIsOpen: false }));

  handleFilterChange = (option) => {
    this.setState(prevState => ({ filters: { ...prevState.filters, type: { ...option } } }));
    this.resetDisplayNum();
  };

  handleLoadMore = () => {
    this.setState(prevState => ({displayNum: prevState.displayNum + prevState.displayNumBase}));
  };

  resetDisplayNum = () => {
    this.setState({displayNum: this.state.displayNumBase});
  };

  addTransaction = (transaction) => {
    const transactionCopy = {
      name: transaction.name,
      value: transaction.value,
      type: transaction.type,
      created: moment().valueOf(),
      id: moment().valueOf(),
    };

    axios.post('/transactions', transactionCopy).then(response => {
      this.props.reloadTransactions();
      this.setState((prevState) => ({
        modalTransaction: emptyModalTransaction,
        filters: {...prevState.filters, type: transactionCopy.type === prevState.filters.type.value ? prevState.filters.type : prevState.typeOptions[0]}
      }), this.closeModalAddTransaction);
    });
  };

  deleteTransaction = (transaction) => {
    const id= transaction.id;
    axios.delete("/transactions/" + id).then(response => {
      this.props.reloadTransactions();
    });
  };

  editTransaction = (transaction) => {
    const editedTrans = {
      ...transaction
    };

    const id= transaction.id;
    axios.put("/transactions/" + id, editedTrans).then(response => {
      this.props.reloadTransactions();
      this.closeModalEditTransaction();
    });
  };



  render() {
    const { filters } = this.state;
    const {transactions, focusTransaction, typeOptions} = this.props;

    const filterOut = filters.type.value === "income" ? "expense" : (filters.type.value === "expense" ? "income" : "all");
    const filteredTransactions = transactions.filter(item => item.type !== filterOut);

    const sortedTransactions = filteredTransactions.sort(
      (a, b) => a.created < b.created ? 1 : (a.created > b.created ? -1 : 0)
    );

    return (
      <Fragment>
        <TransactionsView
          transactions={sortedTransactions}
          onFiltersChange={this.handleFilterChange}
          onDeleteTransactionClick={this.deleteTransaction}
          onEditTransactionClick={this.openModalEditTransaction}
          onFocusTransactionClick={focusTransaction}
          onNewTransactionClick={this.openModalAddTransaction}
          onLoadMoreClicked={this.handleLoadMore}
          displayNum={this.state.displayNum}
          typeOption={this.state.filters.type}
          typeOptions={typeOptions}
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

export default withTransactions(TransactionsContainer);
