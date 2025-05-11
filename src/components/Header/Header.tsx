import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import menuIcon from "../../assets/images/menuIcon.svg";
import closeIcon from "../../assets/images/closeIcon.svg";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const Header: React.FC = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isNavbarOpen) {
      disableBodyScroll(document.body); 
    } else {
      enableBodyScroll(document.body);
    }

    return () => {
      enableBodyScroll(document.body);
    };
  }, [isNavbarOpen]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <button className={styles.menuIcon} onClick={toggleNavbar}>
            <img src={isNavbarOpen ? closeIcon : menuIcon} alt="Menu Icon" />
          </button>
          <h1 className={styles.h1}>Portfólio</h1>
        </div>
      </header>

      {/* Passando o estado corretamente para a Navbar */}
      <Navbar isOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />

      {/* Overlay com blur */}
      {isNavbarOpen && (
        <div className={styles.overlay} onClick={toggleNavbar} />
      )}
    </>
  );
};

export default Header;