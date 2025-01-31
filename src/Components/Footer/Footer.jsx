import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-container">
        <h1>Made with ❤️ by M Rahul Bhat <span> using React.js </span></h1>
        <p>© {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
