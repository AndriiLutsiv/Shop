import React from "react";
import classes from "./checkOutItem.module.css";
const CheckOutItem = (props) => {
  return (
    <div className={classes.Item}>
      <div className={classes.Item1}>
        <img src={props.image} alt="#" />
      </div>
      <div className={classes.Item2}>brown hat</div>
      <div className={[classes.Arrows, classes.Item3].join(" ")}>
        <div className={classes.ArrowApperience}>&#8249;</div>
        <div>4</div>
        <div className={classes.ArrowApperience}>&#8250;</div>
      </div>
      <div className={classes.Item4}>18$</div>
      <div className={classes.Item5}>X</div>
    </div>
  );
};

export default CheckOutItem;
