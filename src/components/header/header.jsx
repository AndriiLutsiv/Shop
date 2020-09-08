import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./header.module.css";
import ShoppingCart from "./shoppingCart/shoppingCart";

const Header = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.Tabs}>
        <NavLink to={"/shop"}>SHOP</NavLink>

        <NavLink to={"/"}>HOME</NavLink>

        <NavLink to={"/auth"}>SIGN IN</NavLink>
        <ShoppingCart />
      </div>
    </div>
  );
};
export default Header;