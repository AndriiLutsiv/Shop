import supermarket from "../../../assets/supermarket.png";
import React from "react";
import classes from "./shoppingCart.module.css";
import CartPreview from "../../cartPreview/cartPreview";
import { connect } from "react-redux";
import * as AC from "../../../Redux/cartPreview/cartPreviewAC";

const ShoppingCart = (props) => {
  return (
    <div onClick={props.cartPreviewAC} className={classes.ShoppingCart}>
      <div>
        <img src={supermarket} alt="#" />
      </div>
      <div className={classes.Quantity}>0</div>
      {props.displayPreview && (
        <CartPreview cartPreviewAC={props.cartPreviewAC} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    displayPreview: state.cartPreviewReducer.displayPreview,
  };
};

const mapDispatchToPrps = (dispatch) => {
  return {
    cartPreviewAC: () => dispatch(AC.cartPreviewAC()),
  };
};

export default connect(mapStateToProps, mapDispatchToPrps)(ShoppingCart);
