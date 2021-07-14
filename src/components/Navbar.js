import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, signOut } = useAuth();

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
          {currentUser ? (
            <button onClick={signOut}>Logout</button>
          ) : (
            <NavLink to='/login'>Login</NavLink>
          )}
        </li>
        <li>
          <NavLink to='/dashboard'>Dashboard</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
