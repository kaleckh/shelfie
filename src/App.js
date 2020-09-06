import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import "./App.css";
import Form from "./components/Form/Form";
import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: "kfe",
      input2: "",
      input3: "",
    };
  }
  render() {
    return (
      <div>
        <Dashboard />
        <Header />
        <Form />
        <input
          onChange={(event) => {
            this.setState({
              input1: event.target.value,
            });
          }}
          value={this.state.input1}
          className="input1"
          type="text"
        />
        <input
          onChange={(event) => {
            this.setState({
              input2: event.target.value,
            });
          }}
          value={this.state.input2}
          className="input2"
          type="text"
        />
        <input
          onChange={(event) => {
            this.setState({
              input3: event.target.value,
            });
          }}
          value={this.state.input3}
          className="input3"
          type="text"
        />
        <button onClick={() => {
          this.setState({
            input1: "",
            input2: "",
            input3: ""
          })
        }} className>
          {" "}
          Cancel{" "}
        </button>{" "}
        <button> Add to inventory </button>
      </div>
    );
  }
}

export default App;
