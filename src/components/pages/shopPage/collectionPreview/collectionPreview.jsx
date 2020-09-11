import React from "react";
import CollectionItem from "./collectionItem/collectionItem";
import classes from "./collectionPreview.module.css";
import { withRouter } from "react-router-dom";
const CollectionPreview = (props) => {
  console.log(props);
  const goToSection = () => {
    props.history.push(`/${props.title}`);
  };
  return (
    <div className={classes.CollectionPreview}>
      <h1 onClick={goToSection}>
        <span className={classes.Title}>{props.title.toUpperCase()}</span>
      </h1>
      <div className={classes.Preview}>
        {props.items
          .filter((element, index) => {
            return index < props.itemsArrayLength;
          })
          .map((item) => {
            return <CollectionItem item={item} key={item.id} />;
          })}
      </div>
    </div>
  );
};
export default withRouter(CollectionPreview);
