import styled from "styled-components";

const LineWrappingLayout = styled.div`
  display: flex;
  flex: 1;
  
  ${({direction, spaceAround, spaceTop, spaceBottom, spaceRight, spaceLeft, thresholdScreenSize, spaceBetween}) => {
    spaceAround = spaceAround || 0;
    spaceTop = spaceTop || spaceAround;
    spaceBottom = spaceBottom || spaceAround;
    spaceRight = spaceRight || spaceAround;
    spaceLeft = spaceLeft || spaceAround;
    spaceBetween = spaceBetween || 0;
    thresholdScreenSize = thresholdScreenSize || 0;
    
    const row = `
      padding: ${spaceTop} 0 ${spaceBottom} 0;
      flex-direction: row;
      > * {
        margin: 0 calc(${spaceBetween} / 2) 0 calc(${spaceBetween} / 2);
      }
      
      > *:first-child {
        margin-left: 0;
      }
      > *:last-child {
        margin-right: 0;
      }
      
      &:before {
        content: "";
        flex: 0 10 ${spaceLeft};
        min-width: calc(${spaceLeft} / 3);
      }
      
      &:after {
        content: "";
        flex: 0 10 ${spaceRight};
        min-width: calc(${spaceLeft} / 3);
      }
    `;
    
    const column = `
      padding: ${spaceTop} calc(${spaceRight} / 3) ${spaceBottom} calc(${spaceLeft} / 3);
      flex-wrap: wrap;
      > * {
        width: 100%;
        margin: calc(${spaceBetween} / 2) 0 calc(${spaceBetween} / 2) 0;
      }
      
      > *:first-child {
        margin-top: 0;
      }
      > *:last-child {
        margin-bottom: 0;
      }
       &:before {
        content: "";
        display: none;
      }
      
      &:after {
        display: none;
      }
    `;
    

    return `
      ${row}
      @media (max-width: ${thresholdScreenSize}) {
        ${column}
      }
    `;
  }}
`;

export default LineWrappingLayout;
