import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header>
      <nav className="navStyle">
        <img
         style={{ height: "100px", width: "130px" }}
          src="https://th.bing.com/th?id=OIP.UciJMvU5jv0298vBNNpYfwHaF4&w=280&h=222&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          alt="book"
        />
        <div className={"links"}>
          <NavLink className={"new1"} to="/" exact>
            Home
          </NavLink>
          <NavLink className={"new1"} to="/about-us">
            About Us
          </NavLink>
          <NavLink className={"new1"} to="/contact-us">
            Contact Us
          </NavLink>
          <NavLink className={"new1"} to="/posts">
            Posts
          </NavLink>
          <NavLink className={"new1"} to="/photos">
            Photos
          </NavLink>
          <NavLink className={"new1"} to="/users">
            Users
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
