import React from "react";
import {NavLink} from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

  // 3 routes (Home, Coins, and NewCoin)

function NavBar(){
    return(
        <div
          style={{
            borderBottom: "2px solid black",
            paddingBottom: "10px",
            marginBottom: "12px",
          }} >
          <NavLink style={linkStyles} to="/" exact>
            Home
          </NavLink>
          <NavLink style={linkStyles} to="/coins">
            My Coins
          </NavLink>
          <NavLink style={linkStyles} to={"/coins/new"} exact>
            Add New Coin
          </NavLink>
        </div>
    );
}

export default NavBar;