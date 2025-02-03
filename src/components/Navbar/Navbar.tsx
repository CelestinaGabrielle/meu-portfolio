import React from "react";
import styles from "./Navbar.module.css";

interface NavbarProps {
  isOpen: boolean;
  toggleNavbar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, toggleNavbar }) => {
  return (
    <nav className={`${styles.navbar} ${isOpen ? styles.open : styles.closed}`}>
      <h1 className={styles.navTitle}>Bem-vindo ao meu Portfólio</h1>
      <ul className={styles.navList}>
        {[
          { href: "#sobre", label: "Sobre" },
          { href: "#habilidades", label: "Habilidades" },
          { href: "#projetos", label: "Projetos" },
          { href: "#contatos", label: "Contatos" },
        ].map((item) => (
          <li key={item.href} className={styles.navItem}>
            <a href={item.href} className={styles.navLink} onClick={toggleNavbar}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
