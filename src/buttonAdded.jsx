import React from "react";
import classes from "./buttonAdded.module.css";
const ButtonAdded = (props) => {
  return (
    <button disabled className={classes.ButtonAdded}>
      Item added &#x2713;
    </button>
  );
};
export default ButtonAdded;
