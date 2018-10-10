import React from "react"

export default ({name, type, value, created, id}) => (
  <div>
    <div>{name}</div>
    <div>{type}</div>
    <div>{value}</div>
    <div>{created}</div>
    <div>{id}</div>
  </div>
)