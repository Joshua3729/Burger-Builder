import React from "react";
import classes from "./DrawerToggleButton.css";

const drawerToggleButton = (props) => {
  return (
    <div onClick={props.clicked} className={classes.DrawerToggle}>
      <div className={classes.Bar}></div>
      <div className={classes.Bar}></div>
      <div className={classes.Bar}></div>
    </div>
  );
};

export default drawerToggleButton;
