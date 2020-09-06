

import React, { Component } from "react";
class Product extends Component {
  render() {
    return (
      <div>
        <div>{this.props.p.name}</div>
        <div>{this.props.p.price}</div>
        <div>{this.props.p.image}</div>
      </div>
    );
  }
}
export default Product;
