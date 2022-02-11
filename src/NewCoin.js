import React, {useContext, useEffect, useState} from "react";
import {CoinListContext} from "./context/coinList";
import {CoinInvContext} from "./context/coinInv";

// Need to implement:

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

  const newCoin = { // Definition of the newCoin Object
    id: coinList.id,
    amount: amount,
    name: currency
  }
  console.log("newCoin: ", newCoin)

  function handleAmountChange(e){ // Function to track changes to the amount typed in
    setAmount(e.target.value);
  }

  function handleCurrencyChange(e){ //Function to keep track of the currency being submitted.
    setCurrency(e.target.value);
  }

  let coins = coinList.data;
  const options = coins ? coins.map((coin) => { // Using ternary to ensure that coin is mapped
    return <option key={coin.id}>{coin.name}</option>
  }) : `loading`;

  function handleSubmit(e){ //Connected to Submit button
    e.preventDefault();
    console.log("newCoin: ", newCoin);
    fetch("http://localhost:3001/coins", { // POST fetch request to post newCoin to db.json
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ // 
        id: newCoin.id,
        amount: amount,
        currency: currency
      }),
    })
    .then((r) => r.json())
    .then((newCoin) => setCoinInv([...coinInv, newCoin])); // "coinInv is not a function"
  }

  return(
    <div style={{
      borderBottom: "2px solid black",
      marginBottom: "12px",
    }}>
      <h2 style={{
          borderBottom: "2px solid black",
          marginBottom: "12px",
        }}>Submit New Coin</h2>
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