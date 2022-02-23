import React, {useContext, useState} from "react";
import {CoinListContext} from "./context/coinList";
import {CoinInvContext} from "./context/coinInv";

function NewCoin(){
  const {coinList} = useContext(CoinListContext);
  const {coinInv, setCoinInv} = useContext(CoinInvContext);
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("");

  const newCoin = { // Definition of the newCoin Object.
    id: coinList.id,
    amount: amount,
    name: currency
  }
  console.log("newCoin: ", newCoin);

  function handleAmountChange(e){ // Function to track changes to the amount typed in.
    setAmount(e.target.value);
  }
  function handleCurrencyChange(e){ // Function to keep track of the currency being submitted.
    setCurrency(e.target.value);
  }

  let coins = coinList.data;
  const options = coins ? coins.map((coin) => { // Using ternary to ensure that coin is mapped.
    return <option key={coin.id}>{coin.name}</option>
  }) : `loading`;

  function handleSubmit(e){ //Connected to the Submit button.
    e.preventDefault();
    console.log("newCoin: ", newCoin);
    fetch("http://localhost:3001/coins", { // POST fetch request to post newCoin to db.json.
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ // 
        id: newCoin.id,
        amount: amount,
        currency: currency
      }),
    })
    .then((r) => r.json())
    .then((newCoin) => setCoinInv([...coinInv, newCoin])); // Adds the newCoin Object to the coinInv Array.
  }

  return(
    <div style={{
      marginBottom: "10px",
      height: "80vh"
    }}>
      <h2 style={{
          borderBottom: "2px solid black",
          marginBottom: "12px",
        }}>Submit New Coin</h2>
      <form onSubmit={handleSubmit} style={{
        paddingBottom: "12px",
        borderBottom: "2px solid black"
      }}> {/* form for creating the newCoin Object */}
        <label>Amount:
          <input type="text" name="amount" 
            value={amount} onChange={handleAmountChange} /> {/* Amount of the newCoin */}
        </label>
          <label>Currency:
              <select value={currency} onChange={handleCurrencyChange}>{options}</select> {/* The dropdown; onChange={function handleChange} */}
          </label>
          <button type="submit">Submit Currency</button> {/* The form's button */}
      </form>
      <p>You can add new currencies to your inventory here!</p>
      <div style={{textAlign: "left"}}>
        <h3>WARNING:</h3>
        <p style={{borderBottom: "2px solid black"}}>
          Currently, the only way to submit inventory of the "United Arab Emirates Dirham", you must first select another currency, then reselect "United Arab Emirates Dirham"
        </p>
        <h3>INSTRUCTIONS:</h3>
        <p>To submit a currency to your inventory list correctly, you need to:</p>
        <ol>
          <li></li>
          <li></li>
          <li>Hit the Submit Button</li>
        </ol>
      </div>
    </div>
  );
}

export default NewCoin;