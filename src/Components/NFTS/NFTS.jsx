import React, { useEffect, useState } from "react";
import NftCard from "./NftCard";
import classes from "./NFTS.module.css";
function NFTS(props) {
  const [nfts, setNfts] = useState([]);
  useEffect(() => {
    fetch("https://solana-solvents-default-rtdb.firebaseio.com/data.json")
      .then((res) => res.json())
      .then((data) => {
        const updatedData = [];
        Object.keys(data).forEach((key) => updatedData.push(data[key]));
        setNfts(updatedData);
      });
  }, []);
  console.log(nfts);
  return (
    <div className={classes.nftControl}>
      {nfts.map((info) => {
        console.log(info);
        return <NftCard information={info} key={Math.random()} />;
      })}
    </div>
  );
}

export default NFTS;
