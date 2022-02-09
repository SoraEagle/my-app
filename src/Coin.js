// Any state needed? ?

// Need to implement:
// Map the external API data(id, name) in the dropdown to create the options based on the possible coins

// Create "Delete" Button

// Create the coin Object
// Add coin Object to an Array
// Write the Array of coin Objects to db.json

function Coin(){
    // const {id, name, amount} = coin; //Should a key be added?
    // id: key={id}
    // name: the unit for the currency
    // amount: value of a field in the submitForm...

     // Fetch the data from the db.json of the other repo

    function deleteCoin(){ // Function to delete the coin Object
        // DELETE fetch request
    }

    return(
        <div>
            {/* Give the data of the coin from the API here */}
            {/* coin.amount */}
            {/* coin.name */}
            {/* Delete Button */}
            <button onClick={deleteCoin} >Delete</button>
        </div>
    );
}

export default Coin;