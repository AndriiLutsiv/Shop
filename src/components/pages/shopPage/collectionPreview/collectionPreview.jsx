import React from "react";
import CollectionItem from "./collectionItem/collectionItem";
import classes from "./collectionPreview.module.css";
const CollectionPreview = (props) => {
  return (
    <div className={classes.CollectionPreview}>
      <h1>{props.title.toUpperCase()}</h1>
      <div className={classes.Preview}>
        {props.items
          .filter((element, index) => {
            return index < 5;
          })
          .map((item) => {
            return (
              <CollectionItem
                key={item.id}
                image={item.imageUrl}
                name={item.name}
                price={item.price}
              />
            );
          })}
      </div>
    </div>
  );
};
export default CollectionPreview;
