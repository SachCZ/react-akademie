import React from "react";
import OuterLayout from "../layoutComponents/OuterLayout";
import InnerLayout from "../layoutComponents/InnerLayout";
import ExpansionPanelView from "./ExpansionPanelView";
import constants from "../Constants";
import Select from 'react-select';
import styled from "styled-components";

const selectCustomStyles = {
  container: (base, state) => ({
    ...base,
    border: "0",
    outlineWidth: "0"
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected ? constants.secondaryColor : "white"
  }),
  control: (base, state) => ({
    ...base,
    width: "100px",
    border: "0",
    "& > div:first-child": {
      display: "flex",
      justifyContent: "flex-end"
    },
    borderRadius: "0",
    boxShadow: "none",
    cursor: "pointer"
  }),
  input: (base, state) => ({
    color: "transparent"
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    paddingRight: "0",
    color: "black"
  }),
  indicatorSeparator: (base, state) => ({
    ...base,
    backgroundColor: constants.secondaryColor
  })
};

const Summary = styled(ExpansionPanelView)`
  ${constants.shadow}
  background-color: white;
`;



const SummaryView = ({ onTypeChange, typeOption, total, options, className }) => {
  return (
    <Summary className={className} title="Shrnutí a filtry">
      <OuterLayout align="stretch">
        <InnerLayout flex="0.5">

        </InnerLayout>
        <InnerLayout flex="0.4" direction="column">
          <OuterLayout direction="column" align="flex-end" justify="center">
            <InnerLayout flex="0 0 40px">
              <Select
                styles={selectCustomStyles}
                value={typeOption}
                onChange={onTypeChange}
                options={options}
                name="type"
              />
            </InnerLayout>
            <InnerLayout flex="0 0 25px">Celkem: {total}</InnerLayout>
          </OuterLayout>
        </InnerLayout>
        <InnerLayout flex="0.1">

        </InnerLayout>
      </OuterLayout>
    </Summary>
  );
};

export default SummaryView;
