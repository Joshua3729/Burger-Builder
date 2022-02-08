import React from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import classes from "./Order.css";
import Burger from "../Burger/Burger";
import Button from "../UI/Button/Button";
const order = (props) => {
  return (
    <div className={classes.Order}>
      <Aux>
        <p>Name: {props.customer.name}</p>
        <p>Delivery Method: {props.customer.deliveryMethod}</p>
        <p>
          Price: <strong>{props.price}</strong>
        </p>
      </Aux>
      <div className={classes.Wrapper}>
        <h4 style={{ color: "white", textAlign: "center" }}>
          Preview of the burger
        </h4>
        <Burger ingredients={props.ingredients} />
      </div>
    </div>
  );
};

export default order;
