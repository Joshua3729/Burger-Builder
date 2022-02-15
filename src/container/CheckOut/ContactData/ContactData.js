import React, { Component } from "react";
import classes from "./ContactData.css";
import Button from "../../../components/UI/Button/Button";
import axios from "../../../axios-orders";
import LoadingSpinner from "../../../components/UI/LoadingSpinner/LoadingSpinner";
import Input from "../../../components/UI/Input/Input";
import { connect } from "react-redux";
class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };
  orderHandler = (event) => {
    event.preventDefault();
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice.toFixed(2),
      customer: {
        name: "Joshua Khumalo",
        address: {
          street: "Teststreet",
          zipCode: "41351",
          country: "South Africa",
        },
        email: "test@test.com",
        deliveryMethod: "general",
      },
    };
    this.setState({ loading: true });
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    let form = (
      <form>
        <Input
          type="text"
          name="name"
          inputType="input"
          placeholder="Your name"
        />
        <Input
          type="email"
          name="email"
          inputType="input"
          placeholder="Your email"
        />
        <Input
          type="text"
          name="street"
          inputType="input"
          placeholder="Street"
        />
        <Input
          type="text"
          name="postal"
          inputType="input"
          placeholder="Postal Code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <LoadingSpinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
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

export default connect(mapStateToProps)(ContactData);
