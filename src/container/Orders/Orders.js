import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";
class Orders extends Component {
  state = {
    orders: [],
    loading: false,
  };
  componentDidMount() {
    this.setState({ loading: true });
    axios.get("/orders.json").then((response) => {
      const fetchedOrders = [];
      for (let key in response.data) {
        fetchedOrders.push({
          ...response.data[key],
          id: key,
        });
      }
      this.setState({ orders: fetchedOrders, loading: false });
    });
  }
  render() {
    let order = <LoadingSpinner />;
    if (!this.state.loading) {
      order = this.state.orders.map((fetchedOrder) => {
        return (
          <Order
            key={fetchedOrder.id}
            price={fetchedOrder.price}
            ingredients={fetchedOrder.ingredients}
            customer={fetchedOrder.customer}
          />
        );
      });
    }
    return <div>{order}</div>;
  }
}
export default withErrorHandler(Orders, axios);
