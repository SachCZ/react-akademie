import Transaction from "./Transaction"
import data from "../data.json"
import React from "react";
import "./CashFlow.css"

export default () => {
  const transactions = data.map((transaction) =>{
    return <Transaction transaction={transaction} />
  });

  return <div className="cash_flow">
    <h2>Všechny transakce:</h2>
    <div>{transactions}</div>
  </div>
}
