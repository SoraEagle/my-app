// Need to implement:
// Map the external API data(id, name) in the dropdown to create the options based on the possible coins

// Create "Edit" and "Delete" Buttons with functions

// Create the coin Object
// Add coin Object to coinInv
// Write the Array of coin Objects to db.json

function Coin({coin}){
    const {id, name, amount} = coin; // key={id}
    console.log("Coin: ", coin);
    // name: the unit for the currency
    // amount: value of a field in the submitForm...

    // Fetch the data from db.json

    function updateCoin(){ // Function to update a selected coin Object
        // 
    }

    function deleteCoin(){ // Function to delete a coin Object
        /* fetch(`<url>/${coin.id}`, { // 
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => onDeleteCoin(coin)); //
    */
    }

    return(
        <div>
            {/* Give the data of the coin from coinInv here */}
            {/*  */}
            {/* coin.amount */}
            {/* coin.name */}
            <button onClick={updateCoin} ></button>
            <button onClick={deleteCoin} >Delete</button>
        </div>
    );
}

export default Coin;