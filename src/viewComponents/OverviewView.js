import React from "react";
import styled from "styled-components";
import OuterLayout from "../layoutComponents/OuterLayout";
import InnerLayout from "../layoutComponents/InnerLayout";
import constants from "../Constants";

const Layout = styled.div`
  display: flex;
  justify-content center;
  width: 100%;
`;
const Container = styled(OuterLayout)`
  flex: 0 1 86%;
  @media (max-width: 800px){
    flex: 0 0 100%;
  }
  @media (max-width: 679px){
    justify-content: center;
  }
  max-width: 1010px;
  min-height: 100px;
`;

const Card = styled(InnerLayout)`
  flex: 0 0 310px;
  height: 310px;
  ${constants.shadow}
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


const circleSize = "250px";
const Circle = styled.div`
  width: ${circleSize};
  flex: 0 0 ${circleSize};
  background-color: ${constants.secondaryStyling}
  border-radius: calc(${circleSize} / 2);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CircleText = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  color: white;
`;

const DateDisplay = styled(CircleText)`
  font-size: 20px;
`;

const OverviewView = ({ day, dayTotal, month, monthTotal, total }) => {
  return (
    <Layout>
      <Container wrap="wrap" marginBetween={20}>
        <Card>
          <Circle>
            <DateDisplay>{day.format("DD. MM. YYYY")}</DateDisplay>
            <CircleText>{dayTotal} Kč</CircleText>
          </Circle>
        </Card>
        <Card>
          <Circle>
            <DateDisplay>{month.format("MMMM YYYY")}</DateDisplay>
            <CircleText>{monthTotal} Kč</CircleText>
          </Circle>
        </Card>
        <Card>
          <Circle>
            <DateDisplay>Celkem</DateDisplay>
            <CircleText>{total} Kč</CircleText>
          </Circle>
        </Card>
      </Container>
    </Layout>
  );
};

export default OverviewView;
