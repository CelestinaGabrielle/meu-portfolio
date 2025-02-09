import React, { useState } from "react";
import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import menuIcon from "/images/menuIcon.svg";
import closeIcon from "/images/closeIcon.svg";

const Header: React.FC = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen((prev) => !prev);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <button className={styles.menuIcon} onClick={toggleNavbar}>
            <img src={isNavbarOpen ? closeIcon : menuIcon} alt="Menu Icon" />
          </button>
          <h1 className={styles.h1}>Portfólio</h1>
          <div className={styles.toggleSwitch}>
            <input type="checkbox" id="switch" defaultChecked />
            <label htmlFor="switch"></label>
          </div>
        </div>
      </header>

      {/* Passando o estado corretamente para a Navbar */}
      <Navbar isOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
    </>
  );
};

export default Header;
