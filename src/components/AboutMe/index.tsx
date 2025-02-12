import React from "react";
import { useInView } from "react-intersection-observer"; // Importando o hook
import styles from "./About.module.css";

const AboutMe: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.6, 
  });

  return (
    <div
      ref={ref}
      className={`${styles.aboutText} ${inView ? styles.animate : ""}`}
    >
      <h1>Sobre mim</h1>
      <p>
        Desenvolvedora front-end apaixonada por transformar ideias em
        interfaces bonitas e funcionais.
        <br />
        Desenvolvo principalmente com HTML, CSS, JavaScript, React, TypeScript e
        Next.js, sempre buscando aprender e acompanhar as novidades do mundo
        tech.
        <br />
        No momento, também estou encarando um desafio no back-end, implementando
        uma solução em Node.js e Next.js para consumir a API REST do GitLab. Sou
        formada como técnica em informática pelo IFBA e atualmente curso
        Engenharia de Software. Desde que comecei a programar, percebi que a
        tecnologia não é só código — é sobre resolver problemas, conectar
        pessoas e criar algo que realmente impacte o dia a dia de alguém. E é
        isso que me motiva a seguir nessa jornada.
      </p>
    </div>
  );
};

export default AboutMe;
