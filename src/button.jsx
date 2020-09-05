import React from "react";
import classes from "./button.module.css";
const Button = (props) => {
  return <button className={classes.Button}>{props.meaning}</button>;
};
export default Button;
