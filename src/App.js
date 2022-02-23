// import logo from './logo.svg';
import './App.css';
import React from "react";
import {Route, Switch} from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import Coins from './Coins';
import NewCoin from './NewCoin';
import {CoinListProvider} from "./context/coinList";
import {CoinInvProvider} from "./context/coinInv";

function App(){
  return(
    <div className="App"
    style={{
      backgroundColor: "aqua",
      height: "100vh"
    }}>
      <CoinListProvider> {/* Wrap anything needing (coinList, setCoinList) context data */}
      <CoinInvProvider> {/* Wrap anything needing (coinInv, setCoinInv) context data */}
        <NavBar />
        <Switch style={{
        }}>
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

      {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <a className="reactJS-link" href="https://reactjs.org"
                target="_blank" rel="noopener noreferrer" >
                  This application was created with React
            </a>
            <a className="reactRouter-link" href="https://reactrouter.com/"
            target="_blank" rel="noopener noreferrer">
              And React Router
            </a>
      </header> */}
      <div style={{
        backgroundColor: "coral",
        borderBottom: "2px solid black",
        marginBottom: "12px",
        marginTop: "12px",
        borderTop: "2px solid black",
        marginTop: "10px",
        paddingTop: "10px"
      }}>
        <footer style={{
          borderBottom: "2px solid black",
          marginBottom: "12px",
          marginTop: "12px",
          borderTop: "2px solid black",
          marginTop: "10px",
          paddingTop: "10px",
          textAlign: "center"
        }}>
          <p>@2022 &notin;&empty;&ni; Developments Inc.</p>
          <p>All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;