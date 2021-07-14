import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <p> Bangla Air </p>
      </div>
      <ul>
        <li>
          <NavLink exact to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/booking'>Booking</NavLink>
        </li>
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
        <li>
          <NavLink to='/dashboard'>Dashboard</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
