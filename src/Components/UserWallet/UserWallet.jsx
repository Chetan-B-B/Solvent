import React, { useContext, useState, Fragment } from "react";
import { WalletContext } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";
import classes from "./UserWallet.module.css";
import NFTS from "../NFTS/NFTS";
import Loading from "../Loading/Loading";
function UserWallet(props) {
  const [balance, setBalance] = useState(0);
  const context = useContext(WalletContext);
  console.log("info");
  console.log(context);
  if (context.publicKey !== null) {
    let connection = new web3.Connection(
      web3.clusterApiUrl("devnet"),
      "confirmed"
    );

    Promise.resolve(connection.getBalance(context.publicKey))
      .then(
        (bal) => {
          context.connected && setBalance(bal);
        } //sol balance
      )
      .catch((err) => console.log(err));
  }
  return (
    <Fragment>
      {context.connected && (
        <div className={classes.userwallet}>
          <h1>Your Public Key: {context.publicKey.toBase58()}</h1>
          <h3>Your SOL Balance : {balance} </h3>
        </div>
      )}
      {!context.connected && <Loading />}
      {context.connected && <NFTS />}
    </Fragment>
  );
}

export default UserWallet;
