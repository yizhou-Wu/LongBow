// import React from 'react';
import { useEffect, useState } from "react";
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
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleDropdown = () => {
    console.log("toggleDropdown");
    setIsDropdownOpen(!isDropdownOpen);
  };
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  return (
    <div>
      <nav className="navbar">
        {isSmallScreen ? (
          <div className="dropdown">
            <button className="dropbtn" onClick={toggleDropdown}>
              <RxDropdownMenu />
            </button>
            {isDropdownOpen && (
              <div
                className="dropdown-content"
                onClick={(e) => e.stopPropagation()}
              >
                <li>
                  <a onClick={closeDropdown} href="/shop">
                    Shop
                  </a>
                </li>
                <li>About</li>
                <li>Contact</li>
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="centered-div">
              <a href="/">LONGBOW MATERIAL</a>
            </div>
            <div className="nav-links">
              <ul className="three-links">
                <li>
                  <a href="/shop">Shop</a>
                </li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </>
        )}
      </nav>
      <style jsx>{`
        a {
          text-decoration: none;
          color: black;
        }
        .navbar {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          align-items: center;
          padding: 10px 20px;
        }
        .nav-links li {
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .centered-div {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          font-size: 30px;
          /* Example background color */
          /*   padding: 20px; */
          /*   border-radius: 5px; */
          z-index: 1;
        }
        .middle-logo {
          grid-column: 6 / span 6;
          font-size: 30px;
        }
        .nav-links {
          list-style: none;
          padding: 0;
          grid-column: span 3;
        }
        .three-links {
          list-style: none;
          display: flex;
          gap: 2px;
        }
        .dropdown {
          position: relative;
        }

        .dropbtn {
          background-color: white;
          color: #333;
          border: none;
          cursor: pointer;
        }

        .dropdown-content {
          display: none;
          position: absolute;
          min-width: 160px;
          z-index: 1;
          position: absolute;
          background-color: #f9f9f9;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          padding: 12px 16px;
          z-index: 1;
        }

        .dropdown-content a {
          color: black;
          padding: 8px 12px;
          display: block;
          text-decoration: none;
        }

        .dropdown:hover .dropdown-content {
          display: block;
        }
      `}</style>
    </div>
  );
};
export default NaviBar;
