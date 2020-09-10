import React from "react";
import Button from "../../button";
import classes from "./cartPreview.module.css";
import { connect } from "react-redux";
import CartPreviewItem from "./cartPreviewItem/cartPreviewItem";
import { NavLink } from "react-router-dom";

const CartPreview = (props) => {
  return (
    <div className={classes.CartPreview}>
      <div className={classes.CartItems}>
        {props.items.map((item) => {
          return <CartPreviewItem item={item} />;
        })}
      </div>
      <div className={classes.ButtonArea}>
        <NavLink to={"/checkout"}>
          <Button meaning={"Go to checkout"} />
        </NavLink>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.cartPreviewReducer.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPreview);
