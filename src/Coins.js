import React, {useContext} from "react";
import Coin from "./Coin";
import {CoinListContext} from "./context/coinList";
import {CoinInvContext} from "./context/coinInv";

// Need to implement:
// Map the coin Objects

// GET fetch request to 

function Coins(){
    const {coinList, setCoinList} = useContext(CoinListContext);
    console.log("The API's list of coins: ", coinList);
    console.log("coinList ", coinList.data);

    // Make sure key={coin.id}

    return(
        <div>
            <h2>My Coins:</h2> {/*  */}
            
            {/* Create a function to map <Coin /> */}
            {/* {coinInv.map(() => {
                <Coin />
            })} */}
        </div>
        );
}

export default Coins;