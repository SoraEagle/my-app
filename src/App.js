import logo from './logo.svg';
import './App.css';
import React from "react";
import {Route, Switch} from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import Coins from './Coins';
import NewCoin from './NewCoin';
import {CoinListProvider} from "./context/coinList";
import {CoinInvProvider} from "./context/coinInv";

// Any state needed? Yes, so state can be passed to each child component needing it (useContext!!!)

function App(){
  // const {coinList, setCoinList} = useContext(CoinListContext); // State variables for the API's list of coins.

  return(
    <div className="App">
      <CoinListProvider> {/* Wrap anything needing (coinList, setCoinList) context data */}
      <CoinInvProvider>
        <NavBar />
        <Switch>
          <Route exact path="/coins">
            <Coins />
          </Route>
          <Route exact path="/coins/new">
            <NewCoin  />
          </Route>
          <Route exact path="/">
            <div>
              <p>Home Page</p>
              <Home />
            </div>
          </Route>
        </Switch>
      </CoinInvProvider>
      </CoinListProvider>

      <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Edit {/*<code>src/NewCoin.js</code>*/} and save to reload.</p>
            <a className="App-link" href="https://reactjs.org"
                target="_blank" rel="noopener noreferrer" >
                  Learn React
            </a>
      </header>
    </div>
  );
}

export default App;