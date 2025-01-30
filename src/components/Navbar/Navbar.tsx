import React from "react";
import "./Navbar.css"; // Importação do CSS

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#habilidades">Habilidades</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#contatos">Contatos</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
