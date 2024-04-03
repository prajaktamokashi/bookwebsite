import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const myStyle = {
    color: "white",
    backgroundColor: "#5c5470",
    fontFamily: "Sans-Serif",
    height: "100px",
    marginBottom: "40px",
    display: "flex",
    border: "2px solid grey",
    width: "100%",
  };
  const new1 = {
    marginLeft: "50px",
    fontFamily: "times new roman",
    fontSize: "35px",
    color: "white",
    textDecoration: "none",
  };
  const links={
    marginTop: "25px",
    marginLeft:"45%"
  };
  return (
    <header style={myStyle}>
      <nav style={myStyle}>
        <img
          style={{ height: "100px", width: "130px" }}
          src="https://th.bing.com/th?id=OIP.UciJMvU5jv0298vBNNpYfwHaF4&w=280&h=222&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          alt="book"
        />
        <div style={links}>
        <Link style={new1} to="/">
          Home
        </Link>
        <Link style={new1} to="/about-us">
          About Us
        </Link>
        <Link style={new1} to="/contact-us">
          Contact Us
        </Link>
        <Link style={new1} to="/posts">
          Posts
        </Link>
        <Link style={new1} to="/users">
          Users
        </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
