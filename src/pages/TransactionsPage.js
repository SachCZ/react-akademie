import React, { Fragment } from "react";
import TransactionsContainer from "../containerComponents/TransactionsContainer";
import ImageBarView from "../viewComponents/ImageBarView";

const TransactionsPage = () => {

  return (
    <Fragment>
      <ImageBarView text="VŠECHNY TRANSAKCE"/>
      <TransactionsContainer/>
    </Fragment>
  );
};

export default TransactionsPage;
