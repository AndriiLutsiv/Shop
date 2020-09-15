import React from "react";
import { connect } from "react-redux";
import classes from "./BackDrop.module.css";
const BackDrop = (props) => {
  return props.open ? <div className={classes.BackDrop}></div> : null;
};
const mapStateToProps = (state) => {
  return {
    open: state.orderFormReducer.open,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(BackDrop);
