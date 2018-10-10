import React from "react"
import "./Transaction.css"

export default ({transaction: {name, type, value, created, id}}) => (
  <div>
    <div className="transaction_name">{name}</div>
    <div>{type}</div>
    <div>{value}</div>
    <div>{created}</div>
    <div>{id}</div>
  </div>
)