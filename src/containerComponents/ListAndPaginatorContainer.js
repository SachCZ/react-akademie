import React, { Component } from "react";
import ListAndPaginatorView from "../viewComponents/ListAndPaginatorView";

class ListAndPaginatorContainer extends Component {
  state={
    pageSize: 10,
    pageNum: 1,
    pagesAround: 1
  };

  render() {
    const {pageSize, pageNum, pagesAround} = this.state;
    return (
      <ListAndPaginatorView pageSize={pageSize} pageNum={pageNum} pagesAround={pagesAround} onPageNumChange={pageNum => this.setState({pageNum: pageNum})} >
        {this.props.children}
      </ListAndPaginatorView>);
  }
}

export default ListAndPaginatorContainer;