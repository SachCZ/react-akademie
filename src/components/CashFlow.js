import Transaction from "./Transaction"
import data from "../data.json"
import React, {Component}from "react";
import styled from "styled-components"

const TransactionsPageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TransactionsWrapper = styled.div`
    max-width: 500px;
`;

class CashFlow extends Component {

  state = {
    transactions: [],
    filterTypeBy: ""
  };

  componentDidMount(){
    this.setState({transactions: data});

  }

  updateFilterTypeBy = (evt) => {
    this.setState({
      filterTypeBy: evt.target.value
    }, this.filterType);
  };

  filterType= () => {
    this.setState( (prevState, props) => {
      if (this.state.filterTypeBy === "all") {
        return {
          transactions: data
        }
      } else if (this.state.filterTypeBy === "expense" || this.state.filterTypeBy === "income") {
        return {
          transactions: data.filter((transaction) => {
            return transaction.type === prevState.filterTypeBy;
          })
        }
      }
    });
  };

  addTransaction = () => {
    const transaction = {
      "name": "My trans",
      "type": "income",
      "value": 222,
      "created": 1522370056000,
      "id": 1522370056000
    };

    this.setState((prevState, props) => ({
      transactions: [...prevState.transactions, transaction]
    }));
  };

  render(){
    return(
      <TransactionsPageWrapper id="transactions">
        <button onClick={this.addTransaction}>Přidat transakci</button>
        <select value={this.state.filterTypeBy} onChange={this.updateFilterTypeBy} name="filterType">
          <option value="income">Příjem</option>
          <option value="expense">Výdaj</option>
          <option value="all">Vše</option>
        </select>
        <TransactionsWrapper className="cash_flow">
          <h2>Všechny transakce:</h2>
          <div>{
            this.state.transactions.map((transaction) =>{
              return <Transaction transaction={transaction} />
            })
          }</div>

        </TransactionsWrapper>
      </TransactionsPageWrapper>
    )
  }
}

export default CashFlow;
