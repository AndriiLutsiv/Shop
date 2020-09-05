import React from "react";
import classes from "./menuItem.module.css";
import { withRouter } from "react-router-dom";
const MenuItem = (props) => {
  console.log("props if Item:", props);
  return (
    <div
      style={{ backgroundImage: `url(${props.image})` }}
      className={classes.Item}
      onClick={() => props.history.push(props.match.url + props.linkUrl)}
    >
      <div className={classes.Content}>
        <h1 className={classes.Title}>{props.title.toUpperCase()}</h1>
        <span className={classes.Subtitle}>SHOP NOW</span>
      </div>
    </div>
  );
};
export default withRouter(MenuItem);
