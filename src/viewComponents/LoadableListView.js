import React, { Fragment } from "react";
import ButtonView from "./ButtonView";
import styled from "styled-components";
import constants from "../Constants";
import { MdFormatLineSpacing } from "react-icons/md";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 120px;
`;

const Items = styled.div`
  
`;

const LoadButton = styled(ButtonView)`
  margin-top: 40px;
  width: 200px;
  align-self: center;
`;

const EndText = styled.span`
  margin-top: 40px;
  width: 100%;
  text-align: center;
  color: ${constants.darkGrey}
`;


const LoadIcon = styled(MdFormatLineSpacing)`
  vertical-align: middle;
  padding-bottom: 2px;
  font-size: 25px;
  margin-left: 5px;
`;

const LoadableListView = ({ displayNum, onLoadMoreClicked, children, className }) => {
  const items = children.slice(0, displayNum);

  return (
    <Layout className={className}>
      <Items>
        {items.map((item, index) => <Fragment key={index}>{item}</Fragment>)}
      </Items>
      {displayNum < children.length ?
        <LoadButton onClick={onLoadMoreClicked}>Načíst další<LoadIcon/></LoadButton>
        :
        <EndText>Žádné další transakce</EndText>
      }
    </Layout>
  );
};

export default LoadableListView;
