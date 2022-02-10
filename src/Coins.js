import React, {useContext} from "react";
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

    // Make sure key={coin.id}

    return(
        <div>
            <h2>My Coins:</h2>
            
            {/* Create a function to map <Coin /> */}
            {coinInv.map((coin) => {
                <Coin />
            })}
        </div>
        );
}

export default Coins;