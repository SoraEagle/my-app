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

      console.log("coinInv: ", coinInv); //Currently empty

    // Make sure key={coin.id}

    return(
        <div>
            <h2>My Coins:</h2>
            
            {/* Create a function to map <Coin /> */}
            {coinInv.map((coin) => {
                return <Coin />
            })}
        </div>
        );
}

export default Coins;