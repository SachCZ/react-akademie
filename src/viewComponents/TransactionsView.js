import React, { PureComponent } from "react";
import TransactionView from "./TransactionView";
import styled from "styled-components";
import constants from "../Constants";
import BackgroundImageSrc from "../images/clouds.jpg";
import SummaryView from "./SummaryView";
import LoadableListView from "./LoadableListView";

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  position: relative;
  padding-top: 20px;
  &:before {
    background-color: ${constants.primaryColor};
    opacity: 0.35;
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -2;
  }
  @media (min-width: 800px) {
    &:after {
      content: "";
      background-size: cover;
      background: url(${BackgroundImageSrc}) no-repeat fixed center;
      opacity: 0.4;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: -1;   
     }
   }
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

class TransactionsView extends PureComponent {

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
      onLoadMoreClicked
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
        </Content>
      </Layout>
    );
  };
}

export default TransactionsView;
