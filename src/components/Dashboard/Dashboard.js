import React, { Component } from "react";
import Product from "../Product/Product"

class Dashboard extends Component {
  render() {
    return <div> Dashboard 
        {this.props.inventoryList.map((product) => {
            return <Product deleteProduct={this.props.deleteProduct} p={product}/>


        })} </div>;
  }
  
}


export default Dashboard
