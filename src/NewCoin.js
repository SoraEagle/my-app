import React, {useContext, useEffect} from "react";
import {CoinListContext} from "./context/coinList";

// Map the external API in the dropdown to create the options based on the possible coins
// Send new Object (newCoin) to be added to the array in the db.json

// Any state needed? Yes, brought in from context folder (./context/<file>).
// What state is needed? ?
// Is useEffect needed? Yes

function NewCoin(){
    const {coinList, setCoinList} = useContext(CoinListContext);

    useEffect(() => {
        fetch("https://api.coinbase.com/v2/currencies") //default GET request to the API.
        .then((r) => r.json())
        .then((data) => setCoinList(data));
      }, [setCoinList]);
    
      console.log("coinList is:", coinList); // coinList is only rendered while NewCoin is rendered

    return(
    <div>
        <h2>Submit New Coin</h2>

        {/* Add the dropdown menu */}
        {/* const options = .map(() => {
            <option>{`https://api.coinbase.com/v2/currencies/${data.name}`}</option>
        }) */}
    </div>
    );
}

export default NewCoin;