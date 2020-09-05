import React from "react";
import classes from "./Homepage.module.css";
import Menu from "../../menu/menu";
const HomePage = (props) => {
  return (
    <div className={classes.Homepage}>
      <Menu />
    </div>
  );
};
export default HomePage;
