import * as actionTypes from "./actionsTypes";

export const addingredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    value: name,
  };
};

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    value: name,
  };
};
