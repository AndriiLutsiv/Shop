import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./header.module.css";
const Header = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.Tabs}>
        {/* <div> */}
        <NavLink to={"/shop"}>SHOP</NavLink>
        {/* </div>
        <div> */}
        <NavLink to={"/"}>HOME</NavLink>
        {/* </div>
        <div> */}
        <NavLink to={"/auth"}>SIGN IN</NavLink>
        {/* </div> */}
      </div>
    </div>
  );
};
export default Header;
