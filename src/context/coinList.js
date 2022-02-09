import React, {useState} from "react";

const CoinListContext = React.createContext();

function CoinListProvider({children}){
    const [coinList, setCoinList] = useState([]); // State variables for setting the API's list of coins.
    return(
      <CoinListContext.Provider value={{coinList, setCoinList}}>
        {children}
      </CoinListContext.Provider>
    );
}
  
export {CoinListContext, CoinListProvider};