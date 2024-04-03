import React from "react";

const Footer = () => {
  const style = {
    color: "white",
    backgroundColor: "#5c5470",
    fontFamily: "Sans-Serif",
    justifyContent: "space-between",
    height: "560px",
    paddingTop:"10px",
    paddingBottom:"20px"
  };
  const new1 = {
    marginLeft: "10px",
    fontFamily: "times new roman",
    fontSize: "30px",
    textDecoration: "none",
    color: "white",
  };
  return (
    <footer style={style}>
      <div style={new1}>
        <div className="main">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
            ornare leo. Mauris sed lorem in sapien faucibus dapibus.
          </p>
        </div>
        <div style={{ display: "flex", gap: "7%" }}>
          <div className="list">
            <h3>Categories</h3>
            <ul>
              <li>Science Fiction</li>
              <li>Fantasy</li>
              <li>Mystery</li>
              <li>Romance</li>
              <li>Thriller</li>
            </ul>
          </div>
          <div className="list">
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Books</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="list">
            <h3>Follow Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
        <div style={new1}>
          <p>&copy; 2024 BookWebsite. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
