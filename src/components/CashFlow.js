import Transaction from "./Transaction"
import data from "../data.json"
import React, {Component}from "react";
import styled from "styled-components"
import Spacer from "./Spacer"
import Button from "./Button";
import constants from "../Constants"

const TransactionsPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
`;
const TransactionsWrapper = styled.div`

`;
const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    flex: 17;
    flex-align: stretch;
`;
const ActionsMenu = styled.section`
    flex: 0 1 auto;
    min-height: 400px;
    ${constants.shadow}
`;
const ActionsMenuRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
`;
const ActionsMenuButton = styled(Button)`
    flex: 0 0 80%;
`;
const Content = styled.main`
    flex: 47;
 `;

class CashFlow extends Component {

  state = {
    transactions: [],
    filterTypeBy: ""
  };

  componentDidMount(){
    this.setState({transactions: data});

  }

  updateFilterTypeBy = (evt) => {
    this.setState({
      filterTypeBy: evt.target.value
    }, this.filterType);
  };

  filterType= () => {
    this.setState( (prevState, props) => {
      if (this.state.filterTypeBy === "all") {
        return {
          transactions: data
        }
      } else if (this.state.filterTypeBy === "expense" || this.state.filterTypeBy === "income") {
        return {
          transactions: data.filter((transaction) => {
            return transaction.type === prevState.filterTypeBy;
          })
        }
      }
    });
  };

  addTransaction = () => {
    const transaction = {
      "name": "My trans",
      "type": "income",
      "value": 222,
      "created": 1522370056000,
      "id": 1522370056000
    };

    this.setState((prevState, props) => ({
      transactions: [...prevState.transactions, transaction]
    }));
  };

  render(){
    return(
      <TransactionsPageWrapper id="transactions_page">
        <Spacer flex="10"/>
        <Sidebar>
          <ActionsMenu>
            <ActionsMenuRow>
              <ActionsMenuButton large primary onClick={this.addTransaction}>Přidat transakci</ActionsMenuButton>
            </ActionsMenuRow>
          </ActionsMenu>
        </Sidebar>
        <Spacer flex="1"/>
        <Content>
          <select value={this.state.filterTypeBy} onChange={this.updateFilterTypeBy} name="filterType">
            <option value="income">Příjem</option>
            <option value="expense">Výdaj</option>
            <option value="all">Vše</option>
          </select>
          <TransactionsWrapper className="cash_flow">
            <h2>Všechny transakce:</h2>
            <div>{
              this.state.transactions.map((transaction) =>{
                return <Transaction transaction={transaction} />
              })
            }</div>

          </TransactionsWrapper>
        </Content>
        <Spacer flex="25"/>
      </TransactionsPageWrapper>
    )
  }
}

export default CashFlow;
