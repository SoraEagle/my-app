import React, {useContext, useEffect} from "react";
import {CoinListContext} from "./context/coinList";
import {CoinInvContext} from "./context/coinInv";

// Need to implement:
// Map the external API data(id, name) in the dropdown to create the options based on the possible coins

// function for POST fetch request to send new Object(newCoin) to be added to coinInv


function NewCoin(){
    const {coinList, setCoinList} = useContext(CoinListContext);
    const {coinInv, setCoinInv} = useContext(CoinInvContext);

    useEffect(() => {
        fetch("https://api.coinbase.com/v2/currencies") //default GET request to the API.
        .then((r) => r.json())
        .then((data) => setCoinList(data)); // sets coinList.
      }, [setCoinList]);
    
      console.log("coinList is:", coinList); // coinList is only rendered while NewCoin is rendered.

      useEffect(() => { // Used for GET fetch request from db.json
        fetch("http://localhost:3001/coins")
        .then((r) => r.json())
        .then((data) => setCoinInv(data));
      }, [setCoinInv]);

      console.log("coinInv: ", coinInv); //Currently empty


      function handleSubmit(event){ //Connected to Submit button
        event.preventDefault();

        /*
        fetch("http://localhost:3001/coins", { // POST fetch request to post newCoin to db.json
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({ // 
            id: newCoin.id,
            amount: newCoin.amount,
            name: newCoin.name
          }),
        })
    .then((r) => r.json())
    .then((newCoin) => coinInv([...coinInv, newCoin]));
        */ 
    }

    {/* Map the coinList here, or invoke the function for it here */}
    // let coins = coinList.data;

    // console.log("Coins: ", coins);

    // const options = coins.map((coin) => { 
    //     <option key={coin.id}>{coin}</option>
    // })

    return(
    <div>
        <h2>Submit New Coin</h2>

        <form onSubmit={handleSubmit}> {/* form for creating the newCoin Object */}
            <label>Amount:
            <input type="text" name="amount"></input></label> {/* Amount of the newCoin */}
            <label>Currency:
                <select></select>
            </label>
            <button type="submit">Submit Currency</button>
        </form>
    </div>
    );
}

export default NewCoin;