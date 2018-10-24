import React, { Component } from "react";
import axios from "../util/axios";

const WithTransactions = (WrappedComponent) => {
  class Wrapper extends Component {
    state = {
      transactions: []
    };

    componentDidMount() {
      this.reloadTransactions();
    }

    reloadTransactions = () => {
      axios.get('/transactions').then(response => {
        this.setState({ transactions: response.data.map(transaction => ({ ...transaction, isFocused: false })) });
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
      return (<WrappedComponent focusTransaction={this.focusTransaction} reloadTransactions={this.reloadTransactions}{...this.state} {...this.props} />);
    }
  }
  return Wrapper;
};

export default WithTransactions;