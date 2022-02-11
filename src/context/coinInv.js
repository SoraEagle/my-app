import React, {useEffect, useState} from "react";

const CoinInvContext = React.createContext();

function CoinInvProvider({children}){
    const [coinInv, setCoinInv] = useState([]); // State variables for setting the application's inventory of coins.
    useEffect(() => { // Used for GET fetch request from db.json
      fetch("http://localhost:3001/coins")
      .then((r) => r.json())
      .then((data) => setCoinInv(data));
    }, []);

    return(
      <CoinInvContext.Provider value={{coinInv, setCoinInv}}>
        {children}
      </CoinInvContext.Provider>
    );
}
  
export {CoinInvContext, CoinInvProvider};