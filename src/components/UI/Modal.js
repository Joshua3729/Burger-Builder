import React, { Component } from "react";
import classes from "./Modal.css";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import BackDrop from "./Backdrop/Backdrop";
class modal extends Component {
  shouldComponentUpdate(nextProp, nextState) {
    return (
      this.props.show !== nextProp.show ||
      nextProp.children !== this.props.children
    );
  }
  render() {
    return (
      <Aux>
        <BackDrop show={this.props.show} clicked={this.props.cancelPurchase} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default modal;
