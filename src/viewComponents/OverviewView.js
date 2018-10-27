import React from "react";
import styled from "styled-components";
import constants from "../Constants";
import OverviewOptionsView from "./OverviewOptionsView";
import WrappingLayout from "../layoutComponents/WrappingLayout";

const Layout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const Container = styled(WrappingLayout)`
  flex: 0 1 86%;
  @media (max-width: 800px){
    flex: 0 0 100%;
  }
  @media (max-width: 679px){
    justify-content: center;
  }
  max-width: 1010px;
  min-height: 100px;
  padding-bottom: 100px;
`;

const Card = styled.div`
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
  color: ${constants.baseColor}
`;

const CircleText = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
`;

const DateDisplay = styled(CircleText)`
  font-size: 20px;
`;

const Options = styled(OverviewOptionsView)`
  width: 310px;
  background-color: ${constants.baseColor}

`;

const OverviewView = ({ day, dayTotal, month, monthTotal, total, typeOption, onTypeChange, typeOptions, monthOption, onMonthChange, monthOptions, reset }) => {
  return (
    <Layout>
      <Container spaceAround="20px">
        <Options typeOption={typeOption}
                 onTypeChange={onTypeChange}
                 typeOptions={typeOptions}
                 monthOption={monthOption} onMonthChange={onMonthChange} monthOptions={monthOptions}
                 reset={reset}

        />
        {monthOption.value === "empty" &&
        <Card>
          <Circle type={typeOption.value}>
            {
              typeOption.value === "all" &&
              <DateDisplay>Celková bilance</DateDisplay>
            }
            {
              typeOption.value === "income" &&
              <DateDisplay>Celkové příjmy</DateDisplay>
            }
            {
              typeOption.value === "expense" &&
              <DateDisplay>Celkové výdaje</DateDisplay>
            }
            <CircleText>{total > 0 && "+"}{total} Kč</CircleText>
          </Circle>
        </Card>
        }
        {monthOption.value !== "empty" &&
        <Card>
          <Circle type={typeOption.value}>
            {
              typeOption.value === "all" &&
              <DateDisplay>Celková bilance</DateDisplay>
            }
            {
              typeOption.value === "income" &&
              <DateDisplay>Příjmy za</DateDisplay>
            }
            {
              typeOption.value === "expense" &&
              <DateDisplay>Výdaje za</DateDisplay>
            }
            <DateDisplay>{month.format("MMMM YYYY")}</DateDisplay>
            <CircleText>{monthTotal > 0 && "+"}{monthTotal} Kč</CircleText>
          </Circle>
        </Card>
        }
        {monthOption.value === "empty" &&
        <Card>
          <Circle type={typeOption.value}>
            {
              typeOption.value === "all" &&
              <DateDisplay>Celková bilance dnes</DateDisplay>
            }
            {
              typeOption.value === "income" &&
              <DateDisplay>Příjmy dnes</DateDisplay>
            }
            {
              typeOption.value === "expense" &&
              <DateDisplay>Výdaje dnes</DateDisplay>
            }
            <DateDisplay>{day.format("DD. MM. YYYY")}</DateDisplay>
            <CircleText>{dayTotal > 0 && "+"}{dayTotal} Kč</CircleText>
          </Circle>
        </Card>
        }
      </Container>
    </Layout>
  );
};

export default OverviewView;
