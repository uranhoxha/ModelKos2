import React from "react";
import { GoTriangleDown } from "react-icons/go";
import "./mobileNav.scss";
import logo from "../../assets/logo.svg";
import { IoClose } from "react-icons/io5";

function MobileNavbar({ onClose }) {
  return (
    <div className="mobileNavbar-container">
      <div className="mobileNavbar-main">
        <div className="close-icon" onClick={onClose}>
          <IoClose />
        </div>
        <div className="mobileNav-logo-container">
          <img src={logo} alt="Logo" />
          <h2>MODELKOS</h2>
        </div>
        <div className="mobileNavbar-links-container">
          <div>
            <li>Home</li>
            <li>
              Our Work <GoTriangleDown />
            </li>
            <li>
              About <GoTriangleDown />
            </li>
            <li>
              Models <GoTriangleDown />
            </li>
            <li>
              Academy <GoTriangleDown />
            </li>
            <li>Blog</li>
          </div>
          <div className="mobileNavbar-buttons-container">
            <button>Apply Now</button>
            <button className="primary">Contacts</button>
          </div>
        </div>
      </div>

      <div className="mobileNavbar-background" onClick={onClose}></div>
    </div>
  );
}

export default MobileNavbar;
