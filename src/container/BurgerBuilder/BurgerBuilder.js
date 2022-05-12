import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";
import WithErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actionTypes from "../../store/actions/actionTypes";
import { connect } from "react-redux";
import * as BurgerBuilderActions from "../../store/actions/index";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchased: false,
    loading: false,
    error: false,
  };
  componentDidMount() {
    axios
      .get(
        "https://myburgerbuilder-c8641-default-rtdb.firebaseio.com/ingredients.json"
      )
      .then((response) => {
        this.setState({ ingredients: response.data });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }
  updatePurchaceState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((key) => {
        return ingredients[key];
      })
      .reduce((acc, el) => {
        return acc + el;
      }, 0);
    this.setState({
      purchasable: sum > 0,
    });
  }

  addingIngredientHandler = (type) => {
    const newCount = this.state.ingredients[type] + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = newCount;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
    this.updatePurchaceState(updatedIngredients);
  };
  removeIngredientHandler = (type) => {
    if (this.state.ingredients[type] > 0) {
      const newCount = this.state.ingredients[type] - 1;
      const updatedIngredients = {
        ...this.state.ingredients,
      };
      updatedIngredients[type] = newCount;
      const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
      this.setState({
        ingredients: updatedIngredients,
        totalPrice: newPrice,
      });
      this.updatePurchaceState(updatedIngredients);
    }
  };
  purchaseHandler = () => {
    this.setState({
      purchased: true,
    });
  };
  cancelPurchaseHandler = () => {
    this.setState({
      purchased: false,
    });
  };
  continuePurchase = () => {
    this.props.history.push({
      pathname: "/checkout",
    });
  };
  render() {
    const disabledInfo = {
      ...this.props.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;
    let burger = this.state.error ? (
      <p style={{ textAlign: "center" }}>:( couldn't load the ingredients</p>
    ) : (
      <LoadingSpinner />
    );
    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
            addingHandler={this.props.onAddIngredients}
            removingHandler={this.props.onRemoveIngredients}
            disabledInfo={disabledInfo}
            price={this.props.totalPrice}
            purchasable={this.props.purchasable}
            purchased={this.purchaseHandler}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ingredients}
          continuePurchase={this.continuePurchase}
          cancelPurchase={this.cancelPurchaseHandler}
          price={this.props.totalPrice.toFixed(2)}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <LoadingSpinner />;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchased}
          cancelPurchase={this.cancelPurchaseHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
    purchasable: state.purchasable,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddIngredients: (name) =>
      dispatch(BurgerBuilderActions.addingredient(name)),
    onRemoveIngredients: (name) => {
      dispatch(BurgerBuilderActions.removeIngredient(name));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithErrorHandler(BurgerBuilder, axios));
