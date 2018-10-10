import React from "react";
import styled from "styled-components";

const DataDisplay = styled.div`
    color: #434343;
`;

const Label = styled.div`
    font-weight: bold;
    color: #222222;
`;

const TransactionWrapper = styled.div`
    display: flex;
    min-width: 500px;
    -webkit-box-shadow: 10px 10px 29px 3px rgba(0,0,0,0.16);
    -moz-box-shadow: 10px 10px 29px 3px rgba(0,0,0,0.16);
    box-shadow: 10px 10px 29px 3px rgba(0,0,0,0.16);
    margin-bottom: 5px;
    background-color: white;
`;

const Property = styled.div`
    flex: 1;
    flex-base: 500px;
    padding: 5px;
`;

export default ({ transaction: { name, type, value, created, id } }) => (
    <TransactionWrapper key={id}>
      <Property>
        <Label>Název: </Label><DataDisplay className="transaction_name">{name}</DataDisplay>
      </Property>
      <Property>
        <Label>Typ: </Label><DataDisplay>{type}</DataDisplay>
      </Property>
      <Property>
        <Label>Hodnota: </Label><DataDisplay>{value}</DataDisplay>
      </Property>
    </TransactionWrapper>
)