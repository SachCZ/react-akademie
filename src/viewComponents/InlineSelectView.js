import React from "react";
import OuterLayout from "../layoutComponents/OuterLayout";
import InnerLayout from "../layoutComponents/InnerLayout"
import ButtonView from "./ButtonView";
import styled from "styled-components"

const Button = styled(ButtonView)`
  opacity: ${({selected}) => selected ? "1" : "0.7" };
`;

const InlineSelectView = ({selectedOption, onChange, options}) => {
  return (
    <OuterLayout marginBetween={3}>
      {options.map(option => <InnerLayout key={option.value} minWidth={100}>
        <Button selected={selectedOption.value === option.value} onClick={(e) => {e.preventDefault(); return onChange(option); }} secondary={selectedOption.value !== option.value}>
          {option.label}
        </Button></InnerLayout>)}
    </OuterLayout>
  );
};

export default InlineSelectView;
