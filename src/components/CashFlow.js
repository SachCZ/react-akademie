import Transaction from "./Transaction"
import data from "../data.json"
import React from "react";
import "./CashFlow.css"
import Component from 'react'

class CashFlow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      transactions: data.map((transaction) =>{
        return <Transaction transaction={transaction} />
      })
    };
  }

  addTransaction = () => {
    const transaction = {
      "name": "My trans",
      "type": "income",
      "value": 222,
      "created": 1522370056000,
      "id": 1522370056000
    };

    this.setState((prevState, props) => ({
      transactions: [prevState.transactions, <Transaction transaction={transaction} />]
    }));
  }

  render(){
    return(
      <div id="transactions">
        <button onClick={this.addTransaction}>Přidat transakci</button>
        <div className="cash_flow">
          <h2>Všechny transakce:</h2>
          <div>{this.state.transactions}</div>

        </div>
      </div>
    )
  }
}

export default CashFlow;
