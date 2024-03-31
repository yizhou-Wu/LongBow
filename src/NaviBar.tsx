// import React from 'react';
import { useEffect, useState } from "react";
import "./Styles.css"
import { RxDropdownMenu } from "react-icons/rx";

const NaviBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 800);
    };

    // Check screen size on component mount and window resize
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleDropdown = () => {
    console.log("toggleDropdown")
    setIsDropdownOpen(!isDropdownOpen);
  };
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  return (
    <nav className="navbar">
      {isSmallScreen ? (
        <div className="dropdown" >
          <button className="dropbtn" onClick={toggleDropdown}>
            <RxDropdownMenu/>
          </button>
          {isDropdownOpen && (
            <div className="dropdown-content" onClick={e => e.stopPropagation()}>
               <li ><a onClick={closeDropdown} href="/shop">Shop</a></li>
                <li>About</li>
                <li>Contact</li>
            </div>
          )}
        </div>
      ) : (
          <>
          <div className="nav-links">
            <ul className="three-links">
              <li><a href="/shop">Shop</a></li>
              <li>About</li>
              <li>Contact</li>
              </ul>
            </div>
            <div className="middle-logo"> 
              <div><a href="/">LONGBOW MATERIAL</a></div> 
            </div>
          </>
     
      )}
      
    </nav>
  );
};
export default NaviBar;