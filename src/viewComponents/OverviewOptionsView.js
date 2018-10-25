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
  padding: 4.5px;
  ${constants.darkerShadow}
`;

const typeButtonStyle = `
  font-weight: bold;
`;

const marginBetween = "3px";
const buttonStyle = `
  flex: 0 0 84px;
  width: 84px;
  height: 35px;
  margin: calc(${marginBetween} / 2);
  padding: 0;
`;

const TypeSelect = styled(InlineSelectView)`
  padding: 5px;
  ${constants.darkerShadow}
`;

const Button = styled(ButtonView)`
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  padding: 5px;
  ${constants.darkerShadow}
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
                  options={typeOptions}
                  buttonStyle={typeButtonStyle}
      />

      <MonthSelect
        selectedOption={monthOption}
        onChange={onMonthChange}
        options={monthOptions}
        buttonStyle={buttonStyle}
      />
      <ButtonContainer>
        <Button
          style={{ opacity: (monthOption.value === "empty") ? 1 : 0.5 }}
          onClick={reset}>Dnešní a celková bilance</Button>
      </ButtonContainer>
    </Layout>
  );
};

export default OverviewOptionsView;
