import React from "react";

import { NavLink } from "react-router-dom";
import "./headerPage.scss";

const Header = () => {
  return (
    <nav className=" header">
      <div className="container" id="box">
        <div className="logo">
          <img src="/logo.png" alt="logoheader" />
        </div>
        <ul>
          <li>
            <NavLink className="navbar__link" to="/Home">Home</NavLink>
          </li>
          <li>
            <NavLink className="navbar__link" to="/Debts">Debts</NavLink>
          </li>
          <li>
            <NavLink className="navbar__link" to="/Transactions">Transactions</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
