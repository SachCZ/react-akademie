import React from "react";
import styled from "styled-components";
import constants from "../Constants"

const ListWrapper = styled.div``;

const PaginatedListView = ({children, pageSize, className, pageNum}) => {
  const getPageItems = () => children.slice(pageSize * (pageNum-1), pageSize * pageNum);

  return (
    <ListWrapper className={className}>
      {getPageItems()}
    </ListWrapper>
  );
};

export default PaginatedListView;
