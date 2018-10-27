import styled from "styled-components";

const ExpanderView = styled.div`
    display: ${({isOpen}) => isOpen ? "flex" : "none"};
`;


export default ExpanderView;
