import React, { Component } from "react";
import moment from "moment";
import OverviewView from "../viewComponents/OverviewView";
import withTransactions from "../hoc/withTransactions";

const monthOptions = [
  {value: 0, label: "Leden"},
  {value: 1, label: "Únor"},
  {value: 2, label: "Březen"},
  {value: 3, label: "Duben"},
  {value: 4, label: "Květen"},
  {value: 5, label: "Červen"},
  {value: 6, label: "Červenec"},
  {value: 7, label: "Srpen"},
  {value: 8, label: "Září"},
  {value: 9, label: "Říjen"},
  {value: 10, label: "Listopad"},
  {value: 11, label: "Prosince"},
  {value: "empty", label: ""},

];

class OverviewContainer extends Component {
  state= {
    day: moment(),
    month: moment(),
    selectedType: this.props.typeOptions[0],
    selectedMonth: monthOptions[monthOptions.length - 1]
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

  handleTypeChange = (option) => {
    this.setState({ selectedType: {...option}});
  };

  handleMonthChange = (option) => {
    this.setState({ selectedMonth: {...option}, month: option.value !== "empty" ? moment().month(option.value) : moment()});
  };

  resetOptions = () => {
    this.handleMonthChange(monthOptions[monthOptions.length - 1]);
    this.handleTypeChange(this.props.typeOptions[0])
  };

  render() {
    const {transactions, typeOptions} = this.props;
    const {selectedType, selectedMonth} = this.state;

    const filterOut = selectedType.value === "income" ? "expense" : (selectedType.value === "expense" ? "income" : "all");
    const filteredTransactions = transactions.filter(item => item.type !== filterOut);

    return (
      <OverviewView
        day={this.state.day}
        dayTotal={this.getDayTotal(filteredTransactions, this.state.day)}
        month={this.state.month}
        monthTotal={this.getMonthTotal(filteredTransactions, this.state.month)}
        total={this.getTotal(filteredTransactions)}
        typeOptions={typeOptions}
        typeOption={selectedType}
        onTypeChange={this.handleTypeChange}
        monthOptions={monthOptions}
        monthOption={selectedMonth}
        onMonthChange={this.handleMonthChange}
        reset={this.resetOptions}
      />
    );
  }
}

export default withTransactions(OverviewContainer);