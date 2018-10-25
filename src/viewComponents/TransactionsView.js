import React, { Component } from "react";
import TransactionView from "./TransactionView";
import styled from "styled-components";
import constants from "../Constants";
import BackgroundImageSrc from "../images/clouds.jpg";
import SummaryView from "./SummaryView";
import LoadableListView from "./LoadableListView";
import SnackbarView from "./SnackbarView";
import ButtonView from "./ButtonView";

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  position: relative;
  padding-top: 20px;
`;

const Content = styled.div`
  flex: 1;
  min-width: ${constants.pageMinWidth};
  max-width: 800px;
  
  display: flex;
  flex-direction: column;
`;

const Summary = styled(SummaryView)`
  flex: 0 0 auto;
  background-color: ${constants.baseColor};
  ${constants.darkerShadow}
  margin-bottom: 20px;
`;

const Transactions = styled(LoadableListView)`
  flex: 0 0 auto;
  background-color: ${constants.baseColor};
  ${constants.darkerShadow}
`;

const Snackbar = styled(SnackbarView)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  flex: 1 1 0;
  max-width: 500px;
  min-width: ${constants.pageMinWidth};
  flex-wrap: wrap;
  opacity: 0.85;
`;

const RedoLine = styled.span`
  font-style: italic;
  min-width: 250px;
  margin-right: auto;
`;

const RedoTransaction = styled.span`
  
`;

const RedoButton = styled(ButtonView)`
  padding: 3px;
  width: 150px;
`;

class TransactionsView extends Component {

  render() {
    const {
      transactions,
      onNewTransactionClick,
      onFiltersChange,
      onEditTransactionClick,
      onDeleteTransactionClick,
      onFocusTransactionClick,
      typeOption,
      total,
      typeOptions,
      displayNum,
      onLoadMoreClicked,
      redoSnackbarIsOpen,
      deletedTransaction,
      redoDeleteTransaction
    } = this.props;

    return (
      <Layout>
        <Content>
          <Summary onTypeChange={onFiltersChange}
                   typeOption={typeOption}
                   options={typeOptions}
                   total={total}
                   onNewTransactionClick={onNewTransactionClick}
          />
          <Transactions onLoadMoreClicked={onLoadMoreClicked} displayNum={displayNum}>
            {transactions.map((transaction) => {
              return <TransactionView key={transaction.id}
                                      transaction={transaction}
                                      onRequestFocus={onFocusTransactionClick}
                                      onRequestEdit={onEditTransactionClick}
                                      onRequestDelete={onDeleteTransactionClick}
              />;
            })}
          </Transactions>
          <Snackbar isOpen={redoSnackbarIsOpen}>
            {deletedTransaction && deletedTransaction.name &&
            [
              <RedoLine key="line">Smazáno: <RedoTransaction>
                {deletedTransaction.name.charAt(0).toUpperCase() + deletedTransaction.name.slice(1).toLowerCase()}:
                {deletedTransaction.type === "income" ? " +" : " -"}{deletedTransaction.value} Kč</RedoTransaction></RedoLine>,
              <RedoButton key="button" onClick={redoDeleteTransaction}>Vrátit zpět?</RedoButton>
            ]
            }
          </Snackbar>
        </Content>
      </Layout>
    );
  };
}

export default TransactionsView;
