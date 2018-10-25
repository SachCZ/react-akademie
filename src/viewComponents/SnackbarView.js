import React from "react";
import styled from "styled-components"
import constants from "../Constants"

const Snackbar = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  flex: 0 0 ${constants.pageMinWidth};
  height: 90px;
  background-color: ${constants.darkGrey};
  color: ${constants.baseColor};
`;

const SnackbarView = ({ isOpen, onRequestClose, children, className}) => {
  return (
    <Snackbar style={{display: isOpen ? "flex" : "none"}}>
      <Content className={className}>
        {children}
      </Content>
    </Snackbar>
  );
};

export default SnackbarView;
