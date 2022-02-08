import React, { useEffect, useState } from "react";
import NftCard from "./NftCard";
import classes from "./NFTS.module.css";
function NFTS(props) {
  return (
    <div className={classes.nftControl}>
      {props.nfts.length === 0 && (
        <h2 className={classes.warning}>You don't own any NFTS</h2>
      )}

      {props.nfts.length !== 0 &&
        props.nfts.map((info) => {
          return <NftCard information={info.data} key={Math.random()} />;
        })}
    </div>
  );
}

export default NFTS;
