import React from "react";
import classes from "./Input.css";

const input = (props) => {
  let inputElement = null;
  switch (props.inputtype) {
    case "input":
      inputElement = <input {...props} className={classes.inputElement} />;
      break;
    case "textarea":
      inputElement = <textarea {...props} className={classes.inputElement} />;
      break;
    default:
      inputElement = <input {...props} className={classes.inputElement} />;
  }
  return (
    <div className={classes.Input}>
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
