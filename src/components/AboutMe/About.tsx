import React from "react";
import styles from "./About.module.css";

const AboutMe: React.FC = () => {
  return (
    <div className={styles.aboutText}>
      <h1> Sobre mim</h1>
      <p>
        Desenvolvedora Front-End com experiência em
       React.js, Next.js, TypeScript e JavaScript. Atualmente,
        atuo no TCM-GO, auxiliando no desenvolvimento de
        software e resolução de incidentes.
        Formada como técnica em Informática pelo IFBA e cursando
        Engenharia de Software sou apaixonada por
        interfaces intuitivas e componentes reutilizáveis,
        sempre focando na experiência do usuário e na performance das aplicações. 
      </p>
    </div>
  );
};

export default AboutMe;
