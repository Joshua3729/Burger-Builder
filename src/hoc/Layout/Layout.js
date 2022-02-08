import React, { Component } from "react";
import Aux from "../Auxiliary/Auxiliary";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };
  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false,
    });
  };
  sideDrawerOpenedHandler = () => {
    this.setState({
      showSideDrawer: true,
    });
  };

  render() {
    return (
      <Aux>
        <div>
          <Toolbar opened={this.sideDrawerOpenedHandler} />{" "}
          <SideDrawer
            showDrawer={this.state.showSideDrawer}
            closed={this.sideDrawerClosedHandler}
          />
        </div>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
