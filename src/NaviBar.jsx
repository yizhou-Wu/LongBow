// import React from 'react';
import "./Styles.css"
const NaviBar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li><a href="/shop">Shop</a></li>
        <li>About</li>
        <li>Contact</li>
        <li className="middleLi"><a href="/">LONGBOW MATERIAL</a></li> 
      </ul>
    </nav>
  );
};
export default NaviBar;