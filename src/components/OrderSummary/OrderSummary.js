import React, { Component } from "react";
import { Link } from "react-router-dom";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Button from "../UI/Button/Button";

class OrderSummary extends Component {
  render() {
    const summary = Object.keys(this.props.ingredients).map((igKey) => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    return (
      <Aux>
        <h1>Your Order</h1>
        <p>A delicious burger with the following ingredients: </p>
        <ul>{summary}</ul>
        <p>
          <strong>Total Price: {this.props.price}</strong>
        </p>
        <p>Continue to checkout?</p>
        <Button btnType={"Danger"} clicked={this.props.cancelPurchase}>
          CANCEL
        </Button>
        <Button btnType={"Success"} clicked={this.props.continuePurchase}>
          {/* <Link to="/checkout"> CONTINUE</Link> */}
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
