// import React from 'react';
import DropdownMenu from "./DropdownMenu";
import "./Styles.css"
const NaviBar = () => {
  return (
    <nav className="naviBar">
      <ul>
          <li className="leftMostLi">
            <a href="/product">Product</a>
            <div className='dropdownDiv'>
              <ul>
                <li>
                  <a>Floor</a>
                </li>
                <li>
                  <a>Tile</a>
                </li>
                <li>
                  <a>Lock</a>
                </li>

              </ul>
            </div>
          </li>

        <li >
          <a href="/about">Assembly</a>
        </li>
        <li className="middleLi">
          <a href="/">Long Bow</a>
        </li>
        <li >
          <a href="/services">About Us</a>
        </li>
        <li className="rightMostLi">
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};
export default NaviBar;