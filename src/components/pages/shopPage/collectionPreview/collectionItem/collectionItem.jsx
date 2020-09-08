import React from "react";
import classes from "./collectionItem.module.css";
import Button from "../../../../../button";
import * as AC from "../../../../../Redux/cartPreview/cartPreviewAC";
import { connect } from "react-redux";
const CollectionItem = (props) => {
  const addItem = () => {
    props.addItemAC(props.item);
  };
  return (
    <div className={classes.CollectionItem}>
      <div
        className={classes.Image}
        style={{ backgroundImage: `url(${props.item.imageUrl})` }}
      ></div>
      <div className={classes.Description}>
        <div className={classes.Name}>{props.item.name}</div>
        <div className={classes.Price}>{props.item.price}</div>
      </div>
      <div className={classes.WithButton}>
        <Button onClick={addItem} meaning={"Add to cart"} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToPrps = (dispatch) => {
  return {
    addItemAC: (item) => dispatch(AC.addItemAC(item)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrps)(CollectionItem);
