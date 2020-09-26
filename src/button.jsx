import React from "react";
import { connect } from "react-redux";
import classes from "./button.module.css";
const Button = (props) => {
  return (
    <button
      disabled={props.disabled}
      className={classes.Button}
      onClick={props.onClick}
    >
      {props.meaning}
    </button>
  );
};
export default Button;
