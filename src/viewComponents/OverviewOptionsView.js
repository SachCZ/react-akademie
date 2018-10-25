import React from "react";
import InlineSelectView from "./InlineSelectView";
import styled from "styled-components";
import constants from "../Constants";
import ButtonView from "./ButtonView";

const Layout = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 310px;
`;

const MonthSelect = styled(InlineSelectView)`
  flex-wrap: wrap;
`;

const marginBetween = "3px";
const buttonStyle = `
  flex: 0 0 87px;
  width: 87px;
  margin: calc(${marginBetween} / 2);
`;

const TypeSelect = styled(InlineSelectView)`

`;

const OverviewOptionsView = ({
                               typeOption,
                               onTypeChange,
                               typeOptions,
                               className,
                               monthOption,
                               onMonthChange,
                               monthOptions,
                               reset
                             }) => {
  return (
    <Layout className={className}>
      <TypeSelect selectedOption={typeOption}
                  onChange={onTypeChange}
                  options={typeOptions}/>

      <MonthSelect
        selectedOption={monthOption}
        onChange={onMonthChange}
        options={monthOptions}
        buttonStyle={buttonStyle}
      />
      <ButtonView onClick={reset}>Zrušit volby</ButtonView>
    </Layout>
  );
};

export default OverviewOptionsView;
