// Need to implement:
// Create "Edit" and "Delete" Buttons with functions

// Create the coin Object
// Write the Array of coin Objects to db.json

function Coin({coin}){
    console.log(coin);

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
        <div style={{
            borderBottom: "2px solid black",
            paddingBottom: "10px",
            marginBottom: "12px",
          }} >
            {/* Give the data of the coin from coinInv here */}
            {/* Map out coinInv? */}
            <h5>{coin.amount}</h5>
            <h5>{coin.currency}</h5>
            <button onClick={updateCoin} >Edit</button>
            <button onClick={deleteCoin} >Delete</button>
        </div>
    );
}

export default Coin;