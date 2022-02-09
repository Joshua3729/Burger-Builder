import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./container/BurgerBuilder/BurgerBuilder";
import CheckOut from "./container/CheckOut/CheckOut";
import { Route } from "react-router-dom";
import Orders from "./container/Orders/Orders";
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path="/checkout" component={CheckOut} />
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/Orders" component={Orders} />
        </Layout>
      </div>
    );
  }
}

export default App;
