import React from "react";
import styled from "styled-components";
import InlineSelectView from "./InlineSelectView";
import ButtonView from "./ButtonView";
import LineWrappingLayout from "../layoutComponents/LineWrappingLayout";
import { MdAdd } from "react-icons/md";

const threshold = "800px";

const TypeSelect = styled(InlineSelectView)`
  flex: 0 0 300px;
  margin-left: auto;
  @media (max-width: ${threshold}) {
    flex: 0 0 100%;
  } 
`;

const ButtonAdd = styled(ButtonView)`
  flex: 0 0 175px;
  padding: 5px;
  @media (max-width: ${threshold}) {
    flex: 0 0 100%;
  } 
`;

const AddIcon = styled(MdAdd)`
  vertical-align: middle;
  padding-bottom: 2px;
  font-size: 25px;
`;

const SummaryView = ({ onTypeChange, typeOption, total, options, className, onNewTransactionClick }) => {
  return (

    <LineWrappingLayout className={className} thresholdScreenSize={threshold} spaceLeft="70px" spaceRight="70px"
                        spaceTop="10px"
                        spaceBottom="10px" spaceBetween="10px">

      <ButtonAdd onClick={onNewTransactionClick}><AddIcon/>Nová transakce</ButtonAdd>

      <TypeSelect
        selectedOption={typeOption}
        onChange={onTypeChange}
        options={options}
      />

    </LineWrappingLayout>
  );
};

export default SummaryView;
