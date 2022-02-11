import React, {useContext} from "react";
import {CoinInvContext} from "./context/coinInv";

// Need to implement:
// Create "Edit" and "Delete" Buttons with functions

// Write the Array of coin Objects to db.json

function Coin({coin}){
    const {coinInv, setCoinInv} = useContext(CoinInvContext);

    console.log(coin);

    function updateCoin(){ // Function to update a selected coin Object
        // 
    }

    function deleteCoin(){ // Function to delete a coin Object
    fetch(`http://localhost:3001/coins/${coin.id}`, { // DELETE fetch request
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => onDeleteCoin(coin)); // Invoke the onDeleteCoin function with this fetch request
    }

    function onDeleteCoin(deletedCoin){ //Function 
        const updatedCoins = coinInv.filter((coin) => coin.id !== deletedCoin.id);
    setCoinInv(updatedCoins);
    }

    return(
        <div key={coin.id} style={{
            borderBottom: "2px solid black",
            paddingBottom: "10px",
            marginBottom: "12px",
          }} >
            {/* Give the data of the coin from coinInv here */}
            {/* Map out coinInv? */}
            {coin.amount} {coin.currency} 
            <button onClick={updateCoin} >Edit</button>
            <button onClick={deleteCoin} >Delete</button>
        </div>
    );
}

export default Coin;