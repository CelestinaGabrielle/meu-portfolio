import React from "react";
import styles from "./Navbar.module.css";
import { useInView } from "react-intersection-observer";

interface NavbarProps {
  isOpen: boolean;
  toggleNavbar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, toggleNavbar }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Rolagem suave
      toggleNavbar(); // Fecha o menu (se necessário)
    }
  };

  return (
    <nav
      ref={ref}
      className={`${styles.navbar} ${isOpen ? styles.open : styles.closed} ${
        inView ? styles.visible : ""
      }`}
    >
      <h1 className={styles.navTitle}>Bem-vindo</h1>
      <ul className={styles.navList}>
        {[
          { id: "about", label: "Sobre" },
          { id: "skills", label: "Habilidades" },
          { id: "projects", label: "Projetos" },
          { id: "contact", label: "Contatos" },
        ].map((item) => (
          <li key={item.id} className={styles.navItem}>
            <button
              className={styles.navLink}
              onClick={() => handleScroll(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
