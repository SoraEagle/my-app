import React, {useContext, useEffect, useState} from "react";
import {CoinListContext} from "./context/coinList";
import {CoinInvContext} from "./context/coinInv";

// Need to implement:
// Create the newCoin Object
// function for POST fetch request to send new Object(newCoin) to be added to coinInv(db.json)

function NewCoin(){
    const {coinList, setCoinList} = useContext(CoinListContext);
    const {coinInv, setCoinInv} = useContext(CoinInvContext);

    const [amount, setAmount] = useState(0);
    const [currency, setCurrency] = useState("");


    useEffect(() => {
      fetch("https://api.coinbase.com/v2/currencies") //default GET request to the API.
        .then((r) => r.json())
        .then((data) => setCoinList(data)); // sets coinList.
    }, [setCoinList]);
      // coinList is, here, a Object that has a single key/value pair (data).
      // coinList.data appears to be an Array of Objects
    
      // useEffect(() => { // Used for GET fetch request from db.json
      //   fetch("http://localhost:3001/coins")
      //   .then((r) => r.json())
      //   .then((data) => setCoinInv(data));
      // }, [setCoinInv]);

      // console.log("coinInv: ", coinInv); //


    const newCoin = { // Definition of the newCoin Object
      id: coinList.id,
      amount: amount,
      name: currency
    }

    console.log("newCoin: ", newCoin)

    function handleAmountChange(event){
      setAmount(event.target.value);
      console.log("amount: ", amount); // Test if it is being tracked
    }

  function handleCurrencyChange(event){
    setCurrency(event.target.value);
    console.log("currency: ", currency); // Test if it is being tracked
  }


    let coins = coinList.data;
    console.log("Coins: ", coins);

    const options = coins ? coins.map((coin) => { // Using ternary to ensure that coin is mapped
      // console.log("coin", coin);  // To test if coin is iterable
      return <option key={coin.id}>{coin.name}</option>
    }) : `loading`;


    function handleSubmit(event){ //Connected to Submit button
      event.preventDefault();
      console.log("newCoin: ", newCoin);
      fetch("http://localhost:3001/coins", { // POST fetch request to post newCoin to db.json
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ // 
          id: newCoin.id,
          amount: amount,
          name: currency
        }),
      })
      .then((r) => r.json())
      .then((newCoin) => setCoinInv([...coinInv, newCoin])); // "coinInv is not a function"
    }


    return(
    <div>
        <h2>Submit New Coin</h2>
        <form onSubmit={handleSubmit}> {/* form for creating the newCoin Object */}
          <label>Amount:
            <input type="text" name="amount" 
              value={amount} onChange={handleAmountChange} /> {/* Amount of the newCoin */}
          </label>
            <label>Currency:
                <select value={currency} onChange={handleCurrencyChange}>{options}</select> {/* The dropdown; onChange={function handleChange} */}
            </label>
            <button type="submit">Submit Currency</button>
        </form>
    </div>
    );
}

export default NewCoin;