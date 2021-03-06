import * as actionTypes from "../actions/actionTypes";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};
const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
  totalPrice: 4,
  purchasable: false,
};

const purchasableHandler = (ingredients) => {
  return Object.keys(ingredients)
    .map((key) => {
      return ingredients[key];
    })
    .reduce((acc, el) => {
      return acc + el;
    }, 0);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      const newCount = state.ingredients[action.value] + 1;
      const updatedIngredients = {
        ...state.ingredients,
      };
      updatedIngredients[action.value] = newCount;
      const newPrice = state.totalPrice + INGREDIENT_PRICES[action.value];
      let sum = purchasableHandler(updatedIngredients);
      return {
        ...state,
        ingredients: updatedIngredients,
        totalPrice: newPrice,
        purchasable: sum > 0,
      };

    case actionTypes.REMOVE_INGREDIENT:
      if (state.ingredients[action.value] > 0) {
        const newCount = state.ingredients[action.value] - 1;
        const updatedIngredients = {
          ...state.ingredients,
        };
        updatedIngredients[action.value] = newCount;
        const newPrice = state.totalPrice - INGREDIENT_PRICES[action.value];
        let sum = purchasableHandler(updatedIngredients);

        return {
          ingredients: updatedIngredients,
          totalPrice: newPrice,
          purchasable: sum > 0,
        };
      }

    default:
      return state;
  }
};

export default reducer;
