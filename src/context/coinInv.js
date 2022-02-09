import React, {useState} from "react";

const CoinInvContext = React.createContext();

function CoinInvProvider({children}){
    const [coinInv, setCoinInv] = useState([]); // State variables for setting the application's inventory of coins.
    return(
      <CoinInvContext.Provider value={{coinInv, setCoinInv}}>
        {children}
      </CoinInvContext.Provider>
    );
}
  
export {CoinInvContext, CoinInvProvider};