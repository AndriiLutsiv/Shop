import React from "react";
import classes from "./cartPreviewItem.module.css";
const CartPreviewItem = (props) => {
  console.log(props);
  return (
    <div className={classes.CartPreviewItem}>
      <div className={classes.Image}>
        <img src={props.item.imageUrl} alt="#" />
      </div>
      <div className={classes.Description}>
        <div className={classes.Name}>{props.item.name}</div>
        <div>{props.item.price}$</div>
      </div>
    </div>
  );
};
export default CartPreviewItem;
