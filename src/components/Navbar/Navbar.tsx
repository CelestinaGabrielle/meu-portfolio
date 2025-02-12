import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useInView } from "react-intersection-observer";

interface NavbarProps {
  isOpen: boolean;
  toggleNavbar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, toggleNavbar }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Anima apenas uma vez
    threshold: 0.2, // Define quando a animação deve ser acionada
  });

  return (
    <nav
      ref={ref}
      className={`${styles.navbar} ${isOpen ? styles.open : styles.closed} ${
        inView ? styles.visible : ""
      }`}
    >
      <h1 className={styles.navTitle}>Bem-vindo ao meu Portfólio</h1>
      <ul className={styles.navList}>
        {[
          { href: "/About", label: "Sobre" },
          { href: "/Skills", label: "Habilidades" },
          { href: "/Projects", label: "Projetos" },
          { href: "/Contact", label: "Contatos" },
        ].map((item) => (
          <li key={item.href} className={styles.navItem}>
            <Link
              href={item.href}
              className={styles.navLink}
              onClick={toggleNavbar}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
