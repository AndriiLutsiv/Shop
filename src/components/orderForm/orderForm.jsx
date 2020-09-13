import React from "react";
import classes from "./orderForm.module.css";
import Button from "../../button";
import * as AC from "../../Redux/orderForm/orderFormAC";
import { connect } from "react-redux";
class OrderForm extends React.Component {
  render() {
    let addClassesBackground = [classes.OrderForm];
    if (this.props.open) {
      addClassesBackground = [classes.Background, classes.BackgroundOpen];
    } else {
      addClassesBackground = [classes.Background, classes.BackgroundClose];
    }

    return (
      <div className={addClassesBackground.join(" ")}>
        <div className={classes.OrderForm}>
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
            <Button meaning="confirm order" />
          </div>
          <div
            onClick={() => this.props.hideOrderFormAC()}
            className={classes.Cross}
          >
            &#10006;
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    open: state.orderFormReducer.open,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideOrderFormAC: () => dispatch(AC.hideOrderFormAC()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
