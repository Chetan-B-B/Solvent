import React, { useContext, useState, Fragment } from "react";
import { WalletContext } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";
import classes from "./UserWallet.module.css";
import NFTS from "../NFTS/NFTS";
import Loading from "../Loading/Loading";
import { Buffer } from "buffer";

const API_KEY_ID = "Your Api key";
const API_SECRET_KEY = "Your screat key";
const HEADERS = {
  APIKeyID: API_KEY_ID,
  APISecretKey: API_SECRET_KEY,
};

function UserWallet(props) {
  const [balance, setBalance] = useState(0);
  const [nfts, setNFTS] = useState([]);
  const context = useContext(WalletContext);
  console.log("info");
  console.log(context);
  const pk = context.publicKey;

  if (context.publicKey !== null) {
    let connection = new web3.Connection(
      web3.clusterApiUrl("devnet"),
      "confirmed"
    );
    //fetching user NFTS using blockchainapi
    fetch(`https://api.blockchainapi.com/v1/solana/wallet/devnet/${pk}/nfts`, {
      headers: HEADERS,
    })
      .then((acc) => {
        return acc.json();
      })
      .then((data) => {
        setNFTS(data.nfts_metadata);
      })
      .catch((err) => console.log(err));

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
      {context.connected && <NFTS nfts={nfts} />}
    </Fragment>
  );
}

export default UserWallet;
