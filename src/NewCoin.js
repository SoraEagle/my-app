import React, {useContext, useEffect} from "react";
import {CoinListContext} from "./context/coinList";
import {CoinInvContext} from "./context/coinInv";

// Need to implement:
// Map the external API data(id, name) in the dropdown to create the options based on the possible coins

// function for POST fetch request to send new Object(newCoin) to be added to the Array in the db.json


function NewCoin(){
    const {coinList, setCoinList} = useContext(CoinListContext);
    const {coinInv, setCoinInv} = useContext(CoinInvContext);

    useEffect(() => {
        fetch("https://api.coinbase.com/v2/currencies") //default GET request to the API.
        .then((r) => r.json())
        .then((data) => setCoinList(data)); // sets coinList.
      }, [setCoinList]);
    
      console.log("coinList is:", coinList.data); // coinList is only rendered while NewCoin is rendered.

      useEffect(() => { // Used for GET fetch from db.json
        fetch("http://localhost:3001/coins")
        .then((r) => r.json())
        .then((data) => setCoinInv(data));
      }, [setCoinInv]);

      console.log("coinInv: ", coinInv);


      function handleSubmit(event){ //Connected to Submit button
        event.preventDefault();

        /*
        fetch("http://localhost:3001/coins", { // POST fetch request to post newCoin to db.json
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ // 
        amount: formData.prompt,
        currency: [formData.answer1, formData.answer2, formData.answer3, formData.answer4], // 
        correctIndex: formData.correctIndex
      }),
    })
    .then((r) => r.json())
    .then((newCoin) => coinInv([...coinInv, newCoin]));
        */ 
    }

    return(
    <div>
        <h2>Submit New Coin</h2>

        <form onSubmit={handleSubmit}> {/* form for creating the newCoin Object */}
            <label>Amount:
            <input type="text" name="amount"></input></label> {/* Amount of the newCoin */}
            <label>Currency:
                <select>
                    {/* Map the coinList here, or invoke the function for it here */}
                    {/* const options = .map((coinList) => {
                            <option key={name}></option>
                        }) */}
                </select>
            </label>
            <button type="submit">Submit Currency</button>
        </form>
    </div>
    );
}

export default NewCoin;