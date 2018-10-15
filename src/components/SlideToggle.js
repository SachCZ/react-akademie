import React, {Component} from "react";
import styled from "styled-components"
import constants from "../Constants"

const Switch = styled.label`
  width: 150px;
  display: flex;
`;

const Checkbox = styled.input`
  display: none;
`;

const SliderContainer = styled.div`
  display: flex;
  flex: 1;
  background-color: #DDDDDD;
  cursor: pointer;
  
  & > * {
    flex: 1 1 0;
    padding: 10px 15px 10px 15px;
    text-align: center;
  }
  & > *:first-child {
    background-color: ${props => props.checked === true ? constants.secondaryColor : "transparent"};
    color: ${props => props.checked === true ? "white" : "#999999"};
    font-weight: ${props => props.checked === true ? "bold" : "normal"};

  }
  & > *:last-child {
    background-color: ${props => props.checked === false ? constants.secondaryColor : "transparent"};
    color: ${props => props.checked === false ? "white" : "#999999"};
    font-weight: ${props => props.checked === false ? "bold" : "normal"};
  }
`;


class SlideToggle extends Component {
  state = {
    checked: true,
  };
  props = {
    onChange: undefined,
    children: [],
    className: ""
  };

  handleChange = (evt) => {
    this.setState({checked: evt.target.checked});
    if(typeof this.props.onChange === "function"){
      this.props.onChange(evt);
    }
  };

  render() {
    return (
      <Switch className={this.props.className}>
        <Checkbox type="checkbox" onChange={this.handleChange}/>
        <SliderContainer checked={this.state.checked}>
          {this.props.children}
        </SliderContainer>
      </Switch>
    );
  }
}

export default SlideToggle;
