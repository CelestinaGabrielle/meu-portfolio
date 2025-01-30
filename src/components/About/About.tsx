import React from "react";
import "./About.css"

const About: React.FC = () => {
  return (
    <section className="about"> {/* Alterei para "section" e classe "about" */}
      <div className="container">
        <h1>Olá, eu sou Gabrielle Celestina</h1>
        <p>Desenvolvedora Front-End</p>
        <button className="btn">Baixar Currículo</button>
      </div>
    </section>
  );
};

export default About;