import classes from "./Burger.css";
import React from "react";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((ingsKey) => {
      return [...Array(props.ingredients[ingsKey])].map((_, i) => {
        return <BurgerIngredients key={ingsKey + i} type={ingsKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    });
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
