import React, { Component } from "react";
import "./App.css";
import ClearButton from "./Components/ClearButton";
import { Button } from "./Components/Button";
import { Input } from "./Components/Input";
import * as math from "mathjs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  addToInput = (val) => {
    this.setState({ input: this.state.input + val });
  };

  addZeroToInput = (val) => {
    // if this.state.input is not empty then add zero
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
    }
  };
  addDecimal = (val) => {
    // only add decimal if there is no current decimal
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
    }
  };

  clearInput = (val) => {
    this.setState({ input: " " });
  };
  add = (val) => {
    this.setState({ input: this.state.input + val });
  };

  evaluate = (val) => {
    this.setState({ input: math.evaluate(this.state.input) });
  };

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <Input input={this.state.input}></Input>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.evaluate}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClick={this.clearInput}>AC</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
