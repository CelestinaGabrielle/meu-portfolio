import React from "react";
import styles from "./Navbar.module.css"; // Importação do CSS Module

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.navTitle}>Bem-vindo ao meu Portfólio</h1>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="#sobre" className={styles.navLink}>Sobre</a>
        </li>
        <li className={styles.navItem}>
          <a href="#habilidades" className={styles.navLink}>Habilidades</a>
        </li>
        <li className={styles.navItem}>
          <a href="#projetos" className={styles.navLink}>Projetos</a>
        </li>
        <li className={styles.navItem}>
          <a href="#contatos" className={styles.navLink}>Contatos</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;