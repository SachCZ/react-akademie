import Transaction from "./Transaction"
import data from "../data.json"
import React from "react";

export default () => {
  return data.map((transaction) =>{
    return <Transaction name={transaction.name}
                        type={transaction.type}
                        value={transaction.value}
                        created={transaction.created}
                        id={transaction.id} />
  });
}
