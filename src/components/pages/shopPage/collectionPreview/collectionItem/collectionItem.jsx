import React from "react";
import classes from "./collectionItem.module.css";
const CollectionItem = (props) => {
  return (
    <div className={classes.CollectionItem}>
      <div
        className={classes.Image}
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className={classes.Description}>
        <div className={classes.Name}>{props.name}</div>
        <div className={classes.Price}>{props.price}</div>
      </div>
    </div>
  );
};
export default CollectionItem;
