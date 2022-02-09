import React from "react";
import Coin from "./Coin";
import {useRouteMatch} from "react-router-dom";

// const linkStyles = { // Styling for the NavLink.
//     display: "inline-block",
//     width: "50px",
//     padding: "12px",
//     margin: "0 6px 6px",
//     background: "blue",
//     textDecoration: "none",
//     color: "white",
// };

// Any state needed? Yes, brought in from context folder (./context/<file>)

function Coins(){
    // Make sure key={coin.id}
    const match = useRouteMatch();
    // let {path, url} = match;

    console.log(match);
    return(
        <div>
            <div>

          {/* <Route exact path={`${match.url}/new`}>
        <NewCoin  />
      </Route> */}
            </div>
            <h2>My Coins:</h2> {/* Figure out why the URL for NewCoin.js isn't working properly!!!*/}
            
            {/* Create a function to map <Coin /> */}
            {/* {coinInv.map(() => {
                <Coin coinInv={coinInv} setCoinInv={setCoinInv}
                coinList={coinList} setCoinList={setCoinList} />
            })} */}
        </div>
        );
}

export default Coins;