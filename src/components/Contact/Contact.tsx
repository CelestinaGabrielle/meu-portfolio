import React from "react";
import styles from "./Contact.module.css"; // Importando o CSS Module

const Contact: React.FC = () => {
  return (
    <section className={styles.contact}>
      <h2>Contato</h2>
      <p>Você pode me encontrar nas redes sociais ou enviar um e-mail:</p>
      <ul>
        <li>
          <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href="mailto:seu-email@email.com">E-mail</a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;