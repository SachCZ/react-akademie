import React from "react";
import styled from "styled-components"
import constants from "../Constants"
import { MdClose } from "react-icons/md";

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
  position: relative;
`;

const CloseButton = styled(MdClose)`
  height: 30px;
  font-size: 30px;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  color: ${constants.baseColor}
`;

const SnackbarView = ({ isOpen, onRequestClose, children, className}) => {
  return (
    <Snackbar style={{display: isOpen ? "flex" : "none"}}>
      <Content className={className}>
        {children}
        <CloseButton onClick={onRequestClose}/>
      </Content>
    </Snackbar>
  );
};

export default SnackbarView;
