import * as actionTypes from "./actionsTypes";

export const addingredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    value: name,
  };
};
