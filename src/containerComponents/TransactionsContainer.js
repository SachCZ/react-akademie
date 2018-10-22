import React, { Component, Fragment } from "react";
import TransactionModalContainer from "./TransactionModalContainer";
import moment from "moment";
import TransactionsView from "../viewComponents/TransactionsView";
import axios from '../util/axios';

const emptyModalTransaction = {
  name: "",
  value: "",
  type: { value: 'income', label: 'Příjem' },
};

class TransactionsContainer extends Component {

  state = {
    transactions: [],
    modalAddTransactionIsOpen: false,
    modalEditTransactionIsOpen: false,
    pageNum: 1,
    pageSize: 25,
    modalTransaction: emptyModalTransaction,
    filters: {
      type: { value: "all", label: "Vše" }
    },
    typeOptions: [
      { value: 'all', label: 'Vše' },
      { value: 'income', label: 'Příjmy' },
      { value: 'expense', label: 'Výdaje' }
    ],
  };

  componentDidMount() {
    this.reloadTransactions();
  }

  reloadTransactions(){
    axios.get('/transactions').then(response => {
      this.setState({ transactions: response.data.map(transaction => ({ ...transaction, isFocused: false })) });
    });
  }

  calculateTotal = (array) =>  array.reduce((sum, transaction) => {
    const sign = transaction.type === "income" ? 1 : -1;
    return sum + sign * transaction.value;
  }, 0);

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
  };

  addTransaction = (transaction) => {
    const transactionCopy = {
      name: transaction.name,
      value: transaction.value,
      type: transaction.type,
      id: moment().valueOf(),
      created: moment().valueOf()
    };

    axios.post('/transactions', transactionCopy).then(response => {
      this.setState((prevState) => ({
        transactions: [response.data, ...prevState.transactions],
        modalTransaction: emptyModalTransaction,
        filters: {...prevState.filters, type: transactionCopy.type === prevState.filters.type.value ? prevState.filters.type : prevState.typeOptions[0]}
      }), this.closeModalAddTransaction);
    });
  };

  deleteTransaction = (transaction) => {
    const id= transaction.id;
    axios.delete("/transactions/" + id).then(response => {
      this.reloadTransactions();
    });
  };

  editTransaction = (transaction) => {
    const editedTrans = {
      ...transaction
    };

    const id= transaction.id;
    axios.put("/transactions/" + id, editedTrans).then(response => {
      this.reloadTransactions();
      this.closeModalEditTransaction();
    });
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
    const { transactions, data, filters } = this.state;

    const filterOut = filters.type.value === "income" ? "expense" : (filters.type.value === "expense" ? "income" : "all");
    const filteredTransactions = transactions.filter(item => item.type !== filterOut);

    const sortedTransactions = filteredTransactions.sort(
      (a, b) => a.id < b.id ? 1 : (a.id > b.id ? -1 : 0)
    );

    return (
      <Fragment>
        <TransactionsView
          transactions={sortedTransactions}
          transactionsRaw={data}
          onFiltersChange={this.handleFilterChange}
          onDeleteTransactionClick={this.deleteTransaction}
          onEditTransactionClick={this.openModalEditTransaction}
          onFocusTransactionClick={this.focusTransaction}
          onNewTransactionClick={this.openModalAddTransaction}
          typeOption={this.state.filters.type}
          typeOptions={this.state.typeOptions}
          total={this.calculateTotal(sortedTransactions)}
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
