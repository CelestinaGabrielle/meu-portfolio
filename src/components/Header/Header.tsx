import React, { useState } from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import menuIcon from "../../images/menuIcon.png";
import closeIcon from "../../images/closeIcon.png";

const Header: React.FC = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <button className="menu-icon" onClick={toggleNavbar}>
            <img src={isNavbarOpen ? closeIcon : menuIcon} alt="Menu Icon" />
          </button>
          <h1>Portfólio</h1>
          <div className="toggle-switch">
            <input type="checkbox" id="switch" checked />
            <label htmlFor="switch"></label>
          </div>
        </div>
        {isNavbarOpen && <Navbar />}
      </header>
      <div className="divider"></div>
    </>
  );
};

export default Header;
