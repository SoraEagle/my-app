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
        }}>Submit New Currency</h2>
      <form onSubmit={handleSubmit} style={{
        paddingBottom: "12px",
        borderBottom: "2px solid black"}}> {/* form for creating newCoin Object */}
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
      <div style={{
        textAlign: "left",
        borderTop: "2px solid black",
        borderBottom: "2px solid black"}}>
          <div style={{
            backgroundColor: "crimson"
          }}>
            <h3>WARNING:</h3>
            <p style={{borderBottom: "2px solid black"}}>
              Currently, the page loads with "United Arab Emirates Dirham" seemingly already selected (<i>it is not</i>).<p></p>
              Submitting to the database without changing this will result in the submitted currency not registering the type of currency.<p></p>
              <h3>SOLUTION:</h3>
              To fix this, you must first select another currency, then reselect "United Arab Emirates Dirham" (if that is the currency that you wish to submit).
            </p>
          </div>
        <h3>INSTRUCTIONS:</h3>
        <p>To submit a currency to your inventory list correctly, you need to:</p>
        <ol>
          <li>Type in the amount of the currency into Amount.</li>
          <li>Set the Currency dropdown list to your preferred currency.</li>
          <li>Hit the Submit Button.</li>
        </ol>
        <p>And your currency will have been submitted to the list.  You will now find it listed on the <a href="/coins">My Coins</a> page. </p>
      </div>
    </div>
  );
}

export default NewCoin;