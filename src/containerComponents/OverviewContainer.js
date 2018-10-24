import React, { Component } from "react";
import moment from "moment";
import OverviewView from "../viewComponents/OverviewView";
import withTransactions from "../hoc/withTransactions";

class OverviewContainer extends Component {
  state= {
    day: moment(),
    month: moment(),
  };

  getDayTotal(transactions, day){
    const dayBegin = day.clone().startOf('day');
    const dayEnd = day.clone().endOf('day');

    return this.getTotal(transactions.filter(transaction => {
      const transactionMoment = moment(transaction.created);
      return transactionMoment.isAfter(dayBegin) && transactionMoment.isBefore(dayEnd);
    }));
  }

  getMonthTotal(transactions, month){
    const dayBegin = month.clone().startOf('month');
    const dayEnd = month.clone().endOf('month');

    return this.getTotal(transactions.filter(transaction => {
      const transactionMoment = moment(transaction.created);
      return transactionMoment.isAfter(dayBegin) && transactionMoment.isBefore(dayEnd);
    }));
  }

  getTotal(transactions){
    return transactions.reduce((sum, transaction) => {
      const sign = transaction.type === "income" ? 1 : -1;
      return sum + sign * transaction.value;
    }, 0);
  }


  render() {
    const {transactions} = this.props;

    return (
      <OverviewView
        day={this.state.day}
        dayTotal={this.getDayTotal(transactions, this.state.day)}
        month={this.state.month}
        monthTotal={this.getMonthTotal(transactions, this.state.month)}
        total={this.getTotal(transactions)}
      />
    );
  }
}

export default withTransactions(OverviewContainer);