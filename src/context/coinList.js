import React, {useEffect, useState} from "react";

const CoinListContext = React.createContext();

function CoinListProvider({children}){
    const [coinList, setCoinList] = useState([]); // State variables for setting a list of the API's currencies.
    useEffect(() => {
      fetch("https://api.coinbase.com/v2/currencies") //default GET request to the API.
        .then((r) => r.json())
        .then((data) => setCoinList(data)); // sets coinList.
    }, []);

    return(
      <CoinListContext.Provider value={{coinList, setCoinList}}>
        {children}
      </CoinListContext.Provider>
    );
}
  
export {CoinListContext, CoinListProvider};