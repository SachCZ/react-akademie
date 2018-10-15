import Transaction from "./Transaction"
import data from "../data.json"
import React, {Component}from "react";
import styled from "styled-components"
import Spacer from "./Spacer"
import Button from "./Button";
import constants from "../Constants"
import ExpansionPanel from "./ExpansionPanel";
import Select from 'react-select';
import Modal from 'react-modal';
import SlideToggle from "./SlideToggle";
import InputField from "./InputField"


const TransactionsPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;
const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    flex: 17;
    flex-align: stretch;
    min-width: 200px;
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
    display: flex;
    flex-direction: column;
    flex-align: stretch;
 `;
const Summary = styled(ExpansionPanel)`
    height: 130px;
    ${constants.shadow}
    margin-bottom: 20px;
    background-color: white;
`;
const SummaryContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-align: stretch;
`;
const SummaryTotal = styled.section`
    flex: 35;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`;
const selectCustomStyles = {
  container: (base, state) =>({
    ...base,
    border: "0",
    outlineWidth: "0"
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected ? constants.secondaryColor : "white"
  }),
  control: (base, state) => ({
    ...base,
    width: "100px",
    border: "0",
    '& > div:first-child': {
      display: "flex",
      justifyContent: "flex-end"
    },
    borderRadius: "0",
    boxShadow: "none",
    cursor: "pointer"
  }),
  input: (base, state) => ({
    color: "transparent",
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    paddingRight: "0",
    color: "black"
  }),
  indicatorSeparator: (base, state) => ({
    ...base,
    backgroundColor: constants.secondaryColor,
  }),
};

const modalAddTransactionCustomStyles = {
  overlay: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    position: "static",
    flex: "0 1 550px",
    padding: "0",
    borderRadius: "0",
    display: "flex",
    alignItems: "stretch"
  }
};

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1;
`;

const ModalHeader = styled.h2`
  text-align: center;
  margin: 0;
  padding: 10px;
  border-bottom: 1px solid rgb(204, 204, 204);
  color: #666666;
`;

const ModalContent = styled.section`
  display: flex;
  flex-direction: row;
  padding: 30px;
`;

const ModalColumn = styled.div`
  flex: 0.5;
  flex-direction: column;
  display: flex;
  flex: 0.45;
`;

const ModalColumnLeft = styled(ModalColumn)`

`;


const ModalColumnRight = styled(ModalColumn)`
    align-items: flex-end;
`;
const ModalSlideToggle = styled(SlideToggle)`
    margin-top: 10px;
    margin-bottom: 20px;
`;
const ModalNameInput = styled(InputField)`
    margin-bottom: 20px;
`;

const ModalDateInput = styled(InputField)`
    margin-bottom: 96px;
`;
const ModalValueInput = styled(InputField)`
    margin-bottom: 48px;
    text-align: right;
    font-size: 2.5em;
    margin-top: auto;
`;
const SummaryTotalText = styled.span`
    padding: 10px 0 10px 0;
    font-weight: bold;
`;
const SummaryTotalNumber = styled.span`
    color: ${({type}) => type === "expense" ? "red" : "black"};
    font-weight: normal;
`;
const SummaryClear = styled.div`
    flex: 10;
`;
const Transactions = styled.section`
    ${constants.shadow}
`;

const options = [
  { value: 'all', label: 'Vše' },
  { value: 'income', label: 'Příjmy' },
  { value: 'expense', label: 'Výdaje' }
];

class CashFlow extends Component {

  state = {
    transactions: [],
    selectedTypeOption: options[0],
    modalAddTransactionIsOpen: false
  };

  componentDidMount(){
    this.setState({transactions: data});

  }

  openModalAddTransaction = () => (this.setState({modalAddTransactionIsOpen: true}));
  closeModalAddTransaction = () => (this.setState({modalAddTransactionIsOpen: false}));

  updateFilterTypeBy = (selectedOption) => {
    this.setState({selectedTypeOption: selectedOption}, this.filterType);
  };

  filterType= () => {
    this.setState( (prevState, props) => {
      const selectedType = prevState.selectedTypeOption.value;
      if (selectedType === "all") {
        return {
          transactions: data
        }
      } else if (selectedType === "expense" || selectedType === "income") {
        return {
          transactions: data.filter((transaction) => {
            return transaction.type === selectedType;
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
      transactions: [transaction, ...prevState.transactions]
    }), this.closeModalAddTransaction);
  };

  total = () => this.state.transactions.reduce((sum, transaction) => {
    const sign = transaction.type === "income" ? 1 : -1;
    return sum + sign * transaction.value;
  }, 0);

  render(){
    return(
      <TransactionsPageWrapper id="transactions_page">
        <Spacer flex="10"/>
        <Sidebar>
          <ActionsMenu>
            <ActionsMenuRow>
              <ActionsMenuButton large secondary onClick={this.openModalAddTransaction}>Nová transakce</ActionsMenuButton>
              <Modal
                isOpen={this.state.modalAddTransactionIsOpen}
                onRequestClose={this.closeModalAddTransaction}
                style={modalAddTransactionCustomStyles}
                contentLabel="Nová transakce"
              >
                <ModalWrapper>
                  <ModalHeader>Nová transakce</ModalHeader>
                  <ModalContent>
                    <ModalColumnLeft>
                      <ModalSlideToggle>
                        <span>Příjem</span>
                        <span>Výdaj</span>
                      </ModalSlideToggle>
                      <ModalNameInput placeholder="Název"/>
                      <ModalDateInput placeholder="Datum"/>
                    </ModalColumnLeft>
                    <Spacer flex="0.1"/>
                    <ModalColumnRight>
                      <ModalValueInput placeholder="Hodnota"/>
                      <Button large primary onClick={this.addTransaction}>Přidat transakci</Button>
                    </ModalColumnRight>
                  </ModalContent>
                </ModalWrapper>
              </Modal>
            </ActionsMenuRow>
          </ActionsMenu>
        </Sidebar>
        <Spacer flex="1"/>
        <Content>
          <Summary title="Shrnutí a filtry">
            <SummaryContent>
              <Spacer flex="55"/>
              <SummaryTotal>
                <Select
                  styles={selectCustomStyles}
                  value={this.state.selectedTypeOption}
                  onChange={this.updateFilterTypeBy}
                  options={options}
                />
                <SummaryTotalText>Celkem: <SummaryTotalNumber type={this.state.selectedTypeOption.value}>{this.total()} Kč</SummaryTotalNumber></SummaryTotalText>
              </SummaryTotal>
              <SummaryClear/>
            </SummaryContent>
          </Summary>
          <Transactions className="cash_flow">
            <div>{
              this.state.transactions.map((transaction) =>{
                return <Transaction transaction={transaction} />
              })
            }</div>

          </Transactions>
        </Content>
        <Spacer flex="25"/>
      </TransactionsPageWrapper>
    )
  }
}

export default CashFlow;
