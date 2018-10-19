import React, { Component } from "react";
import SummaryView from "../viewComponents/SummaryView";


class SummaryContainer extends Component {
  calculateTotal = (array) =>  array.reduce((sum, transaction) => {
    const sign = transaction.type === "income" ? 1 : -1;
    return sum + sign * transaction.value;
  }, 0);

  state = {
    typeOption: { value: 'all', label: 'Vše' },
    options: [
      { value: 'all', label: 'Vše' },
      { value: 'income', label: 'Příjmy' },
      { value: 'expense', label: 'Výdaje' }
    ],
    total: this.calculateTotal(this.props.arrayToFilter)
  };

  handleTypeChange = (option) => {
    this.setState({typeOption: option}, () => this.props.onFiltersChange(this.applyFilters(this.props.arrayToFilter))); //TODO stop wasting resources
  };

  applyFilters(data){
    const type = this.state.typeOption.value;

    let result = [];

    if (type === "all"){
      result = data;
    }
    else {
      result = data.filter(transaction => transaction.type === type);
    }

    this.setState({total: this.calculateTotal(result)});
    return result;
  }

  render() {
    return (
      <SummaryView onTypeChange={this.handleTypeChange} typeOption={this.state.typeOption} options={this.state.options} total={this.state.total}/>
    );
  }
}

export default SummaryContainer;