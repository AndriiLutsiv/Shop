import React from "react";
import classes from "./checkOutPage.module.css";
import CheckOutItem from "./checkOutItem/checkOutItem";
import * as AC from "../../../Redux/cartPreview/cartPreviewAC";
import * as ACorderForm from "../../../Redux/orderForm/orderFormAC";
import { connect } from "react-redux";
import Button from "../../../button";
import OrderForm from "../../orderForm/orderForm";
import BackDrop from "../../backDrop/BackDrop";

class CheckOutPage extends React.Component {
  componentDidMount() {
    this.props.checkItemThunkCreator();
  }
  render() {
    return (
      <>
        <BackDrop />

        <OrderForm open={this.props.open} />

        <div className={classes.CheckOutPage}>
          <div className={classes.Panel}>
            <div className={classes.Panel1}>Product</div>
            <div className={classes.Panel2}>Description</div>
            <div className={classes.Panel3}>Quantity</div>
            <div className={classes.Panel4}>Price</div>
            <div className={classes.Panel5}>Remove</div>
          </div>
          {this.props.items.map((item) => {
            return (
              <CheckOutItem
                key={item.id}
                image={item.imageUrl}
                quantity={item.quantity}
                increase={() =>
                  this.props.increaseAC(item.id, item.price, item.quantity)
                }
                decrease={() => {
                  this.props.decreaseAC(item.id, item.price, item.quantity);
                  if (item.quantity < 1) {
                    this.props.removeItemThunkCreator(
                      item.id,
                      item.price,
                      item.quantity
                    );
                  }
                }}
                remove={() =>
                  this.props.removeItemThunkCreator(
                    item.id,
                    item.price,
                    item.quantity
                  )
                }
                price={item.price}
              />
            );
          })}
          <div className={classes.Total}>TOTAL: {this.props.totalPrice}$</div>

          <Button
            disabled={this.props.items.length < 1 ? true : false}
            onClick={() => this.props.showOrderFormAC()}
            meaning={"MAKE PURCHASE"}
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.cartPreviewReducer.items,
    totalPrice: state.cartPreviewReducer.totalPrice,
    open: state.orderFormReducer.open,
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
    showOrderFormAC: () => dispatch(ACorderForm.showOrderFormAC()),
    checkItemThunkCreator: () => dispatch(AC.checkItemThunkCreator()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CheckOutPage);
