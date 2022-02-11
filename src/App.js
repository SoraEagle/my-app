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
  return(
    <div className="App"
    style={{
      backgroundColor: "aqua"
    }}>
      <CoinListProvider> {/* Wrap anything needing (coinList, setCoinList) context data */}
      <CoinInvProvider> {/* Wrap anything needing (coinInv, setCoinInv) context data */}
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
            <a className="reactJS-link" href="https://reactjs.org"
                target="_blank" rel="noopener noreferrer" >
                  This application was created with React
            </a>
            <a className="reactRouter-link" href="https://reactrouter.com/"
            target="_blank" rel="noopener noreferrer">
              And React Router
            </a>
      </header>
    </div>
  );
}

export default App;