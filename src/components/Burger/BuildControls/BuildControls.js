import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];
const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Total price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((ctrls) => {
        return (
          <BuildControl
            label={ctrls.label}
            key={ctrls.label}
            adding={() => props.addingHandler(ctrls.type)}
            removing={() => props.removingHandler(ctrls.type)}
            disabled={props.disabledInfo[ctrls.type]}
          />
        );
      })}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.purchased}
      >
        Order Now
      </button>
    </div>
  );
};
export default BuildControls;
