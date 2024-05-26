import { useEffect, useState } from "react";

interface Props {
  isInHomePage?: boolean;
}

const NaviBar = (props: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 700);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
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
  const imageUrl = `${process.env.PUBLIC_URL}menu.svg`;
  return (
    <>
      <nav
        className={`navbar ${isScrolled ? "scrolled" : ""} ${
          props.isInHomePage ? "" : "notHome"
        }`}
      >
        {isSmallScreen ? (
          <>
          <div className="dropdown">
            <button className="dropbtn" onClick={toggleDropdown}>
              <img className="img" src={imageUrl}/>
            </button>
            {isDropdownOpen && (
              <div
                className="dropdown-content"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="close-btn" onClick={closeDropdown}>
                  &times;
                </span>
                <ul>
                  <li>
                    <a onClick={closeDropdown} href="/shop">
                      Shop
                    </a>
                  </li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
            )}
          </div>
           <div className="centered-div small">
           <a href="/">LONGBOW MATERIAL</a>
         </div>
         </>
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
                <li>
                  <a href="/about">About</a>
                </li>
                <li>Contact</li>
              </ul>
            </div>
          </>
        )}
      </nav>
      <style jsx global>{`
        /* Global styles */
        body.no-scroll {
          overflow: hidden;
        }
      `}</style>
      <style jsx>{`
        .dropdown {
          position: relative;
        }
        .dropdown .dropdown-content li {
          text-decoration: none;
        }
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
        .small{
          font-size: 20px;
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
          background-color: transparent;
          color: white;
          border: none;
          cursor: pointer;
        }

        .dropdown-content {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(
            0,
            0,
            0,
            0.8
          ); /* Semi-transparent black background */
          z-index: 999; /* Ensure dropdown is above other content */
        }
        .img {
          width: 2rem;
          height: 2rem;
        }
        .dropdown-content ul {
          list-style-type: none;
          padding: 0;
          margin: 50vh auto; /* Center vertically */
          text-align: center;
        }
        .dropdown-content ul li {
          color: white;
          text-decoration: none;
          font-size: 18px;
        }
        .dropdown-content ul li a {
          color: white;
          text-decoration: none;
          font-size: 18px;
        }
        .close-btn {
          color: black;
          float: right;
          font-size: 28px;
          font-weight: bold;
          margin-right: 2rem;
          margin-top: 2rem;
          cursor: pointer;
        }

        .dropdown-content {
          display: block;
        }

        .custom-icon {
          color: #007bff; /* Custom color for the icon */
          font-size: 24px; /* Custom font size for the icon */
        }
      `}</style>
    </>
  );
};
export default NaviBar;
