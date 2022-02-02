import React from "react";
import loadingSvg from "../../images/Spinner.svg";
import classes from "./Loading.module.css";
function Loading(props) {
  return (
    <div className={classes.loading}>
      <img src={loadingSvg} alt="Loading Svg" />
      <h4>Connect Your Wallet...</h4>
    </div>
  );
}

export default Loading;
