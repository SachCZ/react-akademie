import React from "react";
import styled from "styled-components";
import InlineSelectView from "./InlineSelectView";
import ButtonView from "./ButtonView";
import LineWrappingLayout from "../layoutComponents/LineWrappingLayout";
import { MdAdd, MdEqualizer } from "react-icons/md";
import { Link } from "react-router-dom";
import constants from "../Constants";

const threshold = "800px";

const TypeSelect = styled(InlineSelectView)`
  flex: 0 0 300px;
  @media (max-width: ${threshold}) {
    flex: 0 0 calc(100% - 45px);
  }
`;

const Options = styled.div`
  display: flex;
  flex: 0 0 343px;
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

const OverviewLink = styled(Link)`
  width: 40px;
  height: 40px;
  margin: 1.5px 1.5px 1.5px 5px;
`;
const OverviewIcon = styled(MdEqualizer)`
  width: 40px;
  height: 40px;
  font-size: 40px;
  ${constants.primaryStyling}
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

      <Options>
        <TypeSelect
          buttonStyle=":first-child {margin-left: 0}"
          selectedOption={typeOption}
          onChange={onTypeChange}
          options={options}
        />
        <OverviewLink to="/Overview"><OverviewIcon/></OverviewLink>
      </Options>


    </LineWrappingLayout>
  );
};

export default SummaryView;
