import React, {useContext, useEffect} from "react";
import {CoinListContext} from "./context/coinList";
import {CoinInvContext} from "./context/coinInv";

// Need to implement:
// Map the external API in the dropdown to create the options based on the possible coins

// Create submitForm for creating the newCoin Object

// Send new Object (newCoin) to be added to the array in the db.json

// Add newCoin Object to the Array of coin Objects

// Any state needed? Yes, brought in from context folder (./context/<file>).
// What state is needed? ?

// useEffect needed? For saving changes to coinInv

function NewCoin(){
    const {coinList, setCoinList} = useContext(CoinListContext);

    useEffect(() => {
        fetch("https://api.coinbase.com/v2/currencies") //default GET request to the API.
        .then((r) => r.json())
        .then((data) => setCoinList(data));
      }, [setCoinList]);
    
      console.log("coinList is:", coinList.data); // coinList is only rendered while NewCoin is rendered.

    return(
    <div>
        <h2>Submit New Coin</h2>

        <form > {/* form for creating the newCoin Object */}
            <label>Amount:
            <input type="text" name="amount"></input></label> {/* Amount of the newCoin */}
            <label>Currency:
                <select>
                    {/* Map the coinList here, or invoke the function for it here */}
                </select>
            </label>
        </form>

        {/* Add the dropdown menu */}
        {/* const options = .map((coinList) => {
            <option></option>
        }) */}
    </div>
    );
}

export default NewCoin;