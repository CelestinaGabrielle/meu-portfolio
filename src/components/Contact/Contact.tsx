import React from "react";
import styles from "./Contact.module.css";

const Contact: React.FC = () => {
  return (
    <section className={styles.contact} id="contact">
      <h2>Contato</h2>
      <p>Você pode me encontrar nas redes sociais ou enviar um e-mail:</p>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/gabrielle-celestina-252564175/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/CelestinaGabrielle" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href="gabriellecelestinaa@gmail.com">E-mail</a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;