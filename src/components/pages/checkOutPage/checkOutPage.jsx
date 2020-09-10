import React from "react";
import classes from "./checkOutPage.module.css";
import CheckOutItem from "./checkOutItem/checkOutItem";
import * as AC from "../../../Redux/cartPreview/cartPreviewAC";
import { connect } from "react-redux";
const CheckOutPage = (props) => {
  return (
    <div className={classes.CheckOutPage}>
      <div className={classes.Panel}>
        <div className={classes.Panel1}>Product</div>
        <div className={classes.Panel2}>Description</div>
        <div className={classes.Panel3}>Quantity</div>
        <div className={classes.Panel4}>Price</div>
        <div className={classes.Panel5}>Remove</div>
      </div>
      {props.items.map((item) => {
        return (
          <CheckOutItem
            key={item.id}
            image={item.imageUrl}
            quantity={item.quantity}
            increase={() =>
              props.increaseAC(item.id, item.price, item.quantity)
            }
            decrease={() =>
              props.decreaseAC(item.id, item.price, item.quantity)
            }
            remove={() =>
              props.removeItemThunkCreator(item.id, item.price, item.quantity)
            }
            price={item.price}
          />
        );
      })}
      <div className={classes.Total}>TOTAL: {props.totalPrice}$</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.cartPreviewReducer.items,
    totalPrice: state.cartPreviewReducer.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseAC: (itemId, itemPrice, quantity) =>
      dispatch(AC.increaseAC(itemId, itemPrice, quantity)),
    decreaseAC: (itemId, itemPrice, quantity) =>
      dispatch(AC.decreaseAC(itemId, itemPrice, quantity)),
    removeItemThunkCreator: (itemId, itemPrice, quantity) =>
      dispatch(AC.removeItemThunkCreator(itemId, itemPrice, quantity)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CheckOutPage);
