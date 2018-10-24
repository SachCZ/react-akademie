import React from "react";
import OuterLayout from "../layoutComponents/OuterLayout";
import InnerLayout from "../layoutComponents/InnerLayout";
import ButtonView from "./ButtonView";
import styled from "styled-components";
import constants from "../Constants";
import { MdFormatLineSpacing } from "react-icons/md";

const Layout = styled(OuterLayout)`
  ${constants.shadow}
  background-color: white;
`;

const EndText = styled.span`
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

const LoadableListView = ({displayNum, onLoadMoreClicked, children}) => {
  const items = children.slice(0, displayNum);

  return (
    <Layout direction="column" align="stretch" marginBetween={20} padding="0 0 60px 0">
      <InnerLayout flex="0 0 auto">
        <OuterLayout direction="column" align="stretch">
          {items.map((item, index) => <InnerLayout key={index}>{item}</InnerLayout>)}
        </OuterLayout>
      </InnerLayout>
      {displayNum < children.length ?
        <InnerLayout flex="0 0 auto">
          <OuterLayout justify="center">
            <InnerLayout flex="0 0 300px"><ButtonView secondary onClick={onLoadMoreClicked}>Načíst další <LoadIcon/></ButtonView></InnerLayout>
          </OuterLayout>
        </InnerLayout>
        :
        <InnerLayout fley="0 0 auto">
          <EndText>Žádné další transakce</EndText>
        </InnerLayout>
      }
    </Layout>
  );
};

export default LoadableListView;
