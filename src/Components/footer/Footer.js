import React from "react";
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerbody">
        <div className="footermain">
          <h3>About Us</h3>
          <p>
          Join us on this literary adventure as we celebrate the written word and the boundless imagination it inspires. Happy reading!
          </p>
        </div>
        <div className="footerlists">
          <div className="footerlist">
            <h3>Categories</h3>
            <ul>
              <li>Science Fiction</li>
              <li>Fantasy</li>
              <li>Mystery</li>
              <li>Romance</li>
              <li>Thriller</li>
            </ul>
          </div>
          <div className="footerlist">
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Books</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footerlist">
            <h3>Follow Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
        <div>
          <p>&copy; 2024 BookWebsite. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
