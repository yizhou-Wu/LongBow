// import React from 'react';
import { useState ,useEffect} from "react";
import "./Styles.css"

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="contact-container">
            <a>Contact</a>
            <a href="mailto:cj.chen@longbowmaterial.com">cj.chen@longbowmaterial.com</a>
            <a>(949)-562-8469</a>
        </div>
    </div>
  );
};
export default Footer;