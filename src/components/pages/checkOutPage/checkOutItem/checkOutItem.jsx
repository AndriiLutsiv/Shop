import React from "react";
import classes from "./checkOutItem.module.css";
const CheckOutItem = (props) => {
  console.log(props);
  return (
    <div className={classes.Item}>
      <div className={classes.Item1}>
        <img src={props.image} alt="#" />
      </div>
      <div className={classes.Item2}>brown hat</div>
      <div className={[classes.Arrows, classes.Item3].join(" ")}>
        <div
          style={{ display: props.quantity === 1 && "none" }}
          onClick={props.decrease}
          className={classes.ArrowApperience}
        >
          &#8249;
        </div>
        <div>{props.quantity}</div>
        <div onClick={props.increase} className={classes.ArrowApperience}>
          &#8250;
        </div>
      </div>
      <div className={classes.Item4}>{props.price * props.quantity}$</div>
      <div onClick={props.remove} className={classes.Item5}>
        X
      </div>
    </div>
  );
};

export default CheckOutItem;
