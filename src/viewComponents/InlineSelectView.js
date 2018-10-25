import React from "react";
import OuterLayout from "../layoutComponents/OuterLayout";
import InnerLayout from "../layoutComponents/InnerLayout"
import ButtonView from "./ButtonView";
import styled from "styled-components"
import WrappingLayout from "../layoutComponents/WrappingLayout";

const Button = styled(ButtonView)`
  opacity: ${({selected}) => selected ? "1" : "0.7" };
  flex: 1;
  margin: 1.5px; 
  ${({buttonStyle}) => buttonStyle}
  ${({dontDisplay}) => dontDisplay && "display: none;"}
`;

const Layout = styled.div`
  display: flex;
`;

const InlineSelectView = ({selectedOption, onChange, options, className, buttonStyle}) => {
  return (
    <Layout className={className}>
      {options.map(option => (
        <Button key={option.value}
                buttonStyle={buttonStyle}
                selected={selectedOption.value === option.value}
                onClick={(e) => {e.preventDefault(); return onChange(option); }}
                secondary={selectedOption.value !== option.value}
                dontDisplay={option.value === "empty"}
        >
          {option.label}
        </Button>))
      }
    </Layout>
  );
};

export default InlineSelectView;
