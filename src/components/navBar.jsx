import React from "react";
import { NavLink, Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">
          Expense Manager
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse right" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <NavLink class="nav-link" to="/new">
                Create Expense 
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="/expense">
                Expense List
              </NavLink>
            </li>           
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
