import React, {useState} from "react";

const CoinListContext = React.createContext();

function CoinListProvider({children}){
    const [coinList, setCoinList] = useState([]); // State variables for setting a list of the API's currencies.
    return(
      <CoinListContext.Provider value={{coinList, setCoinList}}>
        {children}
      </CoinListContext.Provider>
    );
}
  
export {CoinListContext, CoinListProvider};