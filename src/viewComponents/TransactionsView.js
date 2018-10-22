import React, { PureComponent } from "react";
import OuterLayout from "../layoutComponents/OuterLayout";
import InnerLayout from "../layoutComponents/InnerLayout";
import TransactionView from "./TransactionView";
import ListAndPaginatorContainer from "../containerComponents/ListAndPaginatorContainer";
import styled from "styled-components";
import constants from "../Constants";
import BackgroundImageSrc from "../images/clouds.jpg";
import SummaryView from "./SummaryView";

const Layout = styled(OuterLayout)`
  position: relative;
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
  &:after {
    content: "";
    background-image: url(${BackgroundImageSrc});
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;   
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
      typeOptions
    } = this.props;

    return (
      <Layout direction="column" align="stretch">
        <InnerLayout>
          <OuterLayout justify="center" padding="20px 0 20px 0">
            <InnerLayout flex="0.2 1 20%"></InnerLayout>
            <InnerLayout flex="0.6 0 60%" minWidth={350} maxWidth="800px">
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
                  <ListAndPaginatorContainer>
                    {transactions.map((transaction) => {
                      return <TransactionView key={transaction.id}
                                              transaction={transaction}
                                              onRequestFocus={onFocusTransactionClick}
                                              onRequestEdit={onEditTransactionClick}
                                              onRequestDelete={onDeleteTransactionClick}
                      />;
                    })}
                  </ListAndPaginatorContainer>
                </InnerLayout>
              </OuterLayout>
            </InnerLayout>
            <InnerLayout flex="0.2 1 20%"></InnerLayout>
          </OuterLayout>
        </InnerLayout>
      </Layout>
    );
  };
}

export default TransactionsView;
