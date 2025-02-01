import React from "react";
import styles from "./About.module.css";

const About: React.FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.containerAbout}>
        <h1>Olá, eu sou Gabrielle Celestina</h1>
        <p>Desenvolvedora Front-End</p>
        <button className={styles.btn}>Baixar Currículo</button>
      </div>
    </section>
  );
};

export default About;
