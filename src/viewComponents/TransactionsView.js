import React, { PureComponent } from "react";
import ContentLayout from "../layoutComponents/ContentLayout";
import OuterLayout from "../layoutComponents/OuterLayout";
import InnerLayout from "../layoutComponents/InnerLayout";
import TransactionView from "./TransactionView";
import ListAndPaginatorContainer from "../containerComponents/ListAndPaginatorContainer";
import SummaryContainer from "../containerComponents/SummaryContainer";
import ButtonView from "./ButtonView";
import styled from "styled-components";
import constants from "../Constants";

const LeftSidebar = styled(OuterLayout)`
  background-color: white;
  ${constants.shadow}
`;

class TransactionsView extends PureComponent {

  render() {
    const {
      transactions,
      transactionsRaw,
      onNewTransactionClick,
      onFiltersChange,
      onEditTransactionClick,
      onDeleteTransactionClick,
      onFocusTransactionClick
    } = this.props;

    return (
      <OuterLayout direction="column" align="stretch">
        <InnerLayout flex="0 0 30px"/>
        <InnerLayout>
          <ContentLayout
            leftSidebar={
              <LeftSidebar direction="column" align="stretch" marginBetween={10} padding={"20px 20px 20px 20px"}>
                <InnerLayout>
                  <OuterLayout justify="center">
                    <InnerLayout
                      flex="0 0 90%">{<ButtonView secondary onClick={onNewTransactionClick}>Nová transakce</ButtonView>}
                    </InnerLayout>
                  </OuterLayout>
                </InnerLayout>
              </LeftSidebar>
            }
            content={
              <OuterLayout direction="column" align="stretch" marginBetween={20}>
                <InnerLayout flex="0 0 130px" direction="column">
                  <SummaryContainer arrayToFilter={transactionsRaw} onFiltersChange={onFiltersChange}/>
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
            }
            rightSidebar={
              <div></div>
            }
          /></InnerLayout>
      </OuterLayout>
    );
  };
}

export default TransactionsView;
