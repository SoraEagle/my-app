import React, {useContext} from "react";
import Coin from "./Coin";
import {CoinInvContext} from "./context/coinInv";

function Coins(){
    const {coinInv} = useContext(CoinInvContext);

      if(coinInv.length === 0) console.log("CoinInv is empty!");
      else console.log("coinInv: ", coinInv);

    return(
        <div>
            <h2 style={{
            borderBottom: "2px solid black",
            marginBottom: "12px",
            marginTop: "12px"
            }}>
              My Coins:
            </h2>
            {coinInv.map((coin) => {
                return <h5 key={coin.id}><Coin coin={coin} /></h5>
            })}
        </div>
        );
}

export default Coins;