import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import "./App.css";
import Form from "./components/Form/Form";
import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: "",
      input2: "",
      input3: "",
      products: [],
    };
  }
  componentDidMount() {
    axios("http://localhost:3001/api/inventory").then(res => {
      this.setState({
        products: res.data
      })
    })
  }
  render() {
    return (
      <div>
        <Dashboard deleteProduct={ (productId) => {
          this.setState({
            products: this.state.products.filter(product => productId !== product.product_id)
          })
        }} inventoryList={this.state.products} />
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
        <button
          onClick={() => {
            this.setState({
              input1: "",
              input2: "",
              input3: "",
            });
          }}
          className
        >
          {" "}
          Cancel{" "}
        </button>{" "}
        <button onClick={() => {
          var product = {
            name: this.state.input1,
            price: this.state.input2,
            image: this.state.input3
          }
          axios.post("http://localhost:3001/api/product", product)
          .then((response) => {
            var products = this.state.products
            products.push(response.data)
            this.setState({
              products: products,
              input1: "",
              input2: "",
              input3: ""
            })
          })
        }}>Add to inventory</button>
      </div>
    );
  }
}

export default App;
