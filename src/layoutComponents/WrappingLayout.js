import styled from "styled-components";

const WrappingLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  ${({spaceAround}) => {
    return `
      padding: calc(${spaceAround} / 2);
      > * {
        margin:  calc(${spaceAround} / 2);
      }
    `;
  }}
`;

export default WrappingLayout;
