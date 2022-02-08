import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CheckOutSummary from "../../components/Order/CheckOutSummary/CheckOutSummary";
import ContactData from "./ContactData/ContactData";
class CheckOut extends Component {
  UNSAFE_componentWillMount() {
    // const query = new URLSearchParams(this.props.location.search);
    // const ingredients = {};
    // let price = 0;
    // for (let param of query.entries()) {
    //   if (param[0] === "price") {
    //     price = param[1];
    //   } else {
    //     ingredients[param[0]] = +param[1];
    //   }
    // }
    // this.setState({ ingredients: ingredients, totalPrice: price });
  }
  checkOutCancelledHandler = () => {
    this.props.history.goBack();
  };
  checkOutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckOutSummary
          ingredients={this.props.ingredients}
          checkOutCancelled={this.checkOutCancelledHandler}
          checkOutContinued={this.checkOutContinuedHandler}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          component={ContactData}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
  };
};

export default connect(mapStateToProps)(CheckOut);
