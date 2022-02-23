import React, {useContext} from "react";
import Coin from "./Coin";
import {CoinInvContext} from "./context/coinInv";

function Coins(){
    const {coinInv} = useContext(CoinInvContext);

      if(coinInv.length === 0) return(
      <div>
        <p>You have no currencies listed!</p>
        <img src="https://miro.medium.com/max/1280/1*-Nr0OP_Nu7b2NPrcgJ1SuA.png" alt="null"/>
      </div>);
      else console.log("coinInv: ", coinInv);

    return(
        <div style={{
          // height: "90vh"
        }}>
            <h2 style={{
            borderBottom: "2px solid black",
            marginBottom: "12px",
            marginTop: "12px",
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