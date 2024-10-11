import React, { useState, useEffect } from "react";
import "./navbar.scss";
import logo from "../../assets/logo.svg";
import { GoTriangleDown } from "react-icons/go";
import { RiMenu4Fill } from "react-icons/ri";
import MobileNavbar from "../MoblieNavbar/mobileNav";
import Megamenu from "../Megamenu/megamenu";

function Navbar() {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegamenuVisible, setIsMegamenuVisible] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };

  const showMegamenu = () => {
    setIsMegamenuVisible(true);
  };

  const hideMegamenu = () => {
    setIsMegamenuVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50); // Adjust the scroll position as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar-container ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo-container">
        <img src={logo} alt="Logo" className="logo-icon" />
        <h2>MODELKOS</h2>
      </div>

      <div className="navbar-links-container">
        <ul>
          <li>Home</li>
          <li
            className="navbarHover"
            onMouseEnter={showMegamenu}
            onMouseLeave={hideMegamenu}
          >
            Our Work <GoTriangleDown />
          </li>
          <li className="navbarHover"
            onMouseEnter={showMegamenu}
            onMouseLeave={hideMegamenu}>
            About <GoTriangleDown />
          </li>
          <li className="navbarHover"
            onMouseEnter={showMegamenu}
            onMouseLeave={hideMegamenu}>
            Models <GoTriangleDown />
          </li>
          <li>
            Academy <GoTriangleDown />
          </li>
          <li>Blog</li>
        </ul>
      </div>

      <div className="navbar-buttons-container">
        <button>Apply Now</button>
        <button className="primary">Contacts</button>
      </div>

      <div className="navbar-menu-icon" onClick={toggleMobileNav}>
        <RiMenu4Fill />
      </div>

      {isMobileNavVisible && <MobileNavbar onClose={toggleMobileNav} />}

      <div
        className="megamenu-containerHover"
        onMouseEnter={showMegamenu}
        onMouseLeave={hideMegamenu}
        style={{ display: isMegamenuVisible ? "block" : "none" }}
      >
        <Megamenu />
      </div>
    </div>
  );
}

export default Navbar;
