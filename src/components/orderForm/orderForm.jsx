import React from "react";
import classes from "./orderForm.module.css";
import Button from "../../button";
import * as AC from "../../Redux/orderForm/orderFormAC";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { clearItemsAC } from "../../Redux/cartPreview/cartPreviewAC";
class OrderForm extends React.Component {
  proceedToThankYou = () => {
    this.props.hideOrderFormAC();
    this.props.clearItemsAC();
    sessionStorage.clear();
    this.props.history.replace('/thank');
    
  }
  render() {
    let addClasses = [classes.OrderForm];
    if (this.props.open) {
      addClasses = [classes.OrderForm, classes.OrderFormOpen];
    } else {
      addClasses = [classes.OrderForm, classes.OrderFormClose];
    }

    return (
      <div className={addClasses.join(" ")}>
        <div className={classes.Input}>
          <input type="text" placeholder="Enter Your Name" />
        </div>
        <div className={classes.Input}>
          <input type="text" placeholder="Your Email" />
        </div>
        <div className={classes.Input}>
          <input type="text" placeholder="Your phone number" />
        </div>
        <div className={classes.Button}>
          <Button onClick={this.proceedToThankYou} meaning="confirm order" />
        </div>
        <div
          onClick={() => this.props.hideOrderFormAC()}
          className={classes.Cross}
        >
          &#10006;
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    // open: state.orderFormReducer.open,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideOrderFormAC: () => dispatch(AC.hideOrderFormAC()),
    clearItemsAC: () => dispatch(clearItemsAC()),
  };

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrderForm)) ;
