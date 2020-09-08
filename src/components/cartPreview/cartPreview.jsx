import React from "react";
import Button from "../../button";
import classes from "./cartPreview.module.css";
const CartPreview = (props) => {
  return (
    <div className={classes.CartPreview}>
      <div className={classes.CartItems}>items</div>
      <div className={classes.ButtonArea}>
        <Button meaning={"Go to checkout"} />
      </div>
    </div>
  );
};
export default CartPreview;
