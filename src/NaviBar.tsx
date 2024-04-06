import { useEffect, useState } from "react";
import { RxDropdownMenu } from "react-icons/rx";

interface Props {
  isInHomePage?: boolean;
}

const NaviBar = (props: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 800);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0); // Set isScrolled to true if scrollTop is greater than 0
    };
    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    console.log("toggleDropdown");
    setIsDropdownOpen(!isDropdownOpen);
  };
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  return (
    <>
      <nav
        className={`navbar ${isScrolled ? "scrolled" : ""} ${
          props.isInHomePage ? "" : "notHome"
        }`}
      >
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
        .navbar a {
          text-decoration: none;
          color: white;
        }

        .navbar {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          align-items: center;
          padding: 0.4rem;
          color: white;
          z-index: 99;
          position: fixed;
          width: 100%;
          height: 3.2rem;
        }

        .navbar.scrolled,
        .navbar.notHome {
          background-color: #e0e0e0;
          color: black;
        }
        .navbar.scrolled li a,
        .navbar.notHome li a {
          color: black;
        }
        .navbar.scrolled .centered-div a,
        .navbar.notHome .centered-div a {
          color: black;
        }

        .navbar:hover {
          background-color: #e0e0e0;
          color: black;
        }
        .navbar:hover li a {
          color: black;
        }
        .navbar:hover .centered-div a {
          color: black;
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
        .nav-links:hover {
          color: black;
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
    </>
  );
};
export default NaviBar;
