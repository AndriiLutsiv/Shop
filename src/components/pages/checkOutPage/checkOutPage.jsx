import React from "react";
import classes from "./checkOutPage.module.css";
import CheckOutItem from "./checkOutItem/checkOutItem";
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
        return <CheckOutItem key={item.id} image={item.imageUrl} />;
      })}
      <div className={classes.Total}>TOTAL: 500$</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(CheckOutPage);
