import React from "react";
import classes from "./collectionItem.module.css";
import Button from "../../../../../button";
import * as AC from "../../../../../Redux/cartPreview/cartPreviewAC";
import { connect } from "react-redux";
import ButtonAdded from "../../../../../buttonAdded";

class CollectionItem extends React.Component {
 componentDidMount () {
   this.forceUpdate();
 }
  addItem = () => {
    this.props.addItemThunkCreator(
      this.props.item,
      this.props.item.price,
      this.props.item.id
    );
  };

  render() {
    console.log('hello');
    return (
      <div className={classes.CollectionItem}>
        <div
          className={classes.Image}
          style={{ backgroundImage: `url(${this.props.item.imageUrl})` }}
        ></div>
        <div className={classes.Description}>
          <div className={classes.Name}>{this.props.item.name}</div>
          <div className={classes.Price}>{this.props.item.price}$</div>
        </div>
        {/* <div className={classes.WithButton}> */}
          {sessionStorage.getItem(this.props.item.id) ? (
            <ButtonAdded />
          ) : (
            <Button onClick={this.addItem} meaning={"Add to cart"} />
          )}
        {/* </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.cartPreviewReducer.items,
    buttonState: state.cartPreviewReducer.buttonState,
    departmentsData: state.departmentsDataReducer.sections
  };
};
const mapDispatchToPrps = (dispatch) => {
  return {
    addItemThunkCreator: (item, itemPrice, itemId) =>
      dispatch(AC.addItemThunkCreator(item, itemPrice, itemId)),
  };
};
export default connect(mapStateToProps, mapDispatchToPrps)(CollectionItem);
