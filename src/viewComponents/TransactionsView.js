import React, { PureComponent } from "react";
import OuterLayout from "../layoutComponents/OuterLayout";
import InnerLayout from "../layoutComponents/InnerLayout";
import TransactionView from "./TransactionView";
import styled from "styled-components";
import constants from "../Constants";
import BackgroundImageSrc from "../images/clouds.jpg";
import SummaryView from "./SummaryView";
import LoadableListView from "./LoadableListView";
import LineWrappingLayout from "../layoutComponents/LineWrappingLayout";

const Layout = styled(LineWrappingLayout)`
  position: relative;
  justify-content: center;
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
      background-image: url(${BackgroundImageSrc});
      background-attachment: fixed;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
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
        <InnerLayout flex="1" minWidth={350} maxWidth="800px">
          <OuterLayout direction="column" align="stretch" marginBetween={20}>
            <InnerLayout flex="0 0 auto" direction="column">
              <SummaryView onTypeChange={onFiltersChange}
                           typeOption={typeOption}
                           options={typeOptions}
                           total={total}
                           onNewTransactionClick={onNewTransactionClick}
              />
            </InnerLayout>
            <InnerLayout>
              <LoadableListView onLoadMoreClicked={onLoadMoreClicked} displayNum={displayNum}>
                {transactions.map((transaction) => {
                  return <TransactionView key={transaction.id}
                                          transaction={transaction}
                                          onRequestFocus={onFocusTransactionClick}
                                          onRequestEdit={onEditTransactionClick}
                                          onRequestDelete={onDeleteTransactionClick}
                  />;
                })}
              </LoadableListView>
            </InnerLayout>
          </OuterLayout>
        </InnerLayout>
      </Layout>
    );
  };
}

export default TransactionsView;
