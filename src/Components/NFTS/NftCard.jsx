import React from "react";
import classes from "./NftCard.module.css";

function NftCard(props) {
  return (
    <div className={classes.card}>
      <img src={props.information.uri} alt="" />
      <h1>{props.information.name}</h1>
      {/* <h3> By {props.information.user}</h3> */}
    </div>
  );
}

export default NftCard;
