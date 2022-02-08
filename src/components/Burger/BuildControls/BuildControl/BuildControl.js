import React from "react";
import classes from "./BuildControl.css";
const buildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        className={classes.Less}
        onClick={props.removing}
        disabled={props.disabled}
      >
        LESS
      </button>
      <button className={classes.More} onClick={props.adding}>
        MORE
      </button>
    </div>
  );
};

export default buildControl;
