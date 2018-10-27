import React from "react";
import ButtonView from "./ButtonView";
import styled from "styled-components";

const Button = styled(ButtonView)`
  opacity: ${({ selected }) => selected ? "1" : "0.5" };
  flex: 1;
  margin: 1.5px; 
  ${({ buttonStyle }) => buttonStyle}
  ${({ dontDisplay }) => dontDisplay && "display: none;"}
`;

const Layout = styled.div`
  display: flex;
`;

const InlineSelectView = ({ selectedOption, onChange, options, className, buttonStyle }) => {
  return (
    <Layout className={className}>
      {options.map(option => (
        <Button key={option.value}
                buttonStyle={buttonStyle}
                selected={selectedOption.value === option.value}
                onClick={(e) => {
                  e.preventDefault();
                  return onChange(option);
                }}
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
