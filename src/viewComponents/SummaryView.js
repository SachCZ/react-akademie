import React from "react";
import OuterLayout from "../layoutComponents/OuterLayout";
import InnerLayout from "../layoutComponents/InnerLayout";
import ExpansionPanelView from "./ExpansionPanelView";
import constants from "../Constants";
import styled from "styled-components";
import InlineSelectView from "./InlineSelectView";
import ButtonView from "./ButtonView";

const Summary = styled(OuterLayout)`
  ${constants.shadow}
  background-color: white;
`;

const Total = styled(InnerLayout)`
  font-weight: bold;
`;


const SummaryView = ({ onTypeChange, typeOption, total, options, className, onNewTransactionClick }) => {
  return (
    <Summary className={className} align="stretch">
      <OuterLayout align="stretch" wrap="wrap" marginBetween={20}>
        <InnerLayout flex="1 1 160px">
          <OuterLayout align="stretch" direction="column" justify="flex-end" marginBetween={5}>
            <InnerLayout flex="0 0 40px">
              <ButtonView secondary onClick={onNewTransactionClick}>Nová transakce</ButtonView>
            </InnerLayout>
          </OuterLayout>
        </InnerLayout>
        <InnerLayout flex="12 1 310px" direction="column">
          <OuterLayout direction="column" align="flex-end" justify="flex-end" marginBetween={5}>
            <Total flex="1 1 25px">Celkem: {total} Kč</Total>
            <InnerLayout flex="0 0 40px">
              <InlineSelectView
                selectedOption={typeOption}
                onChange={onTypeChange}
                options={options}
              />
            </InnerLayout>
          </OuterLayout>
        </InnerLayout>
      </OuterLayout>
    </Summary>
  );
};

export default SummaryView;
