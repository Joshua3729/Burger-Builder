import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggleButton from "../../UI/DrawerToggleButton/DrawerToggleButton";

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggleButton clicked={props.opened} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
