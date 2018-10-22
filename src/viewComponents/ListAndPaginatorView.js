import React from "react";
import InnerLayout from "../layoutComponents/InnerLayout";
import PaginatedListView from "./PaginatedListView";
import OuterLayout from "../layoutComponents/OuterLayout";
import PaginatorView from "./PaginatorView";
import constants from "../Constants";
import styled from "styled-components";

const Layout = styled(OuterLayout)`
  ${constants.shadow}
  ${constants.semiTransparent}
`;

const ListAndPaginatorView = ({ pageSize, pageNum, onPageNumChange, pagesAround, children }) => {
  return (
    <Layout direction="column" align="stretch" marginBetween={20} padding="0 0 20px 0">
      <InnerLayout direction="column" flex="0 0 auto">
        <PaginatedListView
          pageSize={pageSize}
          pageNum={pageNum}
        >
          {children}
        </PaginatedListView>
      </InnerLayout>
      <InnerLayout direction="column" flex="0 0 auto">
        <PaginatorView
          numOfPages={Math.ceil(children.length / pageSize)}
          pageNum={pageNum}
          onPageNumChange={onPageNumChange}
          pagesAround={pagesAround}
        />
      </InnerLayout>
    </Layout>
  );
};

export default ListAndPaginatorView;
