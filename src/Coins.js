import React, {useContext, useEffect} from "react";
import Coin from "./Coin";
import {CoinInvContext} from "./context/coinInv";

// Need to implement:
// Map the coin Objects

// GET fetch request to retrieve the coin Objects from db.json
// fetch("")
// .then((r) => r.json())

function Coins(){
    const {coinInv, setCoinInv} = useContext(CoinInvContext);
    console.log("coinInv: ", coinInv.data);

    useEffect(() => { // Used for GET fetch request from db.json
        fetch("http://localhost:3001/coins")
        .then((r) => r.json())
        .then((data) => setCoinInv(data));
      }, [setCoinInv]);

      if(coinInv.length === 0) console.log("CoinInv is empty!");
      else console.log("coinInv: ", coinInv);

    // Make sure key={coin.id}

    return(
        <div>
            <h2 style={{
            borderBottom: "2px solid black",
            marginBottom: "12px",
            marginTop: "12px"
          }}>
              My Coins:
          </h2>
            
            <ul>
                {coinInv.map((coin) => {
                    return <h5 key={coin.id}><Coin coin={coin} /></h5>
                })}
            </ul>
        </div>
        );
}

export default Coins;