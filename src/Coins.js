import React, {useContext} from "react";
import Coin from "./Coin";
import {useRouteMatch} from "react-router-dom";
import {CoinListContext} from "./context/coinList";
import {CoinInvContext} from "./context/coinInv";

// Need to implement:
// Map the coin Objects

// 

function Coins(){
    const {coinList, setCoinList} = useContext(CoinListContext);
    console.log("The API's list of coins: ", coinList);
    console.log("coinList ", coinList.data);

    // Make sure key={coin.id}
    const match = useRouteMatch();

    // console.log(match);
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