import React, {useContext} from "react";
import {CoinInvContext} from "./context/coinInv";

function Coin({coin}){
    const {coinInv, setCoinInv} = useContext(CoinInvContext);

    function deleteCoin(){ // Function to delete a coin Object.
    fetch(`http://localhost:3001/coins/${coin.id}`, { // DELETE fetch request.
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => onDeleteCoin(coin)); // Invoke the onDeleteCoin function with this fetch request.
    }

    function onDeleteCoin(deletedCoin){ //Function to delete a coin Object from the coinInv Array.
        const updatedCoins = coinInv.filter((coin) => coin.id !== deletedCoin.id);
        setCoinInv(updatedCoins);
    }

    return(
        <div key={coin.id} style={{
            borderBottom: "2px solid black",
            paddingBottom: "10px",
            marginBottom: "12px",
          }} >
            #{coinInv.indexOf(coin) + 1}: {coin.amount} {coin.currency} 
            <button onClick={deleteCoin} >Delete</button>
        </div>
    );
}

export default Coin;