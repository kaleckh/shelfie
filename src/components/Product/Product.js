import axios from "axios"
import React, { Component } from "react";
class Product extends Component {
  render() {
    return (
      <div>
        <div>{this.props.p.name}</div>
        <div>{this.props.p.price}</div>
        <img src={this.props.p.image} alt=""/>
        <div>{this.props.p.image}</div>
        <button onClick={() => {
          axios.delete(`http://localhost:3001/api/product/${this.props.p.product_id}`)
          .then(response => {
            this.props.deleteProduct(this.props.p.product_id)
          })
        }}>Delete</button>
        <button>Edit</button>
      </div>
    );
  }
}
export default Product;
