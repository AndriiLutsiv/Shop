import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./header.module.css";
import ShoppingCart from "./shoppingCart/shoppingCart";
import OrderForm from "../orderForm/orderForm";

const Header = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.Tabs}>
        <NavLink activeClassName={classes.active} exact to={"/"}>HOME</NavLink>

        <NavLink activeClassName={classes.active} to={"/shop"}>SHOP</NavLink>

        <NavLink activeClassName={classes.active} to={"/checkout"}>CHECKOUT</NavLink>

        <NavLink activeClassName={classes.active} to={"/auth"}>SIGN IN</NavLink>

        <ShoppingCart />
      </div>
    </div>
  );
};
export default Header;
