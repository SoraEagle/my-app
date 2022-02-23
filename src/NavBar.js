import React from "react";
import {NavLink} from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white"
};

  // 3 routes (Home, Coins, and NewCoin)
function NavBar(){
    return(
        <div
          style={{
            backgroundColor: "firebrick",
            borderBottom: "2px solid black",
            paddingBottom: "10px",
            marginBottom: "12px",
            height: "10vh" //Keeps the height of this component to 10% of the browser window's height.
          }} >
          <NavLink style={{linkStyles}} to="/" exact>
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