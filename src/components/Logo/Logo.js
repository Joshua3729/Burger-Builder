import React from "react";
import Logo from "../../Assets/images/burger-logo.png";
import classes from "./Logo.css";
const logo = (props) => {
  return (
    <div className={classes.Logo} style={{ height: props.height }}>
      <img src={Logo} alt="burgerApp logo" />
    </div>
  );
};

export default logo;
