import React from "react";
import classes from "./Input.module.css";
const Input = (props) => {
  return (
    <div className={classes.Input}>
      <input
        name={props.name}
        type={props.type}
        onChange={props.changeHandler}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
};
export default Input;
