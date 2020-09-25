import axios from "axios";
import React, { Component } from "react";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
  }
  render() {
    return (
      <div>
        {this.state.isEditing ? (
          <input
            defaultValue={this.props.p.name}
            onChange={(event) => {
              this.setState({
                name: event.target.value,
              });
            }}
            type="text"
          />
        ) : (
          <div>{this.props.p.name}</div>
        )}
        {this.state.isEditing ? (
          <input
            defaultValue={this.props.p.price}
            onChange={(event) => {
              this.setState({
                price: event.target.value,
              });
            }}
            type="text"
          />
        ) : (
          <div>{this.props.p.price}</div>
        )}
        {this.state.isEditing ? (
          <input
            defaultValue={this.props.p.image}
            onChange={(event) => {
              this.setState({
                image: event.target.value,
              });
            }}
            type="text"
          />
        ) : (
          <div>{this.props.p.image}</div>
        )}

        <button
          onClick={() => {
            axios
              .delete(
                `http://localhost:3001/api/product/${this.props.p.product_id}`
              )
              .then((response) => {
                this.props.deleteProduct(this.props.p.product_id);
              });
          }}
        >
          Delete
        </button>
        {this.state.isEditing ? (
          <button
            onClick={() => {
              var body = {
                name: this.state.name || this.props.p.name,
                price: this.state.price || this.props.p.price,
                image: this.state.image || this.props.p.image
              };
              console.log(body)
              axios
                .put(
                  `http://localhost:3001/api/product/${this.props.p.product_id}`,
                  body
                )
                .then((res) => {
                  this.setState({
                    isEditing: false
                  })
                  
                  this.props.updateProduct(res.data,this.props.p.product_id)
                });
            }}
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => {
              this.setState({
                isEditing: true,
              });
            }}
          >
            Edit
          </button>
        )}
      </div>
    );
  }
}
export default Product;
